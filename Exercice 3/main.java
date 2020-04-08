// Raté aussi

class Playground
{
	public static void main(String[ ] args) {
	    Someone raph = new Someone("Raphaelle", "Clerici", "27ans");
	    System.out.println(Someone.studentInfos());
	}
}

class Someone {
    public String firstname;
    public String lastname;
    public String age;

    Someone(String firstname, String lastname, String age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    Object studentInfos() {
        return this.firstname;
        return this.lastname;
        return this.age;
    }
}
