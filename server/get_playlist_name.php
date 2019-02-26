<?php
require('api_functions.php');

$stmt = $pdo->prepare("SELECT name,id FROM playlist WHERE id like :id");
$stmt->bindParam(":id",$_GET['id']);
$stmt->execute();
$stmt->bindColumn(1, $name);

$stmt->fetch(PDO::FETCH_BOUND);

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
echo json_encode(array("name" => $name));