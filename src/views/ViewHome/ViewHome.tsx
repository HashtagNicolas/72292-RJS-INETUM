/* Global Imports */
import { FC } from 'react';

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
   return (
      <>
      <hr />
      <img src={(currentValue as { source: string }).source} />
      <button onClick={previous}>Previous</button>
      <code>
        {index}/{images.length}
      </code>
      <button onClick={next}>Next</button>
      </>
   )
}

export default ViewHome;