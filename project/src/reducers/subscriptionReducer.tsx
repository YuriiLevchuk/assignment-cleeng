import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchSubscriptionsAPI from '../mock-api/api';

interface Subscription {
  id: string;
  offerTitle: string;
  status: 'active' | 'paused' | 'canceled';
  price: number;
  currency: string;
  nextPaymentDate: string;
}

interface SubscriptionsState {
  items: Subscription[];
  loading: boolean;
  error: string | null;
}

const initialState: SubscriptionsState = {
  items: [],
  loading: false,
  error: null,
};

const subscriptionsSlice = createSlice({
  name: 'subscriptions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubscriptions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSubscriptions.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchSubscriptions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

// Async thunk for fetching subscriptions
export const fetchSubscriptions = createAsyncThunk(
  'subscriptions/fetchSubscriptions',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchSubscriptionsAPI();
      return data as Subscription[];
    } catch (err) {
      return rejectWithValue(`Failed to fetch subscriptions.\nError: ${err}`);
    }
  }
);

export default subscriptionsSlice.reducer;

