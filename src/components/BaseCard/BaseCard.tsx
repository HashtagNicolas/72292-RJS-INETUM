import React, { FC } from 'react';
import { BaseCardWrapper } from './BaseCard.styled';

interface BaseCardProps {}

/**
 * USAGE: BaseCard description to complete.
 * @example
 * <BaseCard /> 
 */
const BaseCard: FC<BaseCardProps> = () => (
 <BaseCardWrapper data-testid="BaseCard">
    BaseCard Component
 </BaseCardWrapper>
);

const BaseCardMemo = React.memo(BaseCard, (prevProps,nextProps) => {
   /*
   Compare props to prevent unnecessary re-renders
   return true if props are equal
   return false if props are not equal
   */
   return true;
});
BaseCardMemo.displayName = 'BaseCard Memoized';

export default BaseCardMemo;
