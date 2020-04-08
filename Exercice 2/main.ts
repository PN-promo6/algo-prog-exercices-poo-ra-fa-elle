// Créez une classe pour représenter un meuble design. Cette classe doit contenir trois attributs :
// - l’éditeur du meuble
// - le nom de la personne qui a designé le meuble
// - l’année de conception du meuble
//
// Dans un algorithme, créez une instance de cette classe. Cette instance est un objet représentant la chaise Wassily, crée par Marcel Breuer en 1925, et dont les droits d’édition appartiennent actuellement à l’entreprise Knoll.
// Affichez les informations concernant cette chaise, puis modifiez l’année de conception par 1926.
class Design{
  editor: string;
  designer: string;
  year: number;

  constructor(editor: string, artist: string, year: number) {
    this.editor = editor;
    this.designer = artist;
    this.year = year;
  }
}

let chaiseWassily:Design = new Design("Knoll", "Marcel Breuer", 1925);
console.log(chaiseWassily.editor, chaiseWassily.designer, chaiseWassily.year);
