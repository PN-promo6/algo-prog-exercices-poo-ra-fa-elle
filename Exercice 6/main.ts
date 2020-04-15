// Exercice 6 : Créez une classe ClientProfessionnel qui étend la classe Client et qui a comme attribut un numéro SIRET. 
// Créez une instance pour chaque classe et affichez en console l’ensemble des attributs de ces instances. 

class Client {
    public name: string;
    public accountNumber: number;

    constructor(name: string, accountNumber: number) {
        this.name = name;
        this.accountNumber = accountNumber;
    }
}

class ClientPro extends Client {
    public siret: number;

    constructor(name: string, accountNumber: number, siret: number) {
        super(name, accountNumber);
        this.siret = siret;
    }
}

let client1: Client = new Client("Bernard Tapis", 123456);
let client2: ClientPro = new ClientPro("Alain Juppé", 524856, 16172648);
console.log(client1.name + " " + client1.accountNumber);
console.log(client2.name + " " + client2.accountNumber + " " + client2.siret);