// Créez une classe représentant une personne avec :
// - un constructeur
// - un attribut pour le nom
// - un attribut pour le prénom
// - un attribut optionnel pour la date de naissance
// - une méthode pour afficher le nom complet de la personne
// Dans un algorithme, créez des instances de cette classe : une avec la date de naissance, une sans la date de naissance.
// Appelez la méthode affichant le nom complet de la personne pour chaque instance.

class Someone {
  firstname:string;
  lastname:string;
  birthday:string=""

  constructor(firstname:string, lastname:string, birthday?:string) {
    this.firstname = firstname;
    this.lastname = lastname;
    if (birthday) {
      this.birthday = birthday;
    }
  }

  fullName(){
    console.log("Cette personne s'appelle " + this.firstname + " " + this.lastname)
  }
}

let raphaelle =  new Someone("Raphaelle", "Clerici");
raphaelle.fullName();
