/* Global Imports */
import React, { FC } from 'react';

/* Application Level Imports */
import * as Hooks from '@/hooks';

/* Local Imports */
import { BaseFooterWrapper } from './BaseFooter.styled';


interface BaseFooterProps { }

/**
 * USAGE: BaseFooter description to complete.
 * @example
 * <BaseFooter /> 
 */
const BaseFooter: FC<BaseFooterProps> = () => {

   // Hooks.useGloblaEvent('click',()=> console.log('click event'));

   return(
   <BaseFooterWrapper data-testid="BaseFooter">
      BaseFooter Component
   </BaseFooterWrapper>
   );

}

const BaseFooterMemo = React.memo(BaseFooter, (prevProps, nextProps) => {
   /*
   Compare props to prevent unnecessary re-renders
   return true if props are equal
   return false if props are not equal
   */
   console.log(prevProps, nextProps)
   return true;
});
BaseFooterMemo.displayName = 'BaseFooter Memoized';

export default BaseFooterMemo;
