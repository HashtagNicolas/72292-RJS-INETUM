/* Global Imports */
import { FC, useEffect, useMemo } from 'react';
import styled from '@emotion/styled';
import { preload } from 'react-dom';

/* Application Level Imports */
import * as UI from '@/components';
import * as Hooks from '@/hooks';

/* Local Imports */
import './ViewHome.style.css';
import { ReturnObject } from '@/hooks/use-array-navigation.hook';

interface ViewHomeProps { }

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
   const images = useMemo<{ source: string }[]>(() => [
      { source: 'https://picsum.photos/200/300' },
      { source: 'https://picsum.photos/201/301' },
      { source: 'https://picsum.photos/202/302' },
      { source: 'https://picsum.photos/203/303' },
   ],[]);

   useEffect(() => {
      images.forEach((image) => preload(image.source,{"as": "image"}));
   },[images]);
   const { previous, next, index, currentValue } = Hooks.useArrayNavigation(
      images
   ) as ReturnObject;

   Hooks.useGlobalKeydown('ArrowLeft', previous);
   Hooks.useGlobalKeydown('ArrowRight', next);

   return (
      <CarouselWrapper>
         <hr />
         <CarouselImage
            source={(currentValue as { source: string }).source}
            alt="Carousel"
         />
         <CarouselControl>
            <UI.BaseButton onClick={previous}>Previous</UI.BaseButton>
            <code>
               {index + 1}/{images.length}
            </code>
            <UI.BaseButton onClick={next}>Next</UI.BaseButton>
         </CarouselControl>
      </CarouselWrapper>
   )
}

const CarouselWrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin: 0 auto;
   width: 280px;
   height: 400px;
   background-color: #f5f5f5;
   border-radius: 10px;
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const CarouselControl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;  
  width: calc(100% - 50px);
`

const CarouselImage = styled.div<{ source: string, alt:string }>`
  background: url(${({ source }) => source}) center center no-repeat;
  background-size: contain;
  border-radius: 10px 10px 0 0;

  width: 200px;
  height: 300px;

  transition: all .6s ease-in-out;

  background-image: url(${({ source }) => source});
`;

export default ViewHome;