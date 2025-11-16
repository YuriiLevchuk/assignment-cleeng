import { useEffect, useState } from 'react';
import fetchSubscriptions from '../../mock-api/api';
import SubscriptionCard from '../SubscriptionCard/SubscriptionCard.tsx';

import styles from './SubscriptionList.module.css';

interface Subscription {
  id: string;
  offerTitle: string;
  status: string;
  price: number;
  currency: string;
  nextPaymentDate: string;
}

export function SubscriptionsList() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async() => {
      try {
        const data = await fetchSubscriptions();
        setSubscriptions(data as Subscription[]);
      } catch (err) {
        setError(`Failed to load subscriptions.\nError: ${err}`);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div className={styles.container}>
      {subscriptions.map((sub) => (
        <SubscriptionCard key={sub.id} subscription={sub} />
      ))}
    </div>
  );
}
