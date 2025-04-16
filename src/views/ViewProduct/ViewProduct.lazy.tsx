import React, { Suspense } from 'react';

const LazyViewProduct = React.lazy(() => import('./ViewProduct'));

/**
 * USAGE: ViewProduct description to complete.
 * @example
 * <ViewProduct /> 
 */
const ViewProduct = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyViewProduct {...props} />
  </Suspense>
);
ViewProduct.displayName = 'ViewProduct Lazy Loaded';

export default ViewProduct;
