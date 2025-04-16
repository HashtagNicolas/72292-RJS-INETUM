import React, { FC } from 'react';
import { TemplateNameWrapper } from './TemplateName.styled';

interface TemplateNameProps {}

/**
 * USAGE: TemplateName description to complete.
 * @example
 * <TemplateName /> 
 */
const TemplateName: FC<TemplateNameProps> = () => (
 <TemplateNameWrapper data-testid="TemplateName">
    TemplateName Component
 </TemplateNameWrapper>
);

const TemplateNameMemo = React.memo(TemplateName, (prevProps,nextProps) => {
   /*
   Compare props to prevent unnecessary re-renders
   return true if props are equal
   return false if props are not equal
   */
   return true;
});
TemplateNameMemo.displayName = 'TemplateName Memoized';

export default TemplateNameMemo;
