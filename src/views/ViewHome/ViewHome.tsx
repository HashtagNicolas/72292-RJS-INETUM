/* Global Imports */
import  { FC } from 'react';

/* Application Level Imports */
import * as UI from '@/components';
import * as Hooks from '@/hooks';

/* Local Imports */
import './ViewHome.style.css';


interface ViewHomeProps {}

const ViewHome: FC<ViewHomeProps> = () => {

   Hooks.useDocumentTitle('ViewHome View');
   Hooks.useFavicon('https://www.inetum.com/themes/custom/web_ui/favicon.ico');

   const { speak } = Hooks.useSpeechSynthesis("Bonjour React");

   return (
   <div className="ViewHome" data-testid="ViewHome">
      <UI.BaseHeader>ViewHome</UI.BaseHeader>
      <UI.BaseMain> 
         
         <UI.BaseButton disabled>ViewHome View</UI.BaseButton>
         <UI.BaseButton onClick={speak}>ViewHome View</UI.BaseButton>
         <UI.BaseButton variant='primary'>ViewHome View</UI.BaseButton>
         <UI.BaseInput/>

      </UI.BaseMain>
      <UI.BaseFooter />
   </div>
   )
};

export default ViewHome;
