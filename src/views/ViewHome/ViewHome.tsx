import  { FC } from 'react';
import './ViewHome.style.css';
import { BaseButton, BaseFooter, BaseHeader } from '../../components';

interface ViewHomeProps {}

const ViewHome: FC<ViewHomeProps> = () => (
 <div className="ViewHome" data-testid="ViewHome">
    <BaseHeader />
    <BaseButton />
    ViewHome Component
    <BaseFooter />
 </div>
);

export default ViewHome;
