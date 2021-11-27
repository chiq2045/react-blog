import React from 'react';
import striptags from 'striptags';
import sanitize from 'sanitize-html';
import { Toast as ToastType } from 'utils/types';
import { Toast } from 'components/toast';

export const displaySummary = (htmlString: string, maxCharacterCount = 200) => {
  const text = striptags(sanitize(htmlString)).trim();
  if (text.length < maxCharacterCount) {
    return text;
  }
  return `${text.substring(0, maxCharacterCount)}...`;
};

export const displayDate = (dateString: string) =>
  new Date(parseInt(dateString)).toDateString();

export const ShowToast = (
  toast: ToastType,
  index: number,
  removeToast: (id: string) => void
) => (
  <Toast
    key={toast.id}
    value={toast.value}
    onClose={() => removeToast(toast.id)}
    index={index}
  />
);
