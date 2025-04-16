import React, { lazy, Suspense } from 'react';

const LazyTest = lazy(() => import('./ViewProduct'));

const ViewProduct = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyTest {...props} />
  </Suspense>
);
ViewProduct.displayName = 'ViewProduct Lazy Loaded';

export default ViewProduct;
