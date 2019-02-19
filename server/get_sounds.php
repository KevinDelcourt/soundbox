<?php
require('./db/db_connect.php');

$stmt = $pdo->query('SELECT file,name FROM sounds ORDER BY id DESC LIMIT 26');
$stmt->bindColumn(1, $file, PDO::PARAM_LOB);
$stmt->bindColumn(2, $name);

$rows = [];
while ($row = $stmt->fetch(PDO::FETCH_BOUND)) {
    $rows[] = array('src' => "data:audio/mp3;base64,".base64_encode($file), 'name' => $name);
}

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
echo json_encode($rows);