/* =========================================================
   ONE-PAGE SITE — FINAL JS
   Desktop behavior untouched.
   Mobile hamburger removed.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       REMOVE MOBILE HAMBURGER + MOBILE MENU
       ===================================================== */

    const menuToggle =
        document.querySelector(".menu-toggle");

    const mobileMenu =
        document.querySelector(".mobile-menu");

    /*
     * The hamburger is no longer needed.
     * Remove both elements completely rather than
     * changing any desktop navigation.
     */

    if (menuToggle) {
        menuToggle.remove();
    }

    if (mobileMenu) {
        mobileMenu.remove();
    }

    document.body.classList.remove("menu-open");


    /* =====================================================
       NV LOGO
       ===================================================== */

    const navLogo =
        document.querySelector(".navbar .logo");

    if (navLogo) {

        navLogo.addEventListener("click", event => {

            const homeTarget =
                document.querySelector("#home");

            /*
             * On standalone pages such as gallery.html,
             * allow the normal index.html link to work.
             */

            if (!homeTarget) {
                return;
            }

            event.preventDefault();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

            history.replaceState(
                null,
                "",
                window.location.pathname
            );

        });

    }


    /* =====================================================
       HOME / TOP LINKS
       ===================================================== */

    const homeLinks =
        document.querySelectorAll(
            'a[href="#top"], a[href="#home"], .nav-logo, .mobile-logo'
        );

    homeLinks.forEach(link => {

        link.addEventListener("click", event => {

            const href =
                link.getAttribute("href");

            if (
                href === "#top" ||
                href === "#home" ||
                link.classList.contains("nav-logo") ||
                link.classList.contains("mobile-logo")
            ) {

                const homeTarget =
                    document.querySelector("#home");

                if (!homeTarget) {
                    return;
                }

                event.preventDefault();

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

                history.replaceState(
                    null,
                    "",
                    window.location.pathname
                );

            }

        });

    });


    /* =====================================================
       MOBILE GALLERY
       ===================================================== */

    const galleryLink =
        document.querySelector(
            ".mobile-view-gallery"
        );

    if (galleryLink) {

        galleryLink.addEventListener(
            "click",
            () => {

                sessionStorage.setItem(
                    "galleryReturnPosition",
                    String(window.scrollY)
                );

            }
        );

    }


    /* =====================================================
       RETURN FROM GALLERY
       ===================================================== */

    const returnPosition =
        sessionStorage.getItem(
            "galleryReturnPosition"
        );

    if (returnPosition !== null) {

        sessionStorage.removeItem(
            "galleryReturnPosition"
        );

        requestAnimationFrame(() => {

            window.scrollTo({
                top: Number(returnPosition),
                behavior: "instant"
            });

        });

    }


    /* =====================================================
       MOBILE MEDIA CAROUSEL
       ===================================================== */

    const mediaCarousel =
        document.querySelector(
            ".mobile-media-carousel"
        );

    if (mediaCarousel) {

        let isDragging = false;
        let startX = 0;
        let scrollStart = 0;


        mediaCarousel.addEventListener(
            "pointerdown",
            event => {

                isDragging = true;

                startX =
                    event.clientX;

                scrollStart =
                    mediaCarousel.scrollLeft;

                mediaCarousel.setPointerCapture?.(
                    event.pointerId
                );

            }
        );


        mediaCarousel.addEventListener(
            "pointermove",
            event => {

                if (!isDragging) {
                    return;
                }

                const distance =
                    event.clientX - startX;

                mediaCarousel.scrollLeft =
                    scrollStart - distance;

            }
        );


        const stopDragging = () => {
            isDragging = false;
        };


        mediaCarousel.addEventListener(
            "pointerup",
            stopDragging
        );

        mediaCarousel.addEventListener(
            "pointercancel",
            stopDragging
        );

        mediaCarousel.addEventListener(
            "mouseleave",
            stopDragging
        );

    }


    /* =====================================================
       MOBILE SCROLL INDICATOR
       ===================================================== */

    const scrollIndicator =
        document.querySelector(
            ".mobile-scroll-indicator"
        );

    if (scrollIndicator) {

        const dismissIndicator = () => {

            if (window.scrollY > 10) {

                scrollIndicator.classList.add(
                    "is-hidden"
                );

                window.removeEventListener(
                    "scroll",
                    dismissIndicator
                );

            }

        };


        window.addEventListener(
            "scroll",
            dismissIndicator,
            { passive: true }
        );

    }


    /* =====================================================
       ANCHOR NAVIGATION
       ===================================================== */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const targetId =
                    link.getAttribute("href");


                if (
                    !targetId ||
                    targetId === "#" ||
                    targetId === "#top" ||
                    targetId === "#home"
                ) {
                    return;
                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) {
                    return;
                }


                event.preventDefault();


                /*
                 * DESKTOP
                 * Exact section landing.
                 *
                 * MOBILE
                 * Keep the small 20px offset.
                 */

                const offset =
                    window.innerWidth <= 800
                        ? 20
                        : 0;


                const targetTop =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    offset;


                window.scrollTo({
                    top: targetTop,
                    behavior: "smooth"
                });


                history.replaceState(
                    null,
                    "",
                    targetId
                );

            }
        );

    });


    /* =====================================================
       CONTACT LINKS
       ===================================================== */

    const contactLinks =
        document.querySelectorAll(
            "#contact-desktop a"
        );

    contactLinks.forEach(link => {

        link.addEventListener(
            "click",
            () => {

                /*
                 * Native email / Instagram /
                 * social-link behavior remains intact.
                 */

            }
        );

    });


    /* =====================================================
       RESIZE SAFETY
       ===================================================== */

    let lastWidth =
        window.innerWidth;


    window.addEventListener(
        "resize",
        () => {

            const currentWidth =
                window.innerWidth;


            if (
                Math.abs(
                    currentWidth - lastWidth
                ) > 80
            ) {

                lastWidth =
                    currentWidth;

            }

        },
        { passive: true }
    );


});