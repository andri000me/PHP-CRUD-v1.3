<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/8.11.8/sweetalert2.min.css">

    <title>Hello, world!</title>
</head>
<body>

    <div class="data-page">
        <div class="container">
            <div class="container">
                <div class="row mt-5 mb-5">
                    <div class="col">
                        <h4 class="text-monospace"> Data Mahasiswa </h4>
                        <span class="text-muted d-block"> kumpulan data mahasiswa tingkat akhir </span>
                        <button class="btn btn-primary mb-3 mt-3" data-toggle="modal" data-target="#modal-insert"> tambah data </button>
                        <div class="form-group mb-3">
                            <input type="text" class="form-control keyword" placeholder="masukkan input pencarian" autocomplete="off">
                        </div>
                        <ul class="list-group">

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="modal-insert">
        <div class="modal fade" id="modal-insert" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel"><i class="fab fa-wpforms mr-2"></i> tambah data </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="container">
                            <div class="form-group">
                                <label for="nama1"> Nama </label>
                                <input type="text" class="form-control form-insert" id="nama1" placeholder="Nama" autocomplete="off">
                            </div>
                            <div class="form-group">
                                <label for="nrp1"> Nrp </label>
                                <input type="number" class="form-control form-insert" id="nrp1" placeholder="Nrp" autocomplete="off">
                            </div>
                            <div class="form-group">
                                <label for="email1"> Email </label>
                                <input type="email" class="form-control form-insert" id="email1" placeholder="Email" autocomplete="off">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">kembali</button>
                        <button type="button" class="btn btn-primary btn-insert">tambah data</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="modal-update">
        <div class="modal fade" id="modal-update" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content modal-body-update">

                </div>
            </div>
        </div>
    </div>

    <div class="card-page">
        <div class="container">
            <div class="container">
                <div class="row mt-3 mb-3">
                    <div class="col">
                        <button class="btn btn-primary btn-back mb-3">kembali</button>
                        <div class="card-box">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/8.11.8/sweetalert2.min.js"></script>
    <script src="js/app.js"></script>
</body>
</html>
