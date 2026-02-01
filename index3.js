const inputField = document.getElementById('phoneInput');
    const actionBtn = document.getElementById('lanjutkanBtn');

    actionBtn.addEventListener('click', function() {
        // Validasi: Cek apakah input kosong
        if (inputField.value.trim() === "") {
            inputField.classList.add('error-border');
            console.log("Input kosong, perintah ditolak!");
        } else {
            inputField.classList.remove('error-border');
            // Kalau isi ada, arahkan ke halaman baru (Hyperlink)
            window.location.href = "login.html", "_blank"; 
        }
    });

    // Hapus border merah pas user mulai ngetik lagi
    inputField.addEventListener('input', function() {
        if (this.value !== "") {
            this.classList.remove('error-border');
        }
    });