<?php

require "../function/functions.php";
$data = query("SELECT nama, id FROM data ORDER BY id DESC");
echo json_encode($data);