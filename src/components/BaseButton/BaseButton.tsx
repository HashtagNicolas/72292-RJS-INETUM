/* Global Imports */
import React, { FC } from 'react';

/* Application Level Imports */
import * as Hooks from '@/hooks';

/* Local Imports */
import { BaseButtonWrapper } from './BaseButton.styled';


interface BaseButtonProps { 
   children?: React.ReactNode;
   onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
   disabled?: boolean;
   variant?: 'primary' | 'danger';
   size?: 'small' | 'medium' | 'large';
}

/**
 * USAGE: BaseButton description to complete.
 * @example
 * <BaseButton /> 
 */
const BaseButton: FC<BaseButtonProps> = (props) => {

   // Hooks.useGloblaEvent('click',()=> console.log('click event'));

   console.table(props)

   return(
      <BaseButtonWrapper data-testid="BaseButton" {...props} />
   );

}

const BaseButtonMemo = React.memo(BaseButton, (prevProps, nextProps) => {
   /*
   Compare props to prevent unnecessary re-renders
   return true if props are equal
   return false if props are not equal
   */
   console.log(prevProps, nextProps)
   return prevProps.onClick === nextProps.onClick;
});
BaseButtonMemo.displayName = 'BaseButton Memoized';

export default BaseButtonMemo;
