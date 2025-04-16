import React, { lazy, Suspense } from 'react';

const LazyTest = lazy(() => import('./TemplateName'));

const TemplateName = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyTest {...props} />
  </Suspense>
);
TemplateName.displayName = 'TemplateName Lazy Loaded';

export default TemplateName;
