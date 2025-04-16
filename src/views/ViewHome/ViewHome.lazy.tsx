import React, { Suspense } from 'react';

const LazyTest = React.lazy(() => import('./ViewHome'));

const ViewHome = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyTest {...props} />
  </Suspense>
);
ViewHome.displayName = 'ViewHome Lazy Loaded';

export default ViewHome;
