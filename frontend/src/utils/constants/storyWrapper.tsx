import React, { ReactNode } from 'react';
import 'cirrus-ui';

export const StoryWrapper = ({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) => <div className={className}>{children}</div>;
