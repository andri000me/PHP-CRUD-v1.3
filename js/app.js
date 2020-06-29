/*
    nama.    : candra dwi cahyo
    umur.    : 16 tahun
    email.   : candradwicahyo18@gmail.com
    github.  : github.com/candradwicahyo
    codepen. : codepen.io/candradwicahyo
*/


//tampilkan dataNama()
function dataNama() {
    $.ajax({
        url: 'data/data-nama.php',
        type: 'get',
        success: function(data) {
            let result = JSON.parse(data);
            let str = '';

            //loppong variable result
            $.each(result, (key, value) => {
                let {
                    id, nama
                } = value;
                let namaBaru = nama.substring(0, 8);

                str += list(id, namaBaru);
            });

            $('.list-group').html(str);
        }
    });
}


//jalankan function dataNama()
dataNama();


//function list()
function list(id, nama) {
    return `<li class="list-group-item d-flex align-items-center">
    <span class="text-muted mr-auto">${nama}...</span>
    <span class="badge badge-success p-2 mr-1 btn-modal-update" data-id="${id}" data-toggle="modal" data-target="#modal-update"><i class="fas fa-pen"></i></span>
    <span class="badge badge-primary p-2 mr-1 btn-view-data" data-id="${id}"><i class="fas fa-eye"></i></span>
    <span class="badge badge-danger p-2 btn-delete" data-id="${id}"><i class="fas fa-trash-alt"></i></span>
    </li>`
}


//ketika tombol tambah data ditekan maka jalankan function tambahData()
$('.btn-insert').on('click', tambahData);


//function tambahData()
function tambahData() {
    let nama = $('#nama1');
    let nrp = $('#nrp1');
    let email = $('#email1');

    let sendData = {
        nama: nama.val(),
        nrp: nrp.val(),
        email: email.val()
    };

    $.ajax({
        url: 'data/tambah.php',
        type: 'post',
        data: sendData,
        success: function(data) {
            let result = JSON.parse(data);
            let {
                icon, text, title
            } = result;

            $('.form-insert').val('');

            //tampiloan alert dari plugin sweetalert dan tampilkan data ulang
            sweetAlert(icon, text, title);
            dataNama();
        }
    });
}


//function sweetAlert()
function sweetAlert(icon, text, title) {
    swal.fire({
        icon: icon,
        title: title,
        text: text,
        showConfirmButton: false,
        timer: 2000
    });
}


//ketika tombol hapus ditekan maka jalankan function alertHapus()
$(document).on('click', '.btn-delete', alertHapus);


//function alertHapus()
function alertHapus() {
    let id = $(this).attr('data-id');

    swal.fire({
        icon: 'warning',
        title: 'peringatan',
        text: 'apakah anda sudah yakin ingin menghapus data tersebut?',
        showCancelButton: true,
        cancelButtonText: 'tidak',
        confirmButtonText: 'iya'
    }).then(result => {
        if (result.value) hapusData(id);
    });
}


//function hapusData()
function hapusData(id) {
    $.ajax({
        url: 'data/hapus.php',
        type: 'post',
        data: {
            id: id
        },
        success: function(data) {
            let result = JSON.parse(data);
            let {
                icon,
                text,
                title
            } = result;

            //tampiloan alert dari plugin sweetalert dan tampilkan data ulang
            sweetAlert(icon, text, title);
            dataNama();
        }
    });
}


//ketika tombol update ditekan maka jalankan function modalUpdate()
$(document).on('click', '.btn-modal-update', modalUpdate);


//function modalUpdate()
function modalUpdate() {
    let id = $(this).attr('data-id');

    $.ajax({
        url: 'data/data-update.php',
        type: 'post',
        data: {
            id: id
        },
        success: function(data) {
            let result = JSON.parse(data);
            let str = '';

            $.each(result, (key, value) => {
                let {
                    email, id, nama, nrp
                } = value;

                str += modalBodyUpdate(nama, nrp, email, id);
            });

            $('.modal-body-update').html(str);
        }
    });
}


