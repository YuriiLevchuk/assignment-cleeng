import { useEffect } from 'react';
import SubscriptionCard from '../SubscriptionCard/SubscriptionCard.tsx';

import { useDispatch, useSelector } from 'react-redux';
import { fetchSubscriptions } from '../../reducers/subscriptionReducer.tsx';
import type { AppDispatch } from '../../store.tsx';
import type { RootState } from '../../store.tsx';

import styles from './SubscriptionList.module.css';



export function SubscriptionsList() {
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading, error } = useSelector(
    (state: RootState) => state.subscriptions
  );

  useEffect(() => {
    dispatch(fetchSubscriptions());
  }, [dispatch]);

  if (loading) return <div className={styles.centered}>Loading...</div>;
  if (error) return <div className={styles.centered} style={{ color: 'red' }}>{error}</div>;

  return (
    <div className={styles.container}>
      {items.map((sub) => (
        <SubscriptionCard key={sub.id} subscription={sub} />
      ))}
    </div>
  );
}
