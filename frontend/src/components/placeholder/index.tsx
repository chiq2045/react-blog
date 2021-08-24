import React, { ReactNode } from 'react';

export const Placeholder = ({
  title,
  subtitle,
  actions = {
    refresh: true,
    home: true
  }
}: {
  title: ReactNode;
  subtitle: ReactNode;
  actions?: { refresh?: boolean; home?: boolean };
}) => (
  <div className='placeholder'>
    <div className='placeholder-icon'>
      <span className='icon'>
        <i className='fa fa-wrapper fa-coffee x-large'></i>
      </span>
    </div>
    <h6 className='placeholder-title'>{title}</h6>
    <div className='placeholder-subtitle'>{subtitle}</div>
    {actions && (
      <div className='placeholder-commands u-center'>
        {actions.refresh && (
          <div className='m-1'>
            <button className='btn-primary'>Refresh</button>
          </div>
        )}
        {actions.home && (
          <div className='m-1'>
            <button>Home</button>
          </div>
        )}
      </div>
    )}
  </div>
);
