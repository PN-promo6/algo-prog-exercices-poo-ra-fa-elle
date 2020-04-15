class Client {
    String name;
    int accountNumber;

    Client(String name, int accountNumber) {
        this.name = name;
        this.accountNumber = accountNumber;
    }
}

class ClientPro extends Client {
    int siret;

    ClientPro(String name, int accountNumber, int siret) {
        super(name, accountNumber);
        this.siret = siret;
    }
}

class Playground {
    public static void main(String[ ] args) {
        Client bernard = new Client("Bernard Tapis", 123456);
        ClientPro alain = new ClientPro("Alain Juppé", 524856, 16172648);
        System.out.println(bernard.name + bernard.accountNumber);
        System.out.println(alain.name + alain.accountNumber + alain.siret);
    }
}