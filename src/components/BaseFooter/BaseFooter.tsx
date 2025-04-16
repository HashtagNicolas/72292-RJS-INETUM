import React, { FC } from 'react';
import { BaseFooterWrapper } from './BaseFooter.styled';

interface BaseFooterProps {}

/**
 * USAGE: BaseFooter description to complete.
 * @example
 * <BaseFooter /> 
 */
const BaseFooter: FC<BaseFooterProps> = () => (
 <BaseFooterWrapper data-testid="BaseFooter">
    BaseFooter Component
 </BaseFooterWrapper>
);

const BaseFooterMemo = React.memo(BaseFooter, (prevProps,nextProps) => {
   /*
   Compare props to prevent unnecessary re-renders
   return true if props are equal
   return false if props are not equal
   */
  console.log(prevProps,nextProps)
   return true;
});
BaseFooterMemo.displayName = 'BaseFooter Memoized';

export default BaseFooterMemo;
