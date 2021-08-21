import React, { ReactNode } from 'react';
import { ApolloError } from '@apollo/client';

export const ErrorPanel = ({
  error,
  children
}: {
  error: ApolloError | undefined;
  children?: ReactNode;
}) => (
  <section className='content'>
    <div className='toast toast--primary'>
      <button className='btn-close'></button>
      <h4 className='toast__title'>Error</h4>
      <p>{children}</p>
      <p>{error?.message}</p>
    </div>
  </section>
);
