import React from 'react';
import { Type } from 'utils/types';

export const Toast = ({
  value,
  type = 'dark',
  title = '',
  onClose,
  index,
}: {
  value: string;
  type?: Type;
  title?: string;
  onClose: () => void;
  index: number;
}) => {
  return (
    <div
      className={`toast toast--${type}`}
      style={{
        position: 'fixed',
        zIndex: index,
        right: '50%',
        bottom: '50px',
        width: '40%'
      }}
    >
      <button className='btn-close' onClick={onClose} />
      {title && <p className='toast--title'>{title}</p>}
      <p>{value}</p>
    </div>
  );
};
