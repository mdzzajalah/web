const nama = document.getElementById('nama');
const nu = document.getElementById('nu');
const ni = document.getElementById('ni');
const nl = document.getElementById('kl');
const te = document.getElementById('te');
const ta = document.getElementById('ta');
const ag = document.getElementById('ag');
const al = document.getElementById('al');
const no = document.getElementById('no');
const ce = document.getElementById('ce');
      const inputmasuk = document.getElementById('sub')
      inputmasuk.addEventListener('click', function() {
        if (nama.value.trim("") === "" || nu.value.trim("") === "" || ni.value.trim("") === ""|| kl.value.trim("") === "" || te.value.trim("") === "" || ta.value.trim("") === "" || ag.value.trim("") === "" || al.value.trim("") === "" || no.value.trim("") === "" || ce.value.trim("") === "") {
          alert("isi dulu woyy");
        }
        else {
          window.open("login.html", "_blank")
        }
      });