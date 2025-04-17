/**
 * 1. Composables Hooks
 * Crée un hook pour gérer les événements globaux dans une application React.
 * @param eventName - Le nom de l'événement à écouter (ex: 'resize', 'scroll', etc.).
 * @param callback - La fonction à exécuter lorsque l'événement est déclenché.
 */

import { useEffect } from "react";


export const useGlobalEvent = (eventName: string, callback: EventListener) => {
  // 2. Utilisation de useEffect pour ajouter et supprimer l'écouteur d'événement
  useEffect(() => {
    // 3. Vérification si window existe
    if (typeof window !== 'undefined') {
      window.addEventListener(eventName, callback);
    }

    // 4. Fonction de nettoyage pour supprimer l'écouteur d'événement
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener(eventName, callback);
      }
    };
  }, [eventName, callback]); // 5. Dépendances du hook
}