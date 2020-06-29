<?php

require "../function/functions.php";

$id = htmlspecialchars($_POST["id"]);

$icon = "error";
$title = "gagal";
$text = "";

if (hapus($id) > 0) {
    $icon = "success";
    $title = "berhasil";
    $text .= "data berhasil dihapus";
} else {
    $text .= "data gagal dihapus";
}

$data = [
    "icon" => $icon,
    "title" => $title,
    "text" => $text
];

echo json_encode($data);