<?php
class Client {
  private $name;
  private $idbank;

  function __construct($name, $idbank) {
    $this->name = $name;
    $this->idbank = $idbank;
  }

  function infosCli(){
    echo("Le numéro de compte du client " . $this->name . " est le " . $this->idbank);
  }
}
$user1 = new Client("machin", 124585);
$user1->infosCli();

?>
