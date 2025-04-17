/**
 * 4. Custom Hooks
 * Crée un hook pour écouter les événements de touche au niveau global dans une application React.
 * @description A custom hook that listens for a specific keydown event and executes a callback function.
 * @param key - The key to listen for (e.g., 'Enter', 'Escape', etc.).
 * @param callback - The function to execute when the key is pressed.
 * @param options - Contextual keys such as ('ctrl', 'alt', 'shift).
 */

import { useGlobalEvent } from './use-global-event.hook';

/**
 * Must be a keyboard value string, e.g. 'Enter', 'Escape', 'ArrowUp', 'ArrowDown', etc.
 */
type KeyboardValue = string;


/**
 * Listen for a specific keydown event and execute a callback function.
 * @description A custom hook that listens for a specific keydown event and executes a callback function.
 * @param key - The key to listen for (e.g., 'Enter', 'Escape', etc.).
 * @param callback 
 * @param options 'ctrlKey' | 'shiftKey' | 'altKey'
 * @example useGlobalKeydown('Enter', () => console.log('Enter key pressed'));
 */
export const useGlobalKeydown = (
  key: KeyboardValue,
  callback: () => void,
  options?: 'ctrlKey' | 'shiftKey' | 'altKey'
) => {
  useGlobalEvent('keydown', (evt) => {
    const event = evt as KeyboardEvent;

    if ( event.key === key && ( options ? event[options] === true:true) ) {
      callback();
    }

  });
};
 