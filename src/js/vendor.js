/* ==========================================
   SWAP SHOP VENDOR SIDEBAR
   RESPONSIVE SIDEBAR
========================================== */

const sidebar = document.getElementById("sidebar");
const sidebarToggle = document.getElementById("sidebarToggle");
const sidebarOverlay = document.getElementById("sidebarOverlay");


/*CHECK MOBILE SCREEN*/

function isMobile() {
    return window.innerWidth <= 800;
}


/*OPEN SIDEBAR*/

function openSidebar() {

    if (!sidebar) return;

    sidebar.classList.add("open");

    if (sidebarOverlay && isMobile()) {
        sidebarOverlay.classList.add("show");
    }
}


/*CLOSE SIDEBAR*/

function closeSidebar() {

    if (!sidebar) return;

    sidebar.classList.remove("open");

    if (sidebarOverlay) {
        sidebarOverlay.classList.remove("show");
    }
}


/*MENU BUTTON*/
if (sidebarToggle) {

    sidebarToggle.addEventListener("click", function () {

        if (sidebar.classList.contains("open")) {
            closeSidebar();
        } else {
            openSidebar();
        }

    });

}


/* OVERLAY*/

if (sidebarOverlay) {

    sidebarOverlay.addEventListener("click", function () {

        closeSidebar();

    });

}


/* SIDEBAR LINKS*/

const sidebarLinks =
    document.querySelectorAll(".sidebar-link");


sidebarLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (isMobile()) {
            closeSidebar();
        }

    });

});


/*ESCAPE KEY*/

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        closeSidebar();
    }

});


/*RESPONSIVE RESIZE*/

window.addEventListener("resize", function () {

    if (!isMobile()) {
        closeSidebar();
    }

});


/* LOGOUT*/

function logoutVendor() {

    if (typeof logout === "function") {

        logout();

    } else {

        window.location.href = "../";

    }

}