// Exercice 5 à réaliser en TypeScript, PHP et Java
//
// Créez une classe représentant une place de concert. Le constructeur de cette classe demande cinq paramètre dont un optionnel.
// La classe possède une méthode retournant en chaîne de caractères les détails de la place de concert sous forme de HTML.
// Exemple basique de chaîne de caractères retournée :
// "<p>Numéro de place : ${ this.username }</p>
// <p>Heure du concert : ${ this.hours }</p>"
//
// Dans un algorithme, créez deux instances de cette classe (la 1ère avec un paramètre optionnel, l’autre sans le paramètre optionnel),
// et afficher les détails de chaque objet crée.
class ConcertTicket {
  public artistName: string;
  public placeNumber: number;
  public clientName: string ="";
  public date: string;
  public place: string;

  constructor(artistName: string, placeNumber: number, date: string, place: string, clientName?: string) {
    this.artistName = artistName;
    this.placeNumber = placeNumber;
    this.date = date;
    this.place = place;
    if(clientName) {
      this.clientName = clientName;
    }
  }

  public htmlDetails(): string {
    let htmlContent: string = `
    <p> Nom de l'artiste : ${this.artistName}</p>
    <p> Numéro de place : ${this.placeNumber}</p>
    <p> Date de l'événement: ${this.date}</p>
    <p> Lieu de l'événement: ${this.place}</p>`;
    if(this.clientName != "") {
      htmlContent = htmlContent + `<p>Nom du titulaire : ${this.clientName}</p>`
    };
    return htmlContent;
  }
}
 let ticket1: ConcertTicket = new ConcertTicket("Personne", 27 ,"08/04/2020", "La Ciotat", "Raphaelle");
 let ticket2: ConcertTicket = new ConcertTicket("Quelqu'un", 24, "13/04/2020", "Nice", "Bernard");
 console.log(ticket1.htmlDetails());
