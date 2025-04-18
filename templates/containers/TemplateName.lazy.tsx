import React, { Suspense } from 'react';
import { TemplateNameProps } from './TemplateName.types';

const LazyTemplateName =  React.lazy(() => import('./TemplateName'));

/**
 * USAGE: TemplateName description to complete.
 * @example
 * <TemplateName /> 
 */
const TemplateName = (props: JSX.IntrinsicAttributes & TemplateNameProps) => (
  <Suspense fallback={null}>
    <LazyTemplateName {...props} />
  </Suspense>
);
TemplateName.displayName = 'TemplateName Lazy Loaded';

export default TemplateName;
