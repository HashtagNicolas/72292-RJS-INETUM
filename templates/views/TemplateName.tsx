import  { FC } from 'react';
import './TemplateName.style.css';

interface TemplateNameProps {}

const TemplateName: FC<TemplateNameProps> = () => (
 <div className="TemplateName" data-testid="TemplateName">
    TemplateName Component
 </div>
);

export default TemplateName;
