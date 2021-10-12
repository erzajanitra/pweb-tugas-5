function validateForm() {
    if (document.forms["formPendaftaran"]["nama"].value == "") {
        alert("Nama Tidak Boleh Kosong");
        document.forms["formPendaftaran"]["nama"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["email"].value == "") {
        alert("Email Tidak Boleh Kosong");
        document.forms["formPendaftaran"]["email"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["status"].selectedIndex < 1) {
        alert("Pilih status");
        document.forms["formPendaftaran"]["status"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["nrp"].value == "") {
        alert("NRP Tidak Boleh Kosong");
        document.forms["formPendaftaran"]["nrp"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["dep"].value == "") {
        alert("Pilih Departemen");
        document.forms["formPendaftaran"]["dep"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["alamatDom"].value == "") {
        alert("Alamat Domisili Tidak Boleh Kosong");
        document.forms["formPendaftaran"]["alamatDom"].focus();
        return false;
    }
}