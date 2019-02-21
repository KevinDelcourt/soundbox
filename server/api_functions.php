<?php
require('./db/db_connect.php');

function password_check($password,$pdo){
    $today = date("Y-m-d");

    $req = $pdo->query("SELECT count,date FROM pass_count WHERE date='$today'");
    $req->bindColumn(1, $count);

    if(!$req->fetch(PDO::FETCH_BOUND)){
        $pdo->query("INSERT INTO pass_count (count,date) VALUES ('0','$today')");
        $count = 0;
    }

    if($count > 2)
        return "error: no more attempts for today.";

    if( !password_verify($password,APP_PASSWORD) ){
        $count++;
        $pdo->query("UPDATE pass_count SET count = '$count' WHERE date='$today'");
        return "error: wrong password, ".(3-$count)." attempts left.";
    }

    return "ok";
}