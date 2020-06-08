Welcome <?php echo $_GET["name"]; ?><br>
Your email address is: <?php echo $_GET["email"]; ?>

<?php
$t = date("H");

if ($t < "20") {
  echo "Have a good day!";
}
?>

$cars = array("Volvo","BMW","Toyota");

<?php
class Car {
  function Car() {
    $this->model = "VW";
  }
}

// create an object
$herbie = new Car();

// show object properties
echo $herbie->model;
?>
