<script>
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
        // Klik garis 3 untuk Buka / Tutup Menu Pop-up
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });

        // Otomatis menutup menu setelah salah satu link diklik
        const links = navLinks.querySelectorAll('a');
        links.forEach(function(link) {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
            });
        });
    }
});
</script>