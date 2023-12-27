import React, { lazy, Suspense } from 'react';

const LazySrcComponentsFooter = lazy(() => import('./SrcComponentsFooter'));

const SrcComponentsFooter = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySrcComponentsFooter {...props} />
  </Suspense>
);

export default SrcComponentsFooter;
