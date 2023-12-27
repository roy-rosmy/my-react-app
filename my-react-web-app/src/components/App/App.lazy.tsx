import React, { lazy, Suspense } from 'react';

const LazySrcComponentsApp = lazy(() => import('./SrcComponentsApp'));

const SrcComponentsApp = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySrcComponentsApp {...props} />
  </Suspense>
);

export default SrcComponentsApp;
