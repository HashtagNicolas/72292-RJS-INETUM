/**
 * Créer un hook pour gérer la synthèse vocale.
 * Il utilise l'API Web Speech pour convertir le texte en parole.
 * Il permet de lire, mettre en pause, reprendre et arrêter la synthèse vocale.
 * Il utilise également un état local pour suivre l'état de la synthèse vocale (lecture, pause, arrêt).    
 * @param {string} text - Le texte à lire.
 * @returns {Object} - Un objet contenant la méthodes pour lire ("speak")
 * 
 * @see https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis
 * 
 * Utilsez les hook d'optimisation de React appropriés.
 */

export const useSpeechSynthesis = (text: string) => {
}