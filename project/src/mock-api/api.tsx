import { mockSubscriptions } from './mock-data';

const fetchSubscriptions = async() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockSubscriptions);
    }, 1000);
  });
}

export default fetchSubscriptions