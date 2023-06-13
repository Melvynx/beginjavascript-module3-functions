import readlineSync from 'readline-sync';

// 🦁 Nos functions vont utiliser la méthode `prompt`
// J'utilises une librairie afin que `prompt` soit synchrone pour éviter que tu ai besoin
// De gérer l’asynchrone dans tes functions
export function prompt(question) {
  // readlineSync.question returns the user's input once they hit enter
  const answer = readlineSync.question(question);

  return answer;
}
