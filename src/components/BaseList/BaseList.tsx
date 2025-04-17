/* Global Imports */
import React, { FC } from 'react';

/* Application Level Imports */
import * as Hooks from '@/hooks';

/* Local Imports */
import { BaseListWrapper } from './BaseList.styled';


interface BaseListProps { }

/**
 * USAGE: BaseList description to complete.
 * @example
 * <BaseList /> 
 */
const BaseList: FC<BaseListProps> = () => {

   // Hooks.useGloblaEvent('click',()=> console.log('click event'));

   return(
   <BaseListWrapper data-testid="BaseList">
      BaseList Component
   </BaseListWrapper>
   );

}

const BaseListMemo = React.memo(BaseList, (prevProps, nextProps) => {
   /*
   Compare props to prevent unnecessary re-renders
   return true if props are equal
   return false if props are not equal
   */
   console.log(prevProps, nextProps)
   return true;
});
BaseListMemo.displayName = 'BaseList Memoized';

export default BaseListMemo;
