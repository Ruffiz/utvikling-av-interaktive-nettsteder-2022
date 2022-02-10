let largestWord = document.querySelector('#longestWord');

// Statisk tekst som brukes til å søke i
const text =
  "Baby cliche unicorn brooklyn farm-to-table. Salvia semiotics hella literally paleo humblebrag bushwick letterpress messenger bag pork belly brooklyn authentic vexillologist. Gastropub sustainable banjo, shaman snackwave viral air plant ramps health goth. Edison bulb vegan microdosing, tote bag unicorn skateboard disrupt copper mug four loko sustainable whatever cloud bread slow-carb lumbersexual four dollar toast. Waistcoat lomo hammock vape shabby chic sartorial yr godard pok pok fashion axe organic migas. Quinoa yr vexillologist intelligentsia verylongwordthatislong neutra mixtape YOLO XOXO listicle letterpress farm-to-table beard.";

const longestWord = () => {
  // TODO: Gjør om text til array eks. ['Baby', 'cliche']
  let words = text.split(' ');

  let longWord = "";

  // TODO: Velg første ord så du har noe å sammenlikne med
  // TODO: Gå igjennom alle ordene og oppdater hvis nytt ord er lengre

  // Ville personlig i dette tilfellet brukt en for løkke som her under med of
  // som bare går igjennom et ord av listen om gangen.
  for (let word of words) {
      if (word.length > longWord.length) {
          longWord = word;
      }
  }
  return longWord;

  // Ellers kan en foreach løkke gjøre det samme som jeg antar vi skal bruke videre:
//   words.forEach(word => {
//       if (word.length > longWord.length) {
//         longWord = word;
//       }
//   });
//   return longWord;
};

//console.log(longestWord());

largestWord.innerHTML = longestWord();