/**
 * 3. Custom Hook Composability
 * This hook is designed to manage the online status of the user's browser.
 * It uses the `navigator.onLine` property to determine the online status.
 * It also listens to the `online` and `offline` events to update the status accordingly.
 */

import { useState } from "react";
import { useGlobalEvent } from "./use-global-event.hook";

export const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState<boolean>(navigator.onLine);

    const updateOnlineStatus = () => setOnlineStatus(navigator.onLine);

    useGlobalEvent('online', updateOnlineStatus);
    useGlobalEvent('offline', updateOnlineStatus);

    return onlineStatus;
}