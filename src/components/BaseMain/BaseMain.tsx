import React, { FC } from 'react';
import { BaseMainWrapper } from './BaseMain.styled';

interface BaseMainProps {}

/**
 * USAGE: BaseMain description to complete.
 * @example
 * <BaseMain /> 
 */
const BaseMain: FC<BaseMainProps> = () => (
 <BaseMainWrapper data-testid="BaseMain">
    BaseMain Component
 </BaseMainWrapper>
);

const BaseMainMemo = React.memo(BaseMain, (prevProps,nextProps) => {
   /*
   Compare props to prevent unnecessary re-renders
   return true if props are equal
   return false if props are not equal
   */
   return true;
});
BaseMainMemo.displayName = 'BaseMain Memoized';

export default BaseMainMemo;
