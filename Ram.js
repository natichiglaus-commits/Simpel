// ambil data user dari localStorage
let users = JSON.parse(localStorage.getItem("users")) || [];

// REGISTER
function register() {
    let user = document.getElementById("regUser").value;
    let pass = document.getElementById("regPass").value;

    if (user === "" || pass === "") {
        document.getElementById("regMsg").innerHTML = "Isi semua data!";
        return;
    }

    // cek username sudah ada
    let cek = users.find(u => u.username === user);
    if (cek) {
        document.getElementById("regMsg").innerHTML = "Username sudah dipakai!";
        return;
    }

    // simpan user
    users.push({ username: user, password: pass });
    localStorage.setItem("users", JSON.stringify(users));

    document.getElementById("regMsg").innerHTML = "Daftar berhasil ✅";
}

// LOGIN
function login() {
    let user = document.getElementById("loginUser").value;
    let pass = document.getElementById("loginPass").value;

    let cek = users.find(u => u.username === user && u.password === pass);

    if (cek) {
        document.getElementById("loginMsg").innerHTML = "Login berhasil 🔥";

        // pindah ke halaman utama
        setTimeout(() => {
            window.location.href = "Menu.html";
        }, 1000);

    } else {
        document.getElementById("loginMsg").innerHTML = "Login gagal ❌";
    }
}// REGISTER + AUTO LOGIN
function register() {
    let user = document.getElementById("regUser").value;
    let pass = document.getElementById("regPass").value;

    if (user === "" || pass === "") {
        document.getElementById("regMsg").innerHTML = "Isi semua data!";
        return;
    }

    // ambil data lama
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // cek username
    let cek = users.find(u => u.username === user);
    if (cek) {
        document.getElementById("regMsg").innerHTML = "Username sudah dipakai!";
        return;
    }

    // simpan user baru
    users.push({ username: user, password: pass });
    localStorage.setItem("users", JSON.stringify(users));

    // 🔥 AUTO LOGIN
    localStorage.setItem("loginUser", user);

    document.getElementById("regMsg").innerHTML = "Daftar berhasil & langsung login ✅";

    // pindah ke halaman utama
    setTimeout(() => {
        window.location.href = "Menu.html";
    }, 1000);
}// cek user login
window.onload = function() {
    let user = localStorage.getItem("loginUser");

    if (!user) {
        // kalau belum login, balik ke login
        window.location.href = "login.html";
    } else {
        document.getElementById("welcome").innerHTML = "Halo, " + user + " 😎";
    }
}

// logout
function logout() {
    localStorage.removeItem("loginUser");
    window.location.href = "login.html";
}