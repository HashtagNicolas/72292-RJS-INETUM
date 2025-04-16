import React, { FC } from 'react';
import { BaseTextWrapper } from './BaseText.styled';

interface BaseTextProps {}

/**
 * USAGE: BaseText description to complete.
 * @example
 * <BaseText /> 
 */
const BaseText: FC<BaseTextProps> = () => (
 <BaseTextWrapper data-testid="BaseText">
    BaseText Component
 </BaseTextWrapper>
);

const BaseTextMemo = React.memo(BaseText, (prevProps,nextProps) => {
   /*
   Compare props to prevent unnecessary re-renders
   return true if props are equal
   return false if props are not equal
   */
  console.log(prevProps,nextProps)
   return true;
});
BaseTextMemo.displayName = 'BaseText Memoized';

export default BaseTextMemo;
