<?php

require "../function/functions.php";

$id = htmlspecialchars($_POST["id"]);
$nama = htmlspecialchars($_POST["nama"]);
$nrp = htmlspecialchars($_POST["nrp"]);
$email = htmlspecialchars($_POST["email"]);

$icon = "error";
$title = "gagal";
$text = "";

if (empty($nama) && empty($nrp) && empty($email)) {
    $text .= "isi semua input terlebih dahulu";
} else if (empty($nama)) {
    $text .= "isi input nama terlebih dahulu";
} else if (empty($nrp)) {
    $text .= "isi input nrp terlebih dahulu";
} else if (empty($email)) {
    $text .= "isi input email terlebih dahulu";
} else {
    if (update($nama, $nrp, $email, $id) > 0) {
        $icon = "success";
        $title = "berhasil";
        $text .= "data berhasil diupdate";
    } else {
        $text .= "data gagal diupdate";
    }
}

$data = [
    "icon" => $icon,
    "title" => $title,
    "text" => $text
];

echo json_encode($data);