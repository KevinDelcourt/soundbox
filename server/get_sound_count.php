<?php
require('api_functions.php');

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

$search = "%".$_GET['search']."%";

$stmt = $pdo->prepare("SELECT COUNT(*) FROM sounds WHERE name LIKE :search");
$stmt->bindParam(":search",$search,PDO::PARAM_STR);
$stmt->execute();

echo $stmt->fetch()['COUNT(*)'];