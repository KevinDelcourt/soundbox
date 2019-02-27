<?php
require('./db/db_connect.php');

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

$sql = file_get_contents('./mysql/init.sql');
$pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, 0);

try {
    $pdo->exec($sql);
    $pdo->exec($sql);
    
    $stmt = $pdo->query('SELECT COUNT(*) FROM sounds');
    if($stmt->fetch()['COUNT(*)'] == 0)
        echo "ok";
    else
        echo "error";
}
catch (PDOException $e)
{
    echo $e->getMessage();
    die();
}