import {
  useState
} from 'react';

export function useShowOrders() {
  const [showOrder, setShowOrder] = useState(false);
  return {
    showOrder,
    setShowOrder
  }
}