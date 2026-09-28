/* =========================================================
   ONE-PAGE SITE — MOBILE FINAL JS
   Desktop behavior untouched.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       HOME / NV LOGO
       Always return to the top of the homepage.
    ===================================================== */

    const homeLinks = document.querySelectorAll(
        'a[href="#top"], a[href="#home"], .nav-logo, .mobile-logo'
    );

    homeLinks.forEach(link => {
        link.addEventListener("click", event => {
            const href = link.getAttribute("href");

            if (
                href === "#top" ||
                href === "#home" ||
                link.classList.contains("nav-logo") ||
                link.classList.contains("mobile-logo")
            ) {
                event.preventDefault();

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

                history.replaceState(null, "", window.location.pathname);
            }
        });
    });


    /* =====================================================
       MOBILE MENU
       ===================================================== */

    const menuToggle = document.querySelector(".mobile-menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");
    const mobileMenuLinks = document.querySelectorAll(".mobile-menu a");

    if (menuToggle && mobileMenu) {

        menuToggle.addEventListener("click", () => {
            const isOpen = mobileMenu.classList.toggle("is-open");

            menuToggle.classList.toggle("is-open", isOpen);
            document.body.classList.toggle("menu-open", isOpen);
            menuToggle.setAttribute("aria-expanded", String(isOpen));
        });

        mobileMenuLinks.forEach(link => {
            link.addEventListener("click", () => {
                mobileMenu.classList.remove("is-open");
                menuToggle.classList.remove("is-open");
                document.body.classList.remove("menu-open");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });
    }


    /* =====================================================
       MOBILE GALLERY
       ===================================================== */

    const galleryLink = document.querySelector(".mobile-view-gallery");

    if (galleryLink) {
        galleryLink.addEventListener("click", () => {
            sessionStorage.setItem(
                "galleryReturnPosition",
                String(window.scrollY)
            );
        });
    }


    /* =====================================================
       RETURN FROM GALLERY
       ===================================================== */

    const returnPosition = sessionStorage.getItem(
        "galleryReturnPosition"
    );

    if (returnPosition !== null) {
        sessionStorage.removeItem("galleryReturnPosition");

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

    const mediaCarousel = document.querySelector(
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
                startX = event.clientX;
                scrollStart = mediaCarousel.scrollLeft;

                mediaCarousel.setPointerCapture?.(
                    event.pointerId
                );
            }
        );

        mediaCarousel.addEventListener(
            "pointermove",
            event => {
                if (!isDragging) return;

                const distance = event.clientX - startX;

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

    const scrollIndicator = document.querySelector(
        ".mobile-scroll-indicator"
    );

    if (scrollIndicator) {

        const dismissIndicator = () => {
            if (window.scrollY > 10) {
                scrollIndicator.classList.add("is-hidden");
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
       MOBILE ANCHOR NAVIGATION
       ===================================================== */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(link => {

        link.addEventListener("click", event => {

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
                document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            const offset = 20;

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
        });

    });


    /* =====================================================
       MOBILE CONTACT
       ===================================================== */

    const contactLinks =
        document.querySelectorAll(
            "#contact-desktop a"
        );

    contactLinks.forEach(link => {

        link.addEventListener("click", () => {

            /*
             * Keep native email / Instagram /
             * social-link behavior intact.
             *
             * No emoji arrows are injected here.
             */

        });

    });


    /* =====================================================
       RESIZE SAFETY
       ===================================================== */

    let lastWidth = window.innerWidth;

    window.addEventListener(
        "resize",
        () => {

            const currentWidth =
                window.innerWidth;

            if (
                Math.abs(currentWidth - lastWidth) > 80
            ) {
                lastWidth = currentWidth;
            }

        },
        { passive: true }
    );

});