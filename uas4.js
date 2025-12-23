<script>
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    // Fungsi untuk toggle menu
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        
        // Mencegah scroll pada body saat menu terbuka
        document.body.style.overflow = navMenu.classList.contains("active") ? "hidden" : "auto";
    });

    // Menutup menu saat salah satu link diklik
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
            document.body.style.overflow = "auto";
        });
    });
</script>
