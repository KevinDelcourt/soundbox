<?php
require('api_functions.php');

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $data = json_decode(file_get_contents('php://input'),true);

    $check = password_check($data["password"],$pdo);

    if($check !== "ok")
        echo $check;
    else
        if(empty($data["name"]) || empty($data["id"]))
            echo ('error: bad request '.$data["name"].' - '.$data["id"]);
        else{
            $req = $pdo->prepare("UPDATE sounds SET name=:name WHERE id=:id");
            $req->bindParam(":name",$data["name"]);
            $req->bindParam(":id",$data["id"]);
            $req->execute();

            echo "Operation done: ".$pdo->errorInfo()[0];
        }
}
