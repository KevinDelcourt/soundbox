<?php
require('api_functions.php');

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $check = password_check($_POST["password"],$pdo);

    if($check !== "ok")
        echo $check;
    else{
        $validatedEntries = [];
        foreach($_FILES['file']['error'] as $key => $error){
            if( 
                $error === 0 && 
                $_POST['name'][$key] !== '' && 
                strlen($_POST['name'][$key]) < 12 &&
                $_FILES['file']['type'][$key] === 'audio/mp3' &&
                $_FILES['file']['size'][$key] < 16000000
            )
            $validatedEntries[] = $key;
        }
        if(count($validatedEntries) === 0)
            echo "error: no valid files";
        else{
            $returnCode = "";
            foreach($validatedEntries as $key){
                $audio = addslashes(file_get_contents($_FILES['file']['tmp_name'][$key]));
                //code below didn't work
                //$req = $pdo->prepare("INSERT INTO sounds (file,name) VALUES ('{$audio}',?)");
                //$req->execute($_POST['name'][$key]);

                $pdo->exec("INSERT INTO sounds (file,name) VALUES ('{$audio}',{$pdo->quote($_POST['name'][$key])})");
                $returnCode .= $pdo->errorInfo()[0]." ";
            }
            echo "upload done: ".$returnCode;
        }
    }
}