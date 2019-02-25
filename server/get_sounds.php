<?php
require('api_functions.php');

$page = intval($_GET['page'])*26;
$search = "%".$_GET['search']."%";

$stmt = $pdo->prepare("SELECT file,name,id FROM sounds WHERE name LIKE :search ORDER BY id DESC LIMIT $page,26");
$stmt->bindParam(":search",$search,PDO::PARAM_STR);
$stmt->execute();
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