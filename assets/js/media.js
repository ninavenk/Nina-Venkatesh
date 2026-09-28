/* =========================================
   MEDIA DATA
========================================= */

const stories = [
    {
        image: "article1.jpg",
        publication: "SPORTSKEEDA",
        title: "“Dreams do truly come true”: Nina Venkatesh on racing at the Asian Games",
        description: "Nina Venkatesh reflects on the journey to racing at the Asian Games and what the experience meant.",
        date: "21 DEC 2023",
        url: "https://www.sportskeeda.com/swimming/news-dreams-truly-come-true-nina-venkatesh-racing-asian-games"
    },

    {
        image: "article2.jpg",
        publication: "THE NEW INDIAN EXPRESS",
        title: "Record-breaker swimmer Nina Venkatesh is ready for Asiad",
        description: "A feature on Nina's record-breaking performances and her preparation for the Asian Games.",
        date: "29 JUL 2023",
        url: "https://www.newindianexpress.com/other/2023/Jul/29/record-breaker-swimmer-nina-venkatesh-is-ready-for-asiad-2599692.html"
    },

    {
        image: "article3.jpg",
        publication: "ANI",
        title: "National Games swimmer Nina Venkatesh wins her fourth gold",
        description: "Coverage of Nina's fourth gold medal at the National Games and another standout championship performance.",
        date: "02 NOV 2023",
        url: "https://www.aninews.in/news/sports/others/national-games-swimmer-nina-venkatesh-wins-her-fourth-gold-virdhawal-khade-does-double20231102231009/"
    },

    {
        image: "article4.jpg",
        publication: "NEWS18",
        title: "Nina Venkatesh bags fourth gold at National Games",
        description: "National Games coverage highlighting Nina's fourth gold and her contribution to a strong team performance.",
        date: "2023",
        url: "https://www.news18.com/sports/37th-national-games-swimmer-nina-venkatesh-bags-fourth-gold-maharashtra-still-top-table-mr-poovamma-returns-8645867.html"
    },

    {
        image: "article5.jpg",
        publication: "SPORTSKEEDA",
        title: "“It's a huge support system behind them that you don't see”",
        description: "A closer look at the support system behind Nina's development and competitive swimming journey.",
        date: "2023",
        url: "https://www.sportskeeda.com/swimming/news-it-s-huge-support-system-behind-see-nina-venkatesh-family-s-support"
    },

    {
        image: "article6.jpg",
        publication: "SPORTSCAPE MAGAZINE",
        title: "“Nina Venkatesh Shatters Women's 50m Butterfly National Record With 27.57 Seconds”",
        description: "Coverage of Nina's national-record performance in the women's 50m butterfly.",
        date: "2026",
        url: "https://www.sportscapemagazine.com/blog/nina-venkatesh-womens-50m-butterfly-national-record-senior-national-aquatic-championships-2026"
    },

    {
        image: "article7.jpg",
        publication: "SWIMSWAM",
        title: "37th National Games 2023 Swimming – Nina, Sajan, Srihari, New Records",
        description: "Swimming coverage from the 37th National Games, including Nina's record-setting performances.",
        date: "2023",
        url: "https://swimswam.com/37th-national-games-2023-swimming-sajan-srihari-nina-ne-bnaye-new-records/"
    },

    {
        image: "article8.jpg",
        publication: "THE TIMES OF INDIA",
        title: "Nina Venkatesh creates new record in 50m butterfly in Bhubaneswar",
        description: "Coverage of Nina setting a new 50m butterfly record in Bhubaneswar.",
        date: "2022",
        url: "https://timesofindia.indiatimes.com/city/bhubaneswar/nina-creates-new-record-in-50m-butterfly/articleshow/92993687.cms"
    },

    {
        image: "article9.jpg",
        publication: "THE BRIDGE",
        title: "Nina Venkatesh creates a new 50m butterfly record at junior national aquatic championship",
        description: "Coverage of another milestone in Nina's junior national swimming career.",
        date: "2022",
        url: "https://thebridge.in/swimming/nina-venkatesh-50m-butterfly-record-junior-national-33438"
    }
];


