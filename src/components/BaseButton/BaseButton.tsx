/* Global Imports */
import React, { FC } from 'react';

/* Application Level Imports */
import * as Hooks from '@/hooks';

/* Local Imports */
import { BaseButtonWrapper } from './BaseButton.styled';


interface BaseButtonProps { }

/**
 * USAGE: BaseButton description to complete.
 * @example
 * <BaseButton /> 
 */
const BaseButton: FC<BaseButtonProps> = () => {

   // Hooks.useGloblaEvent('click',()=> console.log('click event'));

   return(
   <BaseButtonWrapper data-testid="BaseButton">
      BaseButton Component
   </BaseButtonWrapper>
   );

}

const BaseButtonMemo = React.memo(BaseButton, (prevProps, nextProps) => {
   /*
   Compare props to prevent unnecessary re-renders
   return true if props are equal
   return false if props are not equal
   */
   console.log(prevProps, nextProps)
   return true;
});
BaseButtonMemo.displayName = 'BaseButton Memoized';

export default BaseButtonMemo;
