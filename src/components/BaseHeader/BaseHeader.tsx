import React, { FC } from 'react';
import { BaseHeaderWrapper } from './BaseHeader.styled';

interface BaseHeaderProps {}

/**
 * USAGE: BaseHeader description to complete.
 * @example
 * <BaseHeader /> 
 */
const BaseHeader: FC<BaseHeaderProps> = () => (
 <BaseHeaderWrapper data-testid="BaseHeader">
    BaseHeader Component
 </BaseHeaderWrapper>
);

const BaseHeaderMemo = React.memo(BaseHeader, (prevProps,nextProps) => {
   /*
   Compare props to prevent unnecessary re-renders
   return true if props are equal
   return false if props are not equal
   */
   return true;
});
BaseHeaderMemo.displayName = 'BaseHeader Memoized';

export default BaseHeaderMemo;