/* =========================================
   MEDIA CAROUSEL
   DESKTOP + MOBILE
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const mediaSection =
        document.querySelector("#media-desktop");

    if (!mediaSection) {
        return;
    }


    const viewport =
        mediaSection.querySelector(
            "#media-carousel-viewport"
        );

    const track =
        mediaSection.querySelector(
            "#media-carousel-track"
        );

    const previousButton =
        mediaSection.querySelector(
            "#media-carousel-prev"
        );

    const nextButton =
        mediaSection.querySelector(
            "#media-carousel-next"
        );

    const dotsContainer =
        mediaSection.querySelector(
            "#media-carousel-dots"
        );

    const counter =
        mediaSection.querySelector(
            "#media-carousel-count"
        );

    const storyCount =
        mediaSection.querySelector(
            "#story-count"
        );


    if (
        !viewport ||
        !track ||
        !stories.length
    ) {
        return;
    }


    /* =========================================
       SETTINGS
    ========================================= */

    const SPEED = 22;


    /* =========================================
       STORY COUNT
    ========================================= */

    if (storyCount) {
        storyCount.textContent =
            String(stories.length).padStart(2, "0");
    }


    /* =========================================
       CREATE CARD
    ========================================= */

    function createCard(story, index, duplicate) {

        const card =
            document.createElement("a");

        card.className =
            "media-carousel-card";


        card.href =
            story.url;

        card.target =
            "_blank";

        card.rel =
            "noopener noreferrer";


        if (duplicate) {

            card.setAttribute(
                "aria-hidden",
                "true"
            );

            card.tabIndex = -1;
        }


        /* IMAGE */

        const imageWrap =
            document.createElement("div");

        imageWrap.className =
            "media-carousel-card-image";


        const image =
            document.createElement("img");

        image.src =
            "assets/images/media/" +
            story.image;

        image.alt =
            story.title;

        image.loading =
            duplicate || index > 0
                ? "lazy"
                : "eager";

        image.draggable =
            false;


        imageWrap.appendChild(image);


        /* CONTENT */

        const content =
            document.createElement("div");

        content.className =
            "media-carousel-card-content";


        /* PUBLICATION */

        const publication =
            document.createElement("p");

        publication.className =
            "media-carousel-card-publication";

        publication.textContent =
            story.publication;


        /* TITLE */

        const title =
            document.createElement("h2");

        title.textContent =
            story.title;


        /* DESCRIPTION */

        const description =
            document.createElement("p");

        description.className =
            "media-carousel-card-description";

        description.textContent =
            story.description;


        /* META */

        const meta =
            document.createElement("div");

        meta.className =
            "media-carousel-card-meta";


        const date =
            document.createElement("span");

        date.textContent =
            story.date;


        const read =
            document.createElement("span");

        read.innerHTML =
            "READ ARTICLE <b>↗</b>";


        meta.appendChild(date);
        meta.appendChild(read);


        content.appendChild(publication);
        content.appendChild(title);
        content.appendChild(description);
        content.appendChild(meta);


        card.appendChild(imageWrap);
        card.appendChild(content);


        return card;
    }


    /* =========================================
       BUILD INFINITE TRACK
    ========================================= */

    track.innerHTML = "";


    stories.forEach(function (story, index) {

        track.appendChild(
            createCard(
                story,
                index,
                false
            )
        );

    });


    stories.forEach(function (story, index) {

        track.appendChild(
            createCard(
                story,
                index,
                true
            )
        );

    });


    const cards =
        Array.from(
            track.querySelectorAll(
                ".media-carousel-card"
            )
        );


    if (!cards.length) {
        return;
    }


    /* =========================================
       STATE
    ========================================= */

    let position = 0;

    let lastTime = null;

    let animationFrame = null;

    let paused = false;

    let dragging = false;

    let dragged = false;

    let startX = 0;

    let startPosition = 0;

    let setWidth = 0;

    let step = 0;

    let currentIndex = 0;

    let resumeTimer = null;


    /* =========================================
       MEASURE
    ========================================= */

    function measure() {

        if (!cards.length) {
            return;
        }


        const cardWidth =
            cards[0].getBoundingClientRect().width;


        const styles =
            window.getComputedStyle(
                track
            );


        const gap =
            parseFloat(
                styles.columnGap ||
                styles.gap ||
                "0"
            );


        step =
            cardWidth + gap;


        setWidth =
            step * stories.length;


        if (
            position >= setWidth ||
            position < 0
        ) {

            position =
                position % setWidth;

            if (position < 0) {
                position += setWidth;
            }

        }


        render();
    }


    /* =========================================
       RENDER
    ========================================= */

    function render() {

        track.style.transform =
            `translate3d(${-position}px, 0, 0)`;

        updateUI();
    }


    /* =========================================
       UPDATE UI
    ========================================= */

    function updateUI() {

        if (!step || !stories.length) {
            return;
        }


        let index =
            Math.round(
                position / step
            );


        index =
            index % stories.length;


        if (index < 0) {
            index += stories.length;
        }


        currentIndex = index;


        if (counter) {

            counter.textContent =
                String(index + 1).padStart(2, "0") +
                " / " +
                String(stories.length).padStart(2, "0");

        }


        if (dotsContainer) {

            const dots =
                dotsContainer.querySelectorAll(
                    "button"
                );


            dots.forEach(function (dot, i) {

                dot.classList.toggle(
                    "active",
                    i === index
                );

            });

        }

    }


    /* =========================================
       NORMALISE POSITION
    ========================================= */

    function normalise() {

        if (!setWidth) {
            return;
        }


        while (position >= setWidth) {
            position -= setWidth;
        }


        while (position < 0) {
            position += setWidth;
        }

    }


    /* =========================================
       AUTO SCROLL
    ========================================= */

    function animate(time) {

        if (lastTime === null) {
            lastTime = time;
        }


        const delta =
            Math.min(
                time - lastTime,
                50
            );


        lastTime = time;


        if (
            !paused &&
            !dragging &&
            setWidth
        ) {

            position +=
                SPEED *
                (delta / 1000);

            normalise();

            render();
        }


        animationFrame =
            requestAnimationFrame(
                animate
            );
    }


    /* =========================================
       PAUSE
    ========================================= */

    function pause() {

        paused = true;

        if (resumeTimer) {
            clearTimeout(resumeTimer);
            resumeTimer = null;
        }

    }


    /* =========================================
       RESUME
    ========================================= */

    function resume(delay = 1200) {

        if (resumeTimer) {
            clearTimeout(resumeTimer);
        }


        resumeTimer =
            setTimeout(
                function () {

                    paused = false;

                },
                delay
            );

    }


    /* =========================================
       NAVIGATE
    ========================================= */

    function goTo(index) {

        if (!step) {
            return;
        }


        pause();


        index =
            (index + stories.length) %
            stories.length;


        const target =
            index * step;


        let current =
            position % setWidth;


        if (current < 0) {
            current += setWidth;
        }


        let difference =
            target - current;


        if (difference > setWidth / 2) {
            difference -= setWidth;
        }

        if (difference < -setWidth / 2) {
            difference += setWidth;
        }


        const start =
            position;


        const destination =
            position + difference;


        const duration = 650;

        const startTime =
            performance.now();


        function animateTo(now) {

            const progress =
                Math.min(
                    (now - startTime) /
                    duration,
                    1
                );


            const eased =
                1 -
                Math.pow(
                    1 - progress,
                    3
                );


            position =
                start +
                (
                    destination -
                    start
                ) *
                eased;


            normalise();

            render();


            if (progress < 1) {

                requestAnimationFrame(
                    animateTo
                );

            } else {

                resume();

            }

        }


        requestAnimationFrame(
            animateTo
        );

    }


    /* =========================================
       PREVIOUS
    ========================================= */

    if (previousButton) {

        previousButton.addEventListener(
            "click",
            function () {

                goTo(
                    currentIndex - 1
                );

            }
        );

    }


    /* =========================================
       NEXT
    ========================================= */

    if (nextButton) {

        nextButton.addEventListener(
            "click",
            function () {

                goTo(
                    currentIndex + 1
                );

            }
        );

    }


    /* =========================================
       DOTS
    ========================================= */

    if (dotsContainer) {

        dotsContainer.innerHTML = "";


        stories.forEach(
            function (_, index) {

                const dot =
                    document.createElement(
                        "button"
                    );


                dot.type = "button";

                dot.setAttribute(
                    "aria-label",
                    "Go to media story " +
                    (index + 1)
                );


                dot.addEventListener(
                    "click",
                    function () {

                        goTo(index);

                    }
                );


                dotsContainer.appendChild(
                    dot
                );

            }
        );

    }


    /* =========================================
       MOUSE HOVER
    ========================================= */

    viewport.addEventListener(
        "mouseenter",
        function () {

            pause();

        }
    );


    viewport.addEventListener(
        "mouseleave",
        function () {

            resume(300);

        }
    );


    /* =========================================
       TOUCH / DRAG
    ========================================= */

    viewport.addEventListener(
        "pointerdown",
        function (event) {

            if (
                event.pointerType ===
                "mouse" &&
                event.button !== 0
            ) {
                return;
            }


            dragging = true;

            dragged = false;

            startX =
                event.clientX;

            startPosition =
                position;


            pause();


            viewport.setPointerCapture(
                event.pointerId
            );

        }
    );


    viewport.addEventListener(
        "pointermove",
        function (event) {

            if (!dragging) {
                return;
            }


            const delta =
                event.clientX -
                startX;


            if (
                Math.abs(delta) >
                5
            ) {
                dragged = true;
            }


            position =
                startPosition -
                delta;


            normalise();

            render();

        }
    );


    viewport.addEventListener(
        "pointerup",
        function (event) {

            if (!dragging) {
                return;
            }


            dragging = false;


            try {

                viewport.releasePointerCapture(
                    event.pointerId
                );

            } catch (_) {}


            if (step) {

                const nearest =
                    Math.round(
                        position / step
                    );


                position =
                    nearest * step;


                normalise();

                render();

            }


            resume();

        }
    );


    viewport.addEventListener(
        "pointercancel",
        function () {

            dragging = false;

            resume();

        }
    );


    /* =========================================
       PREVENT CLICK AFTER DRAG
    ========================================= */

    viewport.addEventListener(
        "click",
        function (event) {

            if (dragged) {

                event.preventDefault();
                event.stopPropagation();

                dragged = false;

            }

        },
        true
    );


    /* =========================================
       RESIZE
    ========================================= */

    let resizeTimer = null;


    window.addEventListener(
        "resize",
        function () {

            clearTimeout(
                resizeTimer
            );


            resizeTimer =
                setTimeout(
                    measure,
                    150
                );

        }
    );


    /* =========================================
       START
    ========================================= */

    measure();


    animationFrame =
        requestAnimationFrame(
            animate
        );

});