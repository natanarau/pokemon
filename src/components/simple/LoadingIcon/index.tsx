import { Spin } from 'antd';
import React, { ReactElement } from 'react';

export function LoadingIcon(): ReactElement {
  return <Spin data-testid="LoadingIcon" />;
}
