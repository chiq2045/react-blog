import React, { ReactNode } from 'react';

interface Props {
  loading: boolean;
  children?: ReactNode;
}

export const Loader = ({ children, loading }: Props) => (
    <div className={loading ? 'lds-spinner' : ''}>
      {children}
    </div>
);

export const TextLoader = ({ children, loading }: Props) => (
  <div className='card u-flex u-items-center u-justify-center'>
    <div className={`animated ${loading ? 'loading' : ''} hide-text`}>{children}</div>
  </div>
);
