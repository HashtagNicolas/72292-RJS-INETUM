/* Global Imports */
import React, { FC } from 'react';

/* Application Level Imports */
import * as Hooks from '@/hooks';

/* Local Imports */
import { BaseImageWrapper } from './BaseImage.styled';


interface BaseImageProps { }

/**
 * USAGE: BaseImage description to complete.
 * @example
 * <BaseImage /> 
 */
const BaseImage: FC<BaseImageProps> = () => {

   // Hooks.useGloblaEvent('click',()=> console.log('click event'));

   return(
   <BaseImageWrapper data-testid="BaseImage">
      BaseImage Component
   </BaseImageWrapper>
   );

}

const BaseImageMemo = React.memo(BaseImage, (prevProps, nextProps) => {
   /*
   Compare props to prevent unnecessary re-renders
   return true if props are equal
   return false if props are not equal
   */
   console.log(prevProps, nextProps)
   return true;
});
BaseImageMemo.displayName = 'BaseImage Memoized';

export default BaseImageMemo;
