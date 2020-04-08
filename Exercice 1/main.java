// Pas réussi


public class Playground
{
	public static void main(String[ ] args) {
	    Book lempiredesanges = new Book("L'empire des anges");
	    System.out.println(Book.getName());
	}
}

class Book {
    public String title;
    public String price;

    Book(String title, String price) {
        this.title = title;
        this.price = price;
    }

    Object getName() {
        return this.title;
        return this.price;
    }
}
