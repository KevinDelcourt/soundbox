<?php
require('./db/db_connect.php');
$sql = file_get_contents('./mysql/init.sql');
$pdo->exec($sql);