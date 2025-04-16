import React, { FC } from 'react';
import { BaseInputWrapper } from './BaseInput.styled';

interface BaseInputProps {}

/**
 * USAGE: BaseInput description to complete.
 * @example
 * <BaseInput /> 
 */
const BaseInput: FC<BaseInputProps> = () => (
 <BaseInputWrapper data-testid="BaseInput">
    BaseInput Component
 </BaseInputWrapper>
);

const BaseInputMemo = React.memo(BaseInput, (prevProps,nextProps) => {
   /*
   Compare props to prevent unnecessary re-renders
   return true if props are equal
   return false if props are not equal
   */
  console.log(prevProps,nextProps)
   return true;
});
BaseInputMemo.displayName = 'BaseInput Memoized';

export default BaseInputMemo;
