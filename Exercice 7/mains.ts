// Soit un jeu vidéo où le joueur incarne un personnage. Ce
// personnage possède un inventaire qu'il peut remplir avec des items. Les items sont de
// différents types (médicaments, clés, munitions, etc.) et l'inventaire possède 9 emplacements.
// Chaque item possède une taille :
// - si un item a une taille de 1, il prend 1 emplacement dans l'inventaire
// - si un item a une taille de 2, il prend 2 emplacements dans l'inventaire
// - etc.
// 1) Créez une classe abstraite Item possédant en attributs un nom (chaîne) et une taille (entier).
// 2) Créez une classe Teleporter, qui hérite de la classe abstraite Item, et qui possède un attribut
//    energy (entier). Cet item a par défaut une taille de 3.
// 3) Créez une classe Arrow, qui hérite de la classe abstraite Item, et qui possède un attribut
//    power (entier). Cet item a par défaut une taille de 1.

// 1)
abstract class Item {
    public name: string;
    public size: number;

    constructor(name: string, size: number) {
        this.name = name;
        this.size = size;
    }
}
// 2)
class Teleport extends Item {
    public energy: number;

    constructor(name: string, size: number, energy: number) {
        super(name, size);
        this.energy = 3;
    }
}
// 3)
class Arrow extends Item {
    public power: number;

    constructor(name: string, size: number, power: number) {
        super(name, size);
        this.power = 1;
    }
}

// 4) Créez une classe Player qui possède :
//    - en attribut, un nom (chaîne)
//    - en attribut, un nombre de vie (entier) initialisé à 3
//    - en attribut un tableau d'items (en TS, utilisez le type Array, en Java le type ArrayList)
//    - une méthode qui prend en paramètre un item, et qui tente d'ajouter l'item au
//      tableau d'items. Cette méthode retourne : l'objet booléen False si l'item est trop gros
//      pour être ajouté au tableau ou si l'inventaire est plein, True si l'item a bien été ajouté
// 5) Créez une instance de Player, plusieurs instances de Teleporter et Arrow.
//    Ajoutez des instances de Teleporter et Arrow dans l'inventaire du joueur.
//    Faites en sorte que lorsqu'on tente d'ajouter un item à l'inventaire :
//    - si l'item a été ajouté, on affiche en console le nom de l'ensemble des items dans l'inventaire
//    - si l'item n'a pas pu être ajouté, on affiche en console "L'item ne peut pas être ajouté : faites de la place dans votre inventaire !"

// 4)
class Player {
    public playerName: string;
    public lifes: number;
    public items: Array<Item>;
    public takenSpace: number = 0;

    constructor(playerName: string) {
        this.playerName = playerName;
        this.lifes = 3;
        this.items = new Array<Item>();
        this.takenSpace = 0;
    }
    addItem(item: Item): boolean {
        let addItem: boolean = false;
        if (this.takenSpace + item.size <= 9) {
            this.items.push(item);
            this.takenSpace += item.size;
            console.log(item.name + " a bien été ajouté.");
            return true;
        } else {
            console.log(item.name + " n'a pas pu être ajouté, votre inventaire est plein.");
            return false;
        }
    }
}

// 5)
let newPlayer: Player = new Player("CaptainObvious");
let newTeleport: Teleport = new Teleport("Brosse à dents", 4, 150);
newPlayer.addItem(newTeleport);