import styles from './SubscriptionCard.module.css'

interface Subscription {
  id: string;
  offerTitle: string;
  status: string;
  price: number;
  currency: string;
  nextPaymentDate: string;
}

const SubscriptionCard = ( {subscription}: {subscription: Subscription}) => {
  const { offerTitle, status, price, currency, nextPaymentDate } = subscription;

  const formattedDate = new Date(nextPaymentDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className={styles.card}>
      <h3>{offerTitle}</h3>
      <hr />
      <p>Status: {status}</p>
      <p>Price: {currency} {price}</p>
      <p>Renews on: {formattedDate}</p>
    </div>
  );
}

export default SubscriptionCard
