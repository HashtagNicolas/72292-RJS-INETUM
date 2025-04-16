import React, { FC } from 'react';
import { BaseListWrapper } from './BaseList.styled';

interface BaseListProps {}

/**
 * USAGE: BaseList description to complete.
 * @example
 * <BaseList /> 
 */
const BaseList: FC<BaseListProps> = () => (
 <BaseListWrapper data-testid="BaseList">
    BaseList Component
 </BaseListWrapper>
);

const BaseListMemo = React.memo(BaseList, (prevProps,nextProps) => {
   /*
   Compare props to prevent unnecessary re-renders
   return true if props are equal
   return false if props are not equal
   */
  console.log(prevProps,nextProps)
   return true;
});
BaseListMemo.displayName = 'BaseList Memoized';

export default BaseListMemo;
