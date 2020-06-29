<?php

require "../function/functions.php";

if (isset($_POST["keyword"])) {
    $keyword = htmlspecialchars($_POST["keyword"]);
    $data = cari($keyword);
    echo json_encode($data);
}
