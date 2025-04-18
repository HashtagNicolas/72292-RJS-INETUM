/**
 * Créer un hook pour gérer la navigation dans un tableau d'éléments.
 * Il permet de naviguer entre les éléments du tableau en utilisant les méthodes "previous" et "next".
 * Il utilise un état local pour suivre l'index actuel de l'élément sélectionné.
 * Il utilise également un effet pour mettre à jour l'index actuel lorsque le tableau change.
 * Il retourne l'index actuel, une fonction pour aller à l'élément précédent ("previous") et une fonction pour aller à l'élément suivant ("next").
 * @param {Array} array - Le tableau d'éléments à naviguer.
 * @param {number} initialIndex - L'index initial de l'élément sélectionné.
 * @returns {Object} - Un objet contenant l'"index" actuel, une fonction pour aller à l'élément précédent ("previous") et une fonction pour aller à l'élément suivant ("next").
 */

export const useArrayNavigation = (array: any[], initialIndex?: number) => {
}