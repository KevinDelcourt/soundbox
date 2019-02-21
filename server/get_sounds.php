<?php
require('api_functions.php');

$page = intval($_GET['page'])*26;
$stmt = $pdo->query("SELECT file,name,id FROM sounds ORDER BY id DESC LIMIT $page,26");
$stmt->bindColumn(1, $file, PDO::PARAM_LOB);
$stmt->bindColumn(2, $name);
$stmt->bindColumn(3, $id);

$rows = [];
while ($row = $stmt->fetch(PDO::FETCH_BOUND)) {
    $rows[] = array('src' => "data:audio/mp3;base64,".base64_encode($file), 'name' => $name, 'id' => $id);
}

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
echo json_encode($rows);