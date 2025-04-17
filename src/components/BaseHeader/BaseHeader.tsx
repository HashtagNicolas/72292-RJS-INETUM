import React, { Component /* , FC */ } from 'react';
import { BaseHeaderWrapper } from './BaseHeader.styled';

interface BaseHeaderProps {
   children: React.ReactNode;
}

/**
 * USAGE: BaseHeader description to complete.
 * @example
 * <BaseHeader /> 
 */
class BaseHeader extends Component<BaseHeaderProps> {
   /**
    * En héritant de Component, 
    * on peut utiliser le cycle de vie des composants React
    * et gérer les états locaux (d'une fonctionnalité de notification de Rendu).
   */
   static displayName = 'BaseHeader';

   time = this.getTime();

   tick(){
      this.time = this.getTime();
      console.log(this.time);
   }

   getTime(){
      return (new Date()).toTimeString().split(' ')[0]
   }

   constructor(props: BaseHeaderProps) {
      super(props);
      setInterval(() =>{
         this.tick();
         this.setState({}) // Héritée de Component
      }, 1000);

   }

   componentDidMount(): void {
      // ComponentDidMount is called after the component is mounted
      console.log('BaseHeader mounted');
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
   }

   render() {
      return (
         <BaseHeaderWrapper data-testid="BaseHeader">
           <h1>{this.props.children}</h1><h2>{this.time}</h2>
         </BaseHeaderWrapper>
      );
   }
}

/* const BaseHeader: FC<BaseHeaderProps> = () => (
 <BaseHeaderWrapper data-testid="BaseHeader">
    BaseHeader Component
 </BaseHeaderWrapper>
);
 */
const BaseHeaderMemo = React.memo(BaseHeader, (prevProps,nextProps) => {
   /*
   Compare props to prevent unnecessary re-renders
   return true if props are equal
   return false if props are not equal
   */
  console.log(prevProps,nextProps)
   return true;
});
BaseHeaderMemo.displayName = 'BaseHeader Memoized';

export default BaseHeaderMemo;
