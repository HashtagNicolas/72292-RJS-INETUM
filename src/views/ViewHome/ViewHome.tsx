import  { FC } from 'react';
import './ViewHome.style.css';
import * as UI from '../../components';

interface ViewHomeProps {}

const ViewHome: FC<ViewHomeProps> = () => (
 <div className="ViewHome" data-testid="ViewHome">
    <UI.BaseHeader />
    <UI.BaseButton />
    ViewHome Component
    <UI.BaseFooter />
 </div>
);

export default ViewHome;
