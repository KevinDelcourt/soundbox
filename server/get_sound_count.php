<?php
require('api_functions.php');

header('Access-Control-Allow-Origin: *');

$stmt = $pdo->query('SELECT COUNT(*) FROM sounds ');

echo $stmt->fetch()['COUNT(*)'];