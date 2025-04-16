import React, { FC } from 'react';
import { TemplateNameWrapper } from './TemplateName.styled';

interface TemplateNameProps {}

/**
 * USAGE: TemplateName description to complete.
 * @example
 * <TemplateName /> 
 */
const Test: FC<TemplateNameProps> = () => (
 <TemplateNameWrapper data-testid="TemplateName">
    TemplateName Component
 </TemplateNameWrapper>
);


export default TemplateName;
