Welcome <?php echo $_GET["name"]; ?><br>
Your email address is: <?php echo $_GET["email"]; ?>

<?php
$t = date("H");
$email = $_POST['email']; 
if ($t < "20") {if $email == "a"
  echo "Have a good day!";
}
?>

$email = $_POST["email"];

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
