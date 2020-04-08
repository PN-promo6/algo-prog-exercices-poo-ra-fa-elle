// Créez une classe représentant un client d’une banque avec :
// - un constructeur
// - un attribut privé pour le nom
// - un attribut privé pour le numero de compte en banque
// - une méthode pour connaître le numero de compte en banque
// Dans un algorithme, créez une instance de cette classe et afficher le numéro de compte en banque d’un client.

class Client{
  private name:string;
  private idbank:number;

  constructor(name:string, idbank:number){
    this.name = name;
    this.idbank = idbank;
  }

  getIdbank():number{
    return this.idbank;
  }
  getName():string{
    return this.name;
  }
  public setName(name:string) { 
    this.name = name;
  }
}
let userBank: Client = new Client("machin", 124585);
console.log(userBank.getIdbank());

userBank.setName("Bernardo Machin");
