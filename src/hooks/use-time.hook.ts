import React from "react";

/**
 * @description Custom Hook to get user's local time
 * @returns User's local time
 * @example
 * const time = useTime();
 */
export const useTime = () => {
   // Custom Hooks - permette de refactoriser le code
   // et de réutiliser la logique
   const [time, setTime] = React.useState(new Date().toTimeString().split(' ')[0]);

   React.useEffect(() => {

      const interval = setInterval(() => {
         setTime(new Date().toTimeString().split(' ')[0]);
      }, 1000);

      return () => { // Cleanup function is called before the component is unmounted
         clearInterval(interval);
      };

   }, []);

   return time;
}
