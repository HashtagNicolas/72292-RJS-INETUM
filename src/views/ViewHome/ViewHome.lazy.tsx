import React, { Suspense } from 'react';

const LazyViewHome = React.lazy(() => import('./ViewHome'));

/**
 * USAGE: ViewHome description to complete.
 * @example
 * <ViewHome /> 
 */
const ViewHome = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyViewHome {...props} />
  </Suspense>
);
ViewHome.displayName = 'ViewHome Lazy Loaded';

export default ViewHome;
