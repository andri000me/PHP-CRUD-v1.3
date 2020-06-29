<?php

require "../function/functions.php";

if (isset($_POST["id"])) {
    $id = htmlspecialchars($_POST["id"]);
    $data = query("SELECT * FROM data WHERE id = '$id'");
    echo json_encode($data);
}