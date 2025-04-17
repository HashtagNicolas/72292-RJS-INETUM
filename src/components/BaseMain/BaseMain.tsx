/* Global Imports */
import React, { FC } from 'react';

/* Application Level Imports */
import * as Hooks from '@/hooks';

/* Local Imports */
import { BaseMainWrapper } from './BaseMain.styled';


interface BaseMainProps {
   children?: React.ReactNode;
 }

/**
 * USAGE: BaseMain description to complete.
 * @example
 * <BaseMain /> 
 */
const BaseMain: FC<BaseMainProps> = ( props ) => {

   // Hooks.useGloblaEvent('click',()=> console.log('click event'));

   return(
   <BaseMainWrapper data-testid="BaseMain">
      BaseMain Component
      { props.children }
   </BaseMainWrapper>
   );

}

const BaseMainMemo = React.memo(BaseMain, (prevProps, nextProps) => {
   /*
   Compare props to prevent unnecessary re-renders
   return true if props are equal
   return false if props are not equal
   */
   console.log(prevProps, nextProps)
   return true;
});
BaseMainMemo.displayName = 'BaseMain Memoized';

export default BaseMainMemo;
