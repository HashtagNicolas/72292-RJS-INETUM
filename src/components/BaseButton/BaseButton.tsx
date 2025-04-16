import React, { FC } from 'react';
import { BaseButtonWrapper } from './BaseButton.styled';

interface BaseButtonProps {}

/**
 * USAGE: BaseButton description to complete.
 * @example
 * <BaseButton /> 
 */
const BaseButton: FC<BaseButtonProps> = () => (
 <BaseButtonWrapper data-testid="BaseButton">
    BaseButton Component
 </BaseButtonWrapper>
);

const BaseButtonMemo = React.memo(BaseButton, (prevProps,nextProps) => {
   /*
   Compare props to prevent unnecessary re-renders
   return true if props are equal
   return false if props are not equal
   */
  console.log(prevProps,nextProps)
   return true;
});
BaseButtonMemo.displayName = 'BaseButton Memoized';

export default BaseButtonMemo;
