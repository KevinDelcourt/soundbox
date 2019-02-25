<?php
require('api_functions.php');

header('Access-Control-Allow-Origin: *');

$search = $_GET['search'];

$stmt = $pdo->query("SELECT COUNT(*) FROM sounds WHERE name LIKE '%$search%'");

echo $stmt->fetch()['COUNT(*)'];