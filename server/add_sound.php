<?php
require('./db/db_connect.php');
echo "youhou";
var_dump($_POST['name']);
var_dump($_FILES['file']);

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
var_dump($validatedEntries);
if(count($validatedEntries) === 0)
    echo "error: bad request";
else
    foreach($validatedEntries as $key){
        $audio = addslashes(file_get_contents($_FILES['file']['tmp_name'][$key]));
        //$req = $pdo->prepare("INSERT INTO sounds (file,name) VALUES ('{$audio}',?)");
        //$req->execute($_POST['name'][$key]);

        $pdo->exec("INSERT INTO sounds (file,name) VALUES ('{$audio}','{$_POST['name'][$key]}')");

        var_dump($pdo->errorInfo());
    }



//$pdo->exec("INSERT INTO sounds (file,name) VALUES ('{$audio}','{$_POST['name']}')");