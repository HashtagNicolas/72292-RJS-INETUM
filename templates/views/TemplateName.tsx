/* Global Imports */
import  { FC } from 'react';

/* Application Level Imports */
import * as UI from '@/components';
import * as Hooks from '@hooks';

/* Local Imports */
import './TemplateName.style.css';


interface TemplateNameProps {}

const TemplateName: FC<TemplateNameProps> = () => {

   Hooks.useDocumentTitle('TemplateName View');

   return (
   <div className="TemplateName" data-testid="TemplateName">
      <UI.BaseHeader>TemplateName</UI.BaseHeader>
      <UI.BaseMain> TemplateName View</UI.BaseMain>
      <UI.BaseFooter />
   </div>
   )
};

export default TemplateName;
