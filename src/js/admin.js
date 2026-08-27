/* =====================================================
   SWAP SHOP ADMIN JAVASCRIPT
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* =================================================
       GET HTML ELEMENTS
       ================================================= */

    const sidebar = document.getElementById("adminSidebar");
    const menuButton = document.getElementById("menuToggle");

    const sidebarLinks = document.querySelectorAll(
        ".sidebar-link[data-section]"
    );

    const adminPanels = document.querySelectorAll(".admin-panel");

    const pageTitle = document.getElementById("pageTitle");

    const drawer = document.getElementById("detailDrawer");
    const drawerOverlay = document.getElementById("detailOverlay");

    const drawerClose = document.getElementById("drawerClose");
    const drawerDone = document.getElementById("drawerDone");

    const drawerTitle = document.getElementById("drawerTitle");
    const drawerSubtitle = document.getElementById("drawerSubtitle");
    const drawerMessage = document.getElementById("drawerMessage");

    const logoutButton = document.getElementById("logoutButton");


   
       1. //RESPONSIVE SIDEBAR//

    // Open and close the sidebar on phones/tablets.

    if (menuButton && sidebar) {

        menuButton.addEventListener("click", function () {

            sidebar.classList.toggle("open");

        });

    }


    // Close the sidebar after clicking a menu item
    // on a small screen.

    sidebarLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (window.innerWidth <= 800) {

                sidebar.classList.remove("open");

            }

        });

    });


    // If the screen becomes larger,
    // remove the mobile sidebar class.

    window.addEventListener("resize", function () {

        if (window.innerWidth > 800 && sidebar) {

            sidebar.classList.remove("open");

        }

    });


    /* =================================================
       2. SIDEBAR NAVIGATION
       ================================================= */

    sidebarLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            // Get the section to open.

            const sectionName =
                link.getAttribute("data-section");


            // Get the title.

            const title =
                link.getAttribute("data-title");


            /* -----------------------------------------
               Remove active from all sidebar buttons
               ----------------------------------------- */

            sidebarLinks.forEach(function (item) {

                item.classList.remove("active");

            });


            /* -----------------------------------------
               Make clicked button active
               ----------------------------------------- */

            link.classList.add("active");


            /* -----------------------------------------
               Hide all admin sections
               ----------------------------------------- */

            adminPanels.forEach(function (panel) {

                panel.classList.remove("active");

            });


            /* -----------------------------------------
               Show selected section
               ----------------------------------------- */

            const selectedPanel =
                document.getElementById(sectionName);

            if (selectedPanel) {

                selectedPanel.classList.add("active");

            }


            /* -----------------------------------------
               Change page title
               ----------------------------------------- */

            if (pageTitle && title) {

                pageTitle.textContent = title;

            }

        });

    });


    /* =================================================
       3. RIGHT INFORMATION SIDEBAR
       ================================================= */

    /*
       You can open the information sidebar from HTML:

       onclick="openDetail(
           'Customer Information',
           'Customer details appear here.'
       )"
    */

    window.openDetail = function (title, message) {

        if (!drawer) {
            return;
        }


        // Change the title.

        if (drawerTitle) {

            drawerTitle.textContent =
                title || "Information";

        }


        // Change the small subtitle.

        if (drawerSubtitle) {

            drawerSubtitle.textContent =
                "Administration details";

        }


        // Change the information.

        if (drawerMessage) {

            drawerMessage.textContent =
                message || "No additional information available.";

        }


        // Open the right sidebar.

        drawer.classList.add("open");


        // Show dark background.

        if (drawerOverlay) {

            drawerOverlay.classList.add("open");

        }


        // Stop the main page from scrolling.

        document.body.style.overflow = "hidden";

    };


    /* =================================================
       4. CLOSE RIGHT INFORMATION SIDEBAR
       ================================================= */

    function closeDetail() {

        if (drawer) {

            drawer.classList.remove("open");

        }


        if (drawerOverlay) {

            drawerOverlay.classList.remove("open");

        }


        // Allow the page to scroll again.

        document.body.style.overflow = "";

    }


    /* -----------------------------------------
       Close using X button
       ----------------------------------------- */

    if (drawerClose) {

        drawerClose.addEventListener(
            "click",
            closeDetail
        );

    }


    /* -----------------------------------------
       Close using bottom Close button
       ----------------------------------------- */

    if (drawerDone) {

        drawerDone.addEventListener(
            "click",
            closeDetail
        );

    }


    /* -----------------------------------------
       Close when dark background is clicked
       ----------------------------------------- */

    if (drawerOverlay) {

        drawerOverlay.addEventListener(
            "click",
            closeDetail
        );

    }


    /* =================================================
       5. ESCAPE KEY
       ================================================= */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            // Close information sidebar.

            closeDetail();


            // Close mobile menu.

            if (sidebar) {

                sidebar.classList.remove("open");

            }

        }

    });


    /* =================================================
       6. LOGOUT
       ================================================= */

    if (logoutButton) {

        logoutButton.addEventListener("click", function () {

            /*
               If your project already has a logout()
               function, use it.
            */

            if (typeof logout === "function") {

                logout();

            } else {

                /*
                   Otherwise return to the main page.
                */

                window.location.href = "index.html";

            }

        });

    }

});