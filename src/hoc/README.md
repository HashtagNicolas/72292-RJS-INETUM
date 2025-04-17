# Le Pattern HOC (Higher-Order Component) en React

Un Higher-Order Component (HOC) est une fonction qui prend un composant en argument et retourne un nouveau composant enrichi. C’est une manière de réutiliser de la logique entre plusieurs composants.

> Convention, commence par "with"

```jsx
const withSomething = (WrappedComponent) => {
  return (props) => {
    // logique supplémentaire
    return <WrappedComponent {...props} />;
  };
};
```