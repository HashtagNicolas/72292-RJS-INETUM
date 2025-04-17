import React, { Component, FC, useEffect } from 'react';
import { BaseHeaderWrapper } from './BaseHeader.styled';

interface BaseHeaderProps {
   children: React.ReactNode;
}

/**
 * USAGE: BaseHeader description to complete.
 * @example
 * <BaseHeader /> 
 */
class BaseHeaderClass extends Component<BaseHeaderProps> {
   /**
    * En héritant de Component, 
    * on peut utiliser le cycle de vie des composants React
    * et gérer les états locaux (d'une fonctionnalité de notification de Rendu).
   */
   static displayName = 'BaseHeader';

   time = this.getTime();

   tick() {
      this.time = this.getTime();
      console.log(this.time);
   }

   getTime() {
      return (new Date()).toTimeString().split(' ')[0]
   }

   interval: unknown = null;
   constructor(props: BaseHeaderProps) {
      super(props);
   }

   componentDidMount(): void {
      // ComponentDidMount is called after the component is mounted
      console.log('BaseHeader mounted');
      this.interval = setInterval(() => {
         this.tick();
         this.setState({}) // Héritée de Component
      }, 1000);
   }

   componentDidUpdate(prevProps: Readonly<BaseHeaderProps>, prevState: Readonly<{}>, snapshot?: any): void {
      // ComponentDidUpdate is called after the component is updated
      console.log('BaseHeader updated');
      console.log('prevProps', prevProps);
      console.log('prevState', prevState);
   }

   componentWillUnmount(): void {
      // ComponentWillUnmount is called before the component is unmounted
      console.log('BaseHeader unmounted');
      clearInterval(this.interval as number);
   }

   render() {
      return (
         <BaseHeaderWrapper data-testid="BaseHeader">
            <h1>{this.props.children}</h1><h2>{this.time}</h2>
         </BaseHeaderWrapper>
      );
   }
}

/**
 * @description Custom Hook to get user's local time
 * @returns User's local time
 * @example
 * const time = useTime();
 */
const useTime = () => {
   // Custom Hooks - permette de refactoriser le code
   // et de réutiliser la logique
   const [time, setTime] = React.useState(new Date().toTimeString().split(' ')[0]);

   useEffect(() => {

      const interval = setInterval(() => {
         setTime(new Date().toTimeString().split(' ')[0]);
      }, 1000);

      return () => { // Cleanup function is called before the component is unmounted
         clearInterval(interval);
      };

   }, []);

   return time;
}

const BaseHeader: FC<BaseHeaderProps> = ({children}) => {
   /**
    * En utilisant une fonction fléchée, 
    * on peut utiliser le cycle de vie des composants React
    * et gérer les états locaux (d'une fonctionnalité de notification de Rendu).
   */

   const time = useTime();
 
   return (
      <BaseHeaderWrapper data-testid="BaseHeader">
         <h1>{children}</h1><h2>{time}</h2>
      </BaseHeaderWrapper>
   );
}

const BaseHeaderMemo = React.memo(BaseHeader, (prevProps, nextProps) => {
   /*
   Compare props to prevent unnecessary re-renders
   return true if props are equal
   return false if props are not equal
   */
   console.log(prevProps, nextProps)
   return true;
});
BaseHeaderMemo.displayName = 'BaseHeader Memoized';

export default BaseHeaderMemo;
