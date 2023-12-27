import React, { lazy, Suspense } from 'react';

const LazySrcComponentsHeader = lazy(() => import('./SrcComponentsHeader'));

const SrcComponentsHeader = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySrcComponentsHeader {...props} />
  </Suspense>
);

export default SrcComponentsHeader;
