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
        if(empty($data["name"]) || strlen($data["name"]) > 11)
            echo ('error: bad request '.$data["name"]);
        else{
            $req = $pdo->prepare("SELECT COUNT(*) FROM playlist");
            $req->execute();
            $req->bindColumn(1,$count);
            $req->fetch(PDO::FETCH_BOUND);
            if($count >= 26)
                echo "error: max number of playlists reached";
            else{
                $req = $pdo->prepare("INSERT INTO playlist (name) VALUES (:name)");
                $req->bindParam(":name",$data["name"]);
                $req->execute();

                echo "done: ".$pdo->errorInfo()[0];
            }
        }
}
