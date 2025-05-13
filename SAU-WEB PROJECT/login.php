<?php

$numara = $_POST['numara'] ?? '';
$sifre = $_POST['sifre'] ?? '';
$sadeceNumara = '';

if (isset($_POST['submit'])) {

    if ($numara == "" || $sifre == "") {

        echo "<script>alert('Lütfen tüm alanları doldurun.'); window.location.href='login.html';</script>";
        exit;
    }

    if ($numara == "g231210066@sakarya.edu.tr" && $sifre == "g231210066") { 
        $sadeceNumara = substr($numara, 0, 10);
    } else {
        echo "<script>alert('Geçersiz kullanıcı adı veya şifre.'); window.location.href='login.html';</script>";
        exit;
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Giriş Başarılı</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>
    <div class="container" style="padding: 8rem;">
        <div class="row">
            <div class="col"></div>
            <div class="col d-flex align-items-center justify-content-center" style="flex-direction:column;">
                <h3 style="text-align:center;font-weight:200">GİRİŞ BAŞARILI</h3>
                <h3 style="text-align:center; font-weight: 300;">Hoşgeldiniz <b><?php echo $sadeceNumara ?></b></h3>
                <a href="index.html">
                    <button type="button" class="btn btn-primary" style="margin-top: 1.5rem; width:16rem; height:4rem; text-align:center;">Geri Dön</button>
                </a>
            </div>
            <div class="col"></div>
        </div>
    </div>
</body>
</html>
