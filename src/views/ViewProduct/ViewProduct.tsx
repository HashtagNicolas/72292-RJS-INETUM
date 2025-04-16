import  { FC } from 'react';
import './ViewProduct.style.css';

interface ViewProductProps {}

const ViewProduct: FC<ViewProductProps> = () => (
 <div className="ViewProduct" data-testid="ViewProduct">
    ViewProduct Component
 </div>
);

export default ViewProduct;
