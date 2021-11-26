(function () {
    const navElement = document.querySelector("nav");
    const menuElement = document.querySelector(".menu");
    window.addEventListener("scroll", changeShadow);

    function changeShadow() {
        let scroll = document.documentElement.scrollTop;
        if (scroll > 10) {
            navElement.classList.add("active_shadow");
            menuElement.classList.add("active_shadow");
        } else {
            navElement.classList.remove("active_shadow");
            menuElement.classList.remove("active_shadow");
        }
    }

    function changeDisplayNav(e) {
        e.preventDefault();

        let nav_ulElement = document.getElementById("mobile_nav_ul");
        if (nav_ulElement.style.display === "flex") {
            nav_ulElement.style.display = "none";
        } else {
            nav_ulElement.style.display = "flex";
        }
    }


    function hideNavUl(e) {
        e.target.style.display = "none";
    }

    document.querySelector(".nav_icon").addEventListener("click", changeDisplayNav);
    document.getElementById("mobile_nav_ul").addEventListener("mouseleave", hideNavUl);
}());