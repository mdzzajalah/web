const submitBtn = document.getElementById('log');
    const emailInput = document.getElementById('email');
    const passInput = document.getElementById('pass');

    submitBtn.addEventListener('click', function() {
        // Cek apakah input kosong atau cuma spasi
        if (emailInput.value.trim() === "" || passInput.value.trim() === "") {
            // Kalau kosong, kasih getaran atau alert (opsional)
            alert("isi dulu bagian email sama password nya kocakk!! jangan DONGO napaa!!");
            emailInput.style.border = "1px solid red";
            passInput.style.border = "1px solid red";
        } else {
            // KALAU TERISI: Buka web lain di jendela baru (URL tujuan lo)
            window.open("web.html", "_blank");
        }
    });