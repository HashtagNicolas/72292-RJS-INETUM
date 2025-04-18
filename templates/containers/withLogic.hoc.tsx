/* Global Imports */
import { FC } from 'react';

/* Application Imports */
// Add any necessary imports here

/* Local Imports */
import './TemplateName.style.css';
import { TemplateNameProps } from './TemplateName.types';
import { useLogic } from "./useLogic.hook";

export const withLogic = (Component:FC<TemplateNameProps>) => {

    return ((props:object) => {
        const logic = useLogic();
        return <Component logic={logic} {...props}/>
    }
}