<?php
require('api_functions.php');

$stmt = $pdo->query("SELECT name,id FROM playlist ORDER BY id DESC LIMIT 26");
$stmt->bindColumn(1, $name);
$stmt->bindColumn(2, $id);

$rows = [];
while ($row = $stmt->fetch(PDO::FETCH_BOUND)) {
    $rows[] = array( 'name' => $name, 'id' => $id);
}

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
echo json_encode($rows);