//function modalBodyUpdate()
function modalBodyUpdate(nama, nrp, email, id) {
    return `<div class="modal-header">
    <h5 class="modal-title" id="exampleModalLabel"><i class="fab fa-wpforms mr-2"></i> update data </h5>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
    <span aria-hidden="true">&times;</span>
    </button>
    </div>
    <div class="modal-body">
    <div class="container">
    <div class="form-group">
    <label for="nama2"> Nama </label>
    <input type="text" class="form-control" id="nama2" placeholder="Nama" autocomplete="off" value="${nama}">
    </div>
    <div class="form-group">
    <label for="nrp2"> Nrp </label>
    <input type="number" class="form-control" id="nrp2" placeholder="Nrp" autocomplete="off" value="${nrp}">
    </div>
    <div class="form-group">
    <label for="email2"> Email </label>
    <input type="email" class="form-control" id="email2" placeholder="Email" autocomplete="off" value="${email}">
    </div>
    </div>
    </div>
    <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-dismiss="modal">kembali</button>
    <button type="button" class="btn btn-primary btn-update" data-id="${id}">update data</button>
    </div>`;
}


//ketika tombol update ditekan maka jalankan function updateData()
$(document).on('click', '.btn-update', updateData);


//function updateData()
function updateData() {
    let id = $(this).attr('data-id');
    let nama = $('#nama2');
    let nrp = $('#nrp2');
    let email = $('#email2');

    let sendData = {
        id: id,
        nama: nama.val(),
        nrp: nrp.val(),
        email: email.val()
    };

    $.ajax({
        url: 'data/update.php',
        type: 'post',
        data: sendData,
        success: function(data) {
            let result = JSON.parse(data);
            let {
                icon,
                text,
                title
            } = result;

            //tampiloan alert dari plugin sweetalert dan tampilkan data ulang
            sweetAlert(icon, text, title);
            dataNama();
        }
    });
}


//ketika input pencarian diketik, maka jalankan function cariData()
$('.keyword').on('keyup', cariData);


//function cariData()
function cariData() {
    let keyword = $(this).val();

    $.ajax({
        url: 'data/cari.php',
        type: 'post',
        data: {
            keyword: keyword
        },
        success: function(data) {
            let result = JSON.parse(data);
            let str = '';

            //loppong variable result
            $.each(result, (key, value) => {
                let {
                    id, nama
                } = value;
                let namaBaru = nama.substring(0, 6);

                str += list(id, namaBaru);
            });

            $('.list-group').html(str);
        }
    });
}


//ketika tombol view data ditekan, maka jalankam function card()
$(document).on('click', '.btn-view-data', card);


//function card()
function card() {
    let id = $(this).attr('data-id');

    $('.data-page').css('opacity',
        '0');

    $.ajax({
        url: 'data/data-card.php',
        type: 'post',
        data: {
            id: id
        },
        success: function(data) {
            let result = JSON.parse(data);
            let str = '';

            $.each(result, (key, value) => {
                let {
                    email, id, nama, nrp
                } = value;

                str += cardBody(nama, nrp, email);
            });

            $('.card-box').html(str);
        }
    });

    setTimeout(() => {
        $('.data-page').css('display', 'none');
        $('.card-page').css('display', 'flex');

        setTimeout(() => {
            $('.card-page').css('opacity', '1');
        }, 100);
    },
        500);
}


//function cardBody()
function cardBody(nama, nrp, email) {
    return `<div class="card m-3 shadow">
    <img class="card-img-top" src="jumbotron.jpg" alt="Card image cap">
    <div class="card-body">
    <h5 class="card-title mb-4"><i class="fas fa-user mr-2"></i> data mahasiswa </h5>
    <span class="text-muted d-block"><b> nama : </b> ${nama}</span>
    <span class="text-muted d-block"><b> nrp : </b> ${nrp}</span>
    <span class="text-muted d-block"><b> email : </b> ${email}</span>
    </div>
    </div>`;
}


//ketika tombol kembali ditekan, maka jalankan function kembali()
$('.btn-back').on('click', kembali);


//function kembali()
function kembali() {
    $('.card-page').css('opacity', '0');
    
    setTimeout(() => {
        $('.card-page').css('display', 'none');
        $('.data-page').css('display', 'flex');

        setTimeout(() => {
            $('.data-page').css('opacity', '1');
        }, 100);
    },
        500);
}
