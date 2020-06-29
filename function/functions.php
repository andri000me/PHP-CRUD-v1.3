<?php

$conn = mysqli_connect("localhost", "root", "", "crud-v1.3");


function query($param) {
    global $conn;
    
    $query = mysqli_query($conn, $param);
    $rows = [];
    while ($row = mysqli_fetch_assoc($query)) {
        $rows[] = $row;
    }
    
    return $rows;
}


function tambah($nama, $nrp, $email) {
    global $conn;
    
    $query = "INSERT INTO data VALUES('', '$nama', '$nrp', '$email')";
    mysqli_query($conn, $query);
    
    return mysqli_affected_rows($conn);
}


function hapus($id) {
    global $conn;
    
    $query = "DELETE FROM data WHERE id = '$id'";
    mysqli_query($conn, $query);
    
    return mysqli_affected_rows($conn);
}


function update($nama, $nrp, $email, $id) {
    global $conn;
    
    $query = "UPDATE data SET
                nama = '$nama',
                nrp = '$nrp',
                email = '$email' WHERE id = '$id'";
    mysqli_query($conn, $query);
    
    return mysqli_affected_rows($conn);
}


function cari($keyword) {
    $query = "SELECT * FROM data WHERE
               nama LIKE '%$keyword%' OR
               nrp LIKE '%$keyword%' OR
               email LIKE '%$keyword%' ORDER BY id DESC";
    
    return query($query);
}
