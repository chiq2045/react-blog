import React, { ReactNode } from 'react';
import { ApolloError } from '@apollo/client';

export const ErrorPanel = ({
  error,
  errorTitle
}: {
  error: ApolloError | undefined;
  errorTitle?: ReactNode;
}) => (
  <section className='content'>
    <div className='toast toast--primary'>
      <button className='btn-close'></button>
      <h4 className='toast__title'>{errorTitle ?? 'Error'}</h4>
      <p>{error?.message}</p>
    </div>
  </section>
);
