// Non réussi

class Playground
{
	public static void main(String[ ] args) {
	    Furniture wassilyChair = new Furniture("Knoll", "Marcel Breuer", 1925);
	    System.out.println(Furniture.getName());
	}
}

class Furniture {
    public String editor;
    public String designer;
    public Number year;

    Furniture(String editor, String designer, Number year) {
        this.editor = editor;
        this.designer = designer;
        this.year = year;
    }

    Object getName() {
        return this.editor;
        return this.designer;
        return this.year;
    }
}
