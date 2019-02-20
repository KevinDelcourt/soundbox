<?php
require('./db/db_connect.php');

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

$data = json_decode(file_get_contents('php://input'),true);

if(empty($data["password"]) || !password_verify($data["password"],APP_PASSWORD))
    echo 'error: wrong password';
else{
    $req = $pdo->prepare("DELETE FROM sounds WHERE id=:id");
    $req->bindParam(":id",$data["id"]);
    $req->execute();
    
    echo "Operation done: ".$pdo->errorInfo()[0];
}