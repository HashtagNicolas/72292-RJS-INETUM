/* Global Imports */
import  { FC } from 'react';

/* Application Level Imports */
import * as UI from '@/components';
import * as Hooks from '@/hooks';

/* Local Imports */
import './ViewProduct.style.css';


interface ViewProductProps {}

const ViewProduct: FC<ViewProductProps> = () => {

   Hooks.useDocumentTitle('ViewProduct View');

   return (
   <div className="ViewProduct" data-testid="ViewProduct">
      <UI.BaseHeader>ViewProduct</UI.BaseHeader>
      <UI.BaseMain> ViewProduct View</UI.BaseMain>
      <UI.BaseFooter />
   </div>
   )
};

export default ViewProduct;
