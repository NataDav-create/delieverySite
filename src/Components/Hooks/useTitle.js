import {
  useState
} from 'react';

export function useTitle() {
  const [title, setTitle] = useState('SushiShop');

  // document.title = title;
  return {
    title,
    setTitle
  };
}