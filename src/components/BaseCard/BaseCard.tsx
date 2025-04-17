/* Global Imports */
import React, { FC } from 'react';

/* Application Level Imports */
import * as Hooks from '@/hooks';

/* Local Imports */
import { BaseCardWrapper } from './BaseCard.styled';


interface BaseCardProps { }

/**
 * USAGE: BaseCard description to complete.
 * @example
 * <BaseCard /> 
 */
const BaseCard: FC<BaseCardProps> = () => {

   // Hooks.useGloblaEvent('click',()=> console.log('click event'));

   return(
   <BaseCardWrapper data-testid="BaseCard">
      BaseCard Component
   </BaseCardWrapper>
   );

}

const BaseCardMemo = React.memo(BaseCard, (prevProps, nextProps) => {
   /*
   Compare props to prevent unnecessary re-renders
   return true if props are equal
   return false if props are not equal
   */
   console.log(prevProps, nextProps)
   return true;
});
BaseCardMemo.displayName = 'BaseCard Memoized';

export default BaseCardMemo;
