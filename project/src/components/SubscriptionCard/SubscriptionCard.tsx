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
    <div>
      <h3>{offerTitle}</h3>
      <p>Status: {status}</p>
      <p>Price: {currency} {price}</p>
      <p>Renews on: {formattedDate}</p>
      <hr />
    </div>
  );
}

export default SubscriptionCard
