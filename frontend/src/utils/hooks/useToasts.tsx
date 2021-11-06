import { useState } from 'react';
import { Toast } from 'utils/types';

export const useToasts = () => {
  const [toasts, setToasts] = useState<Array<Toast>>([]);

  const addToast = (toast: Toast) => {
    setToasts([...toasts, toast]);
  };

  const removeToast = (id: string) => {
    const toastId = toasts.findIndex((t) => t.id === id);
    if (toastId >= 0) {
      setToasts(toasts.splice(toastId, 1));
    }
  };

  return {
    toasts,
    addToast,
    removeToast
  };
};
