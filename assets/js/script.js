document.addEventListener("DOMContentLoaded", function () {


    /* =========================================
       MOBILE MENU
    ========================================= */

    const menuToggle =
        document.querySelector(".menu-toggle");

    const mobileMenu =
        document.querySelector(".mobile-menu");

    const menuClose =
        document.querySelector(".menu-close");

    const mobileLinks =
        document.querySelectorAll(".mobile-nav a");


    function closeMenu() {

        if (!mobileMenu) return;

        mobileMenu.classList.remove("active");

        if (menuToggle) {

            menuToggle.classList.remove("is-open");

            menuToggle.setAttribute(
                "aria-label",
                "Open menu"
            );

        }

        document.body.style.overflow = "";

    }


    function openMenu() {

        if (!mobileMenu) return;

        mobileMenu.classList.add("active");

        if (menuToggle) {

            menuToggle.classList.add("is-open");

            menuToggle.setAttribute(
                "aria-label",
                "Close menu"
            );

        }

        document.body.style.overflow = "hidden";

    }


    if (menuToggle && mobileMenu) {

        menuToggle.addEventListener(
            "click",
            function (event) {

                event.preventDefault();
                event.stopPropagation();

                if (
                    mobileMenu.classList.contains("active")
                ) {

                    closeMenu();

                } else {

                    openMenu();

                }

            }
        );

    }


    if (menuClose) {

        menuClose.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                closeMenu();

            }
        );

    }


    /* CLOSE MENU AFTER NAVIGATION */

    mobileLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                closeMenu();

            }
        );

    });


    /* ESC KEY */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                closeMenu();

            }

        }
    );



    /* =========================================
       MOBILE MEDIA CAROUSEL
       USES STORIES FROM media.js
    ========================================= */

    const mediaCarousel =
        document.getElementById(
            "mobile-media-carousel"
        );

    const mediaDots =
        document.getElementById(
            "mobile-media-dots"
        );

    const mediaCount =
        document.getElementById(
            "mobile-story-count"
        );


    /*
       media.js must be loaded before script.js.

       It provides:

           const stories = [...]

       containing all your media articles.
    */


    if (
        mediaCarousel &&
        mediaDots &&
        typeof stories !== "undefined" &&
        stories.length
    ) {


        /* =====================================
           STORY COUNT
        ===================================== */

        if (mediaCount) {

            mediaCount.textContent =
                String(stories.length)
                .padStart(2, "0");

        }


        /* =====================================
           CREATE ALL MEDIA CARDS
        ===================================== */

        stories.forEach(
            function (story, index) {


                const card =
                    document.createElement("article");


                card.className =
                    "mobile-media-card";


                card.innerHTML = `

                    <a
                        href="${story.url}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="mobile-media-card-link"
                    >

                        <img
                            class="mobile-media-card-image"
                            src="assets/images/media/${story.image}"
                            alt="${story.title}"
                        >


                        <div
                            class="mobile-media-card-content"
                        >

                            <div>

                                <p
                                    class="mobile-media-publication"
                                >
                                    ${story.publication}
                                </p>


                                <h3>
                                    ${story.title}
                                </h3>

                            </div>


                            <div
                                class="mobile-media-meta"
                            >

                                <span>
                                    ${story.date}
                                </span>

                                <span>
                                    ↗
                                </span>

                            </div>

                        </div>

                    </a>

                `;


                mediaCarousel.appendChild(card);


                /* =================================
                   CREATE PAGINATION DOT
                ================================= */

                const dot =
                    document.createElement("button");


                dot.type = "button";

                dot.className =
                    "mobile-media-dot";


                dot.setAttribute(
                    "aria-label",
                    "Go to media story " +
                    (index + 1)
                );


                dot.addEventListener(
                    "click",
                    function () {

                        card.scrollIntoView({
                            behavior: "smooth",
                            block: "nearest",
                            inline: "start"
                        });

                    }
                );


                mediaDots.appendChild(dot);

            }
        );


        const mediaCards =
            mediaCarousel.querySelectorAll(
                ".mobile-media-card"
            );


        const dots =
            mediaDots.querySelectorAll(
                ".mobile-media-dot"
            );


        /* =====================================
           UPDATE ACTIVE DOT
        ===================================== */

        function updateMediaDot() {

            if (!mediaCards.length) {
                return;
            }


            const currentScroll =
                mediaCarousel.scrollLeft;


            let closestIndex = 0;

            let closestDistance =
                Infinity;


            mediaCards.forEach(
                function (card, index) {

                    const distance =
                        Math.abs(
                            card.offsetLeft -
                            currentScroll
                        );


                    if (
                        distance <
                        closestDistance
                    ) {

                        closestDistance =
                            distance;

                        closestIndex =
                            index;

                    }

                }
            );


            dots.forEach(
                function (dot, index) {

                    dot.classList.toggle(
                        "active",
                        index === closestIndex
                    );

                }
            );

        }


        mediaCarousel.addEventListener(
            "scroll",
            updateMediaDot,
            {
                passive: true
            }
        );


        updateMediaDot();

    }



    /* =========================================
       GALLERY
       SAVE RETURN POSITION
    ========================================= */

    const fullGalleryLink =
        document.getElementById(
            "view-full-gallery"
        );


    if (fullGalleryLink) {

        fullGalleryLink.addEventListener(
            "click",
            function () {

                sessionStorage.setItem(
                    "mobileGalleryReturn",
                    window.scrollY
                );

            }
        );

    }



    /* =========================================
       GALLERY
       RESTORE RETURN POSITION
    ========================================= */

    const returnPosition =
        sessionStorage.getItem(
            "mobileGalleryReturn"
        );


    if (returnPosition !== null) {

        sessionStorage.removeItem(
            "mobileGalleryReturn"
        );


        window.addEventListener(
            "load",
            function () {

                setTimeout(
                    function () {

                        window.scrollTo({
                            top: Number(
                                returnPosition
                            ),
                            behavior: "auto"
                        });

                    },
                    150
                );

            }
        );

    }

});