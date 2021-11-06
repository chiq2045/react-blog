import React from 'react';
import { Type } from 'utils/types';

export const Toast = ({
  value,
  type = 'error',
  title = '',
  onClose,
  show
}: {
  value: string;
  type?: Type;
  title?: string;
  onClose: () => void;
  show: boolean;
}) => {
  return (
    <div
      className={`toast toast--${type}`}
      style={{
        visibility: show ? 'collapse' : 'hidden',
        position: 'fixed',
        zIndex: 1,
        left: '50%',
        bottom: '30px'
      }}
    >
      <button className='btn-close' onClick={onClose} />
      {title && <p className='toast--title'>{title}</p>}
      <p>{value}</p>
    </div>
  );
};
