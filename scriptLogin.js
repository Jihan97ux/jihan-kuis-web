document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        if (email.includes('@')) {
            localStorage.setItem('name', name);
            localStorage.setItem('email', email);

            document.getElementById('message').innerHTML = `Selamat datang, ${name}! Anda telah berhasil login dengan email: ${email}`;
            document.getElementById('message').classList.remove('error');

            window.location.href = 'kuis.html';
        } else {
            document.getElementById('message').innerHTML = 'Harap sertakan "@" dalam email';
            document.getElementById('message').classList.add('error');
        }
    } else {
        document.getElementById('message').innerHTML = 'Harap isi nama dan email!';
        document.getElementById('message').classList.remove('error');
    }
});