import { useDispatch } from 'react-redux';
import { cancelSubscription } from '../../reducers/subscriptionReducer.tsx';
import type { Subscription } from '../../reducers/subscriptionReducer.tsx';

import styles from './SubscriptionCard.module.css';

const SubscriptionCard = ( { subscription }: { subscription: Subscription }) => {
  const { id, offerTitle, status, price, currency, nextPaymentDate } = subscription;
  const dispatch = useDispatch();

  const formattedDate = new Date(nextPaymentDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const handleCancel = () => {
    dispatch(cancelSubscription(id));
  };

  return (
    <div className={styles.card}>
      <h3>{offerTitle}</h3>
      <hr />
      <p>Status: {status}</p>
      <p>Price: {currency} {price}</p>
      <p>Renews on: {formattedDate}</p>

      <button
        onClick={handleCancel}
        disabled={status === 'canceled'}
        className={styles.cancelButton}
      >
        {status === 'canceled' ? 'Canceled' : 'Cancel'}
      </button>
    </div>
  );
};

export default SubscriptionCard;
