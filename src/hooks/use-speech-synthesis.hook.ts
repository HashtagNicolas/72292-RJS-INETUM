/**
 * Créer un hook pour gérer la synthèse vocale.
 * Il utilise l'API Web Speech pour convertir le texte en parole.
 * Il permet de lire la synthèse vocale.   
 * @param {string} text - Le texte à lire.
 * @returns {Object} - Un objet contenant la méthodes pour lire ("speak")
 * 
 * @see https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis
 * 
 * Utilsez les hook d'optimisation de React appropriés.
 */

export const useSpeechSynthesis = (text: string): { speak: () => void } => {
    // traps : anticipation des cas d'exclusion (pour éviter la complexité cyclomatique)
    if (text === '') {
        return { speak: noSpeak };
    }

    if (!window.speechSynthesis) {
        console.warn('Speech Synthesis not supported in this browser.');
        return { speak: noSpeak };
    }

    const speak = () => {
        /* const utterance = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance); */
        speaker(text);
    }

    return { speak };
}

const createSpeaker = (lang:string = 'en-US') => {
    return (text: string) => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.8; 
        utterance.voice = window.speechSynthesis.getVoices().find((voice) => voice.lang === lang) || null;
        utterance.lang = lang ; 
        speechSynthesis.speak(utterance);
    }
}

const speaker = createSpeaker('fr-FR');

const noSpeak = () => { };