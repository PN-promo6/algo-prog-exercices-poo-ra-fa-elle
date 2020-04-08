<?php
class Book {
  public $title;
  public $price;

  function __construct($title, $price) {
    $this->title = $title;
    $this->price = $price;
  }
}

$jaiChoisiLaVie = new Book("J'ai choisi la vie", 6);
print_r($jaiChoisiLaVie);

?>
