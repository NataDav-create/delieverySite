import {
  useState
} from 'react';

export const useModal = () => {
  const [openModalThanks, setOpenOpenModalThanks] = useState(false);
  return {
    openModalThanks,
    setOpenOpenModalThanks,
  };
}