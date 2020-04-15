
class ConcertTicket {
      public int price ;
      public String placeNumber ;
      public String date ;
      public String customer ;
      public String artistName="";

    public ConcertTicket (int price, String placeNumber,  String date , String customer){
        this.price = price;
        this.placeNumber = placeNumber;
        this.date = date;   
        this.customer = customer;
        }
        
    public ConcertTicket (int price, String placeNumber,  String date , String customer,String artistName){
        this.price = price;
        this.placeNumber = placeNumber;
        this.date = date;   
        this.customer = customer;
        this.artistName = artistName;
        }
            
    public String concertDetails(){
         String concertVar = "<p>Price: "+ this.price + "</p> <p>Place number:"+ this.placeNumber + "</p> <p>Date du concert: " + this.date + "</p> <p>Customer name: "+ this.customer + "</p>";
             
        if(this.artistName !=""){
            
         concertVar = concertVar + "<p> Nom de l'artiste :" + this.artistName + "</p>" ;  
        }
        return concertVar;
    }

}

class Playground {
    public static void main(String[ ] args) {
        ConcertTicket personneConcert = new ConcertTicket (100, "25", "08.04", "Raphaelle", "Personne");
        ConcertTicket quelquunConcert = new ConcertTicket (99, "103", "13.04", "Bernard", "Quelqu'un");
        System.out.println(personneConcert.concertDetails());
        System.out.println(quelquunConcert.concertDetails());
    }
}