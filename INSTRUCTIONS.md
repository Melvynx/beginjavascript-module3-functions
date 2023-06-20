Les fonctions en programmation, c'est la meilleure invention. Elles te permettent de mieux séparer ton code, d'augmenter la lisibilité et surtout de réutiliser du code.

Dans ce module, on va voir comment créer une fonction, comment l'appeler et comment lui passer des paramètres.

Et dans cet exercice, on va justement passer en revue toutes ces syntaxes en reprenant notre calculatrice, car le code est pour l'instant... vraiment pas beau.

Je te préviens, dans ce module, on va voir beaucoup de concepts JavaScript "avancés" vis-à-vis des fonctions.

Mais ce que j'aime... c'est qu'on va continuer notre calculatrice en CLI, ce qui va nous permettre de voir l'évolution de notre code.

Ce module va être intéressant... voire même épique !

On va voir beaucoup de concepts compliqués. Dans les vidéos solutions, je prendrai le temps de tout t'expliquer et on se retrouvera dans la théorie de ce module pour revoir tout ça ensemble.

## Partie 1 : Validation des nombres

Dans cette première partie, on va venir déplacer la logique de validation des nombres dans une fonction.

Rappelle-toi, on faisait le code suivant pour `firstNumber` ET `secondNumber` :

```js
if (Number.isNaN(firstNumber) || Math.abs(firstNumber) > 100000000000000) {
  console.log(
    "Error: firstNumber is not a number or is too big / too small (max: 100000000000000)"
  );
  process.exit(1);
}
```

Ce serait pratique d'avoir une fonction qui gère **les deux cas** juste en faisant :

```js
validateNumber(firstNumber);
```

Justement, ce sera le sujet de ce module. On va créer la fonction `validateNumber` et déplacer la logique de notre code dedans.

Pour déclarer une fonction, tu utiliseras, pour commencer, la syntaxe suivante :

```js
function validateNumber(number) {
  // Code
}
```

- Le mot clé `function` permet de déclarer une fonction.
- Le nom (`validateNumber`) est le nom de la fonction. Ce qu'on va utiliser pour l'appeler.
- Le paramètre (`number`) est le nom de la variable qui va contenir la valeur qu'on va passer à la fonction.

```js
validateNumber(firstNumber);
//   │           │
//   └──────┐    └────────┐
//          │             │
function validateNumber(number) {
  // Code
}
```

Les émojis sont là pour t'aider.

## Partie 2

Dans cette partie, on va déplacer la logique concernant le `prompt` qui vient récupérer les valeurs de l'input et le transformer en nombre.

On va créer une fonction `promptNumber` qui va nous permettre de récupérer un nombre depuis l'input.

Cette fonction va en plus appeler `validateNumber` pour directement valider tous les nombres qu'on capture depuis l'input.

Cette fonction aura les propriétés suivantes :

- nom : `promptNumber`
- paramètre : `message`
- return : `number` (le nombre récupéré depuis l'input)

Le `return` est un sujet super intéressant dont on parlera longtemps.

```js
function promptNumber(message) {

  const number = /* ... */

  return number;
}//        │
//     ┌───┘
//     │
const value = prompt

Number('Enter a number');
```

Quand on utilise le mot clé `return`, ça permet de retourner une valeur depuis la fonction.

C'est-à-dire que la valeur va "quitter" la fonction pour être "envoyée" à l'endroit où on a appelé la fonction.

Par exemple, le code suivant :

```js
const getPi = () => {
  return 3.14;
};

const pi = getPi();
console.log(pi); // 3.14
```

Le `return` a la spécificité **d'arrêter la lecture** de la fonction. On le verra dans les prochaines parties.

Pour résumer, ta mission est de créer une fonction `promptNumber` qui va récupérer un nombre depuis l'input et le retourner, et de remplacer chaque fois qu'on utilise `prompt` par `promptNumber`, ainsi que de supprimer la logique de validation des nombres car elle sera gérée par `promptNumber`.

## Partie 3

Dans cette partie, on va modifier la manière dont on affiche le résultat. Avant, on utilisait un switch qui gérait les différents cas.

On va remplacer ça par une fonction et utiliser la puissance du mot clé `return` pour arrêter la lecture de la fonction chaque fois qu'on a trouvé le bon cas.

Ce `return` va nous permettre aussi de pouvoir facilement gérer le cas où on essaie de diviser par 0 si l'opération est une division.

Ta tâche sera de créer une fonction qui a cette signature :

```js
function calculateResult(operator, firstNumber, secondNumber) {...}
```

Elle prend en paramètre :

- `operator` : l'opérateur de l'opération
- `firstNumber` : le premier nombre
- `secondNumber` : le deuxième nombre

Ensuite, tu vas utiliser des **if** pour chaque cas et utiliser le mot clé `return` pour arrêter la lecture de la fonction.

![](./images/return.png)

Quand tu utilises `return`, tu **arrêtes instantanément** la lecture de la fonction et tu retournes la valeur.

Donc tout le code après n'est pas exécuté !

C'est pour ça qu'on va pouvoir vérifier chaque opérateur et dans le cas où on trouve le bon, on va faire un `return` de la valeur, ce qui va arrêter la lecture de la fonction et retourner la valeur.

Le `return` est un concept à lui tout seul et on en parlera dans la théorie de ce module.

Ta mission est de créer cette fonction et de supprimer la logique du `switch` qu'on avait avant.

## Partie 4 - Bonus

Bonus, car on va aborder un sujet compliqué : la récursivité.

Dans l'exercice sur les conditions, partie 5 bonus, on avait utilisé une boucle `while` pour récupérer l'opérateur jusqu'à ce qu'il soit valide.

Ici, on va refaire la même feature, mais avec une fonction récursive.

Pour ça, on va créer une fonction `promptOperator` qui va récupérer l'opérateur depuis l'input et le retourner.

MAIS, si l'opérateur n'est pas valide (pas 1, 2, 3 ou 4), on va appeler la fonction `promptOperator` depuis la fonction `promptOperator`.

C'est-à-dire que notre fonction va s'appeler elle-même.

Et encore plus

fou, on va retourner `promptOperator` depuis `promptOperator` !

```js
function promptOperator() {
  const operator = /* ... */

  if (/* operator is not 1, 2, 3 or 4*/) {
    return promptOperator();
  }
}
```

Ce qui va se passer, c'est qu'on va réappeler la fonction `promptOperator` depuis la fonction `promptOperator` et ainsi de suite jusqu'à ce que l'opérateur soit valide.

Donc, le résultat final sera un opérateur valide.

C'est un concept pas facile au début, mais t'en fais pas, on va en parler dans la théorie de ce module.

Pour l'instant, essaie de t'amuser avec ce concept afin de créer cette fonction récursive, et dans le cas où l'opérateur est juste, tu peux juste retourner l'opérateur, ce qui va arrêter la lecture de la fonction et retourner l'opérateur.

Ta mission est de créer cette fonction récursive et de remplacer la logique de récupération de l'opérateur par cette fonction.
