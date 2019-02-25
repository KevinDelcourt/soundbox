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
        if(strlen($data["playlist"]["name"]) > 11 || $data["playlist"]["name"] === '')
            echo "error: bad playlist name";
        else{
            $returnCode = "";
            $id_playlist = intval($data['playlist']['id']);

            $req = $pdo->prepare("UPDATE playlist SET name=:name WHERE id LIKE :id");
            $req->bindParam(":name",$data["playlist"]["name"]);
            $req->bindParam(":id",$id_playlist);
            $req->execute();

            $returnCode .= $pdo->errorInfo()[0]." ";

            $req = $pdo->prepare("DELETE FROM playlist_sounds WHERE id_playlist LIKE :id");
            $req->bindParam(":id",$id_playlist);
            $req->execute();

            $returnCode .= $pdo->errorInfo()[0]." ";

            foreach($data["sound"] as $key => $id)
                if($key < 26){
                    $id_sound = intval($id);
                    $pdo->exec("INSERT INTO playlist_sounds (id_playlist,id_sound) VALUES ($id_playlist,$id_sound)");
                    $returnCode .= $pdo->errorInfo()[0]." ";

                }

            echo "done: ".$returnCode;
        }
        
    }   
}