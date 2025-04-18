/* Application Hooks */
export { useGlobalEvent } from './use-global-event.hook';
export { useTime } from './use-time.hook';
export { useOnlineStatus } from './use-online-status.hook';
export { useGlobalKeydown } from './use-global-keydown.hook';
export { useArrayNavigation } from './use-array-navigation.hook';
export { useSpeechSynthesis } from './use-speech-synthesis.hook';

/* External Hooks */
export { 
    useDocumentTitle, 
    useDebounce,
    useLocalStorage,
    useSessionStorage,
    useGeolocation,
    useFavicon
} from '@uidotdev/usehooks';

export { useForm } from 'react-hook-form';