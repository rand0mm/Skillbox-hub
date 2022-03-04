<?php 
include("db_connect.php");
$dep = $_POST['form-select'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$problem = $_POST['problem'];
$email = trim($email);
$phone = trim($phone);
$error = "<div class="error">Ошибка</div>";
$problem = (strlen($problem)<=500)?($problem:echo $error; die(););

$array = array(1,2,3,4,5,6,7,8,9);
(array_search($array))?$dep:echo $error;

// INSERT INTO `zayavki`( `date`, `time`, `email`, `telefon`, `nomer_dep`, `opisanie`, `road_to_file`) 
// VALUES (CURRENT_DATE,CURRENT_TIME,'[value-4]','[value-5]','[value-6]','[value-7]','[value-8]')

?>