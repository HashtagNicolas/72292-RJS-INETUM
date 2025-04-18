/**
 * Créer un hook pour gérer la navigation dans un tableau d'éléments.
 * Il permet de naviguer entre les éléments du tableau en utilisant les méthodes "previous" et "next".
 * Il utilise un état local pour suivre l'index actuel de l'élément sélectionné.
 * Il utilise également un effet pour mettre à jour l'index actuel lorsque le tableau change.
 * Il retourne l'index actuel, une fonction pour aller à l'élément précédent ("previous") et une fonction pour aller à l'élément suivant ("next").
 * @param {Array} array - Le tableau d'éléments à naviguer.
 * @param {number} initialIndex - L'index initial de l'élément sélectionné.
 * @returns {Object} - Un objet contenant l'"index" actuel et la valeur à l'index actuel, une fonction pour aller à l'élément précédent ("previous") et une fonction pour aller à l'élément suivant ("next").
 */

import { useState } from 'react';

type ReturnObject = {
    index: number;
    currentValue: unknown;
    previous: () => void;
    next: () => void;
};
export const useArrayNavigation = (
    array: unknown[],
    initialIndex: number = 0
): ReturnObject | void => {

    /* 
    const [currentIndex, setCurrentIndex] = useState<number>(initialIndex);
    const [currentValue, setCurrentValue] = useState<unknown>(
        array[initialIndex]
    ); 
    */

    const [state,setState] = useState({
        index:initialIndex,
        currentValue:array[initialIndex]
    });

    if (array.length === 0 || !Array.isArray(array)) return;
    if (!Number.isInteger(initialIndex) || initialIndex > array.length - 1)
        return;

    const next = () => {
        const increment = state.index + 1;
        const nextIndex =  increment >= array.length ? 0 :increment;

        /* 
        setCurrentIndex(nextIndex);
        setCurrentValue(array[nextIndex]); 
        */
        setState((/* prevState */) => ({
            index:nextIndex,
            currentValue:array[nextIndex]
        }));
    };

    const previous = () => {
        const decrement = state.index - 1;
        const nextIndex = decrement < 0 ? array.length - 1 :decrement;

        /* 
        setCurrentIndex(nextIndex);
        setCurrentValue(array[nextIndex]); 
        */
        setState((/* prevState */) => ({
            index:nextIndex,
            currentValue:array[nextIndex]
        }));
    };

    const payload: ReturnObject = {
        index: state.index,
        currentValue:state.currentValue,
        next,
        previous,
    };
    return payload;
};