/* Global Imports */
import { FC } from 'react';
import styled from '@emotion/styled';

/* Application Level Imports */
import * as UI from '@/components';
import * as Hooks from '@/hooks';

/* Local Imports */
import './ViewHome.style.css';
import { ReturnObject } from '@/hooks/use-array-navigation.hook';

interface ViewHomeProps {}

const ViewHome: FC<ViewHomeProps> = () => {

  Hooks.useDocumentTitle('ViewHome View');
  Hooks.useFavicon('https://www.inetum.com/themes/custom/web_ui/favicon.ico');
  const { speak } = Hooks.useSpeechSynthesis('Bonjour React');

  return (
    <div
      className="ViewHome"
      data-testid="ViewHome"
    >
      <UI.BaseHeader>ViewHome</UI.BaseHeader>
      <UI.BaseMain>
        <UI.BaseButton disabled>ViewHome View</UI.BaseButton>
        <UI.BaseButton onClick={speak}>ViewHome View</UI.BaseButton>
        <UI.BaseButton variant="primary">ViewHome View</UI.BaseButton>
        <UI.BaseInput />
        <Carousel />
      </UI.BaseMain>
      <UI.BaseFooter />
    </div>
  );
};

const Carousel = () => {
   const images = [
      { source: 'https://picsum.photos/200/300' },
      { source: 'https://picsum.photos/201/301' },
      { source: 'https://picsum.photos/202/302' },
      { source: 'https://picsum.photos/203/303' },
    ];
    const { previous, next, index, currentValue } = Hooks.useArrayNavigation(
     images
   ) as ReturnObject;

   Hooks.useGlobalKeydown('ArrowLeft', previous);
   Hooks.useGlobalKeydown('ArrowRight', next);
   
   return (
      <CarouselWrapper>
         <hr />
         <img src={(currentValue as { source: string }).source} />
         <UI.BaseButton onClick={previous}>Previous</UI.BaseButton>
         <code>
         {index + 1}/{images.length}
         </code>
         <UI.BaseButton onClick={next}>Next</UI.BaseButton>
      </CarouselWrapper>
   )
}

const CarouselWrapper= styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin: 0 auto;
   width: 100%;
   height: 100%;
   background-color: #f5f5f5;
   border-radius: 10px;
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export default ViewHome;