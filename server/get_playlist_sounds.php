<?php
require('api_functions.php');

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$id = intval($_GET['id']);

$stmt = $pdo->query("SELECT sounds.file, sounds.name, sounds.id 
    FROM sounds 
    JOIN playlist_sounds 
    ON sounds.id=playlist_sounds.id_sound WHERE playlist_sounds.id_playlist LIKE '$id' ORDER BY sounds.id DESC LIMIT 26");

$stmt->bindColumn(1, $file, PDO::PARAM_LOB);
$stmt->bindColumn(2, $name);
$stmt->bindColumn(3, $id);

$rows = [];
while ($row = $stmt->fetch(PDO::FETCH_BOUND)) {
    $rows[] = array('src' => "data:audio/mp3;base64,".base64_encode($file), 'name' => $name, 'id' => $id);
}

echo json_encode($rows);