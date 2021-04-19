import {
  useState
} from 'react';

export function useShowOrders() {
  const [showOrder, setShowOrder] = useState(true);
  return {
    showOrder,
    setShowOrder
  }
}