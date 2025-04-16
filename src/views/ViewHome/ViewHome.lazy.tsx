import React, { lazy, Suspense } from 'react';

const LazyTest = lazy(() => import('./ViewHome'));

const ViewHome = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyTest {...props} />
  </Suspense>
);
ViewHome.displayName = 'ViewHome Lazy Loaded';

export default ViewHome;
