<?php
require('api_functions.php');

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');



if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $data = json_decode(file_get_contents('php://input'),true);
    
    $check = password_check($data["password"],$pdo);

    if($check !== "ok")
        echo $check;
    else{
        $req = $pdo->prepare("DELETE FROM sounds WHERE id=:id");
        $req->bindParam(":id",$data["id"]);
        $req->execute();
        
        echo "operation done: ".$pdo->errorInfo()[0];
    }
}