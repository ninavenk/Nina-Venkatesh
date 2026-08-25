/* =========================================
   MEDIA DATA
   ADD NEW ARTICLES HERE
========================================= */

const stories = [

    {
        image: "article1.jpg",
        publication: "SPORTSKEEDA",
        title: "“Dreams do truly come true”: Nina Venkatesh on racing at the Asian Games",
        date: "21 DEC 2023",
        url: "https://www.sportskeeda.com/swimming/news-dreams-truly-come-true-nina-venkatesh-racing-asian-games"
    },

    {
        image: "article2.jpg",
        publication: "THE NEW INDIAN EXPRESS",
        title: "Record-breaker swimmer Nina Venkatesh is ready for Asiad",
        date: "29 JUL 2023",
        url: "https://www.newindianexpress.com/other/2023/Jul/29/record-breaker-swimmer-nina-venkatesh-is-ready-for-asiad-2599692.html"
    },

    {
        image: "article3.jpg",
        publication: "ANI",
        title: "National Games swimmer Nina Venkatesh wins her fourth gold",
        date: "02 NOV 2023",
        url: "https://www.aninews.in/news/sports/others/national-games-swimmer-nina-venkatesh-wins-her-fourth-gold-virdhawal-khade-does-double20231102231009/"
    },

    {
        image: "article4.jpg",
        publication: "NEWS18",
        title: "Nina Venkatesh bags fourth gold at National Games",
        date: "2023",
        url: "https://www.news18.com/sports/37th-national-games-swimmer-nina-venkatesh-bags-fourth-gold-maharashtra-still-top-table-mr-poovamma-returns-8645867.html"
    },

    {
        image: "article5.jpg",
        publication: "SPORTSKEEDA",
        title: "“It's a huge support system behind them that you don't see”",
        date: "2023",
        url: "https://www.sportskeeda.com/swimming/news-it-s-huge-support-system-behind-see-nina-venkatesh-family-s-support"
    },

    {
        image: "article6.jpg",
        publication: "SPORTSCAPE MAGAZINE",
        title: "“Nina Venkatesh Shatters Women's 50m Butterfly National Record With 27.57 Seconds”",
        date: "2026",
        url: "https://www.sportscapemagazine.com/blog/nina-venkatesh-womens-50m-butterfly-national-record-senior-national-aquatic-championships-2026"
    },

    {
        image: "article7.jpg",
        publication: "SWIMSWAM",
        title: "37th National Games 2023 Swimming – Nina, Sajan, Srihari, New Records",
        date: "2023",
        url: "https://swimswam.com/37th-national-games-2023-swimming-sajan-srihari-nina-ne-bnaye-new-records/"
    },

     {
        image: "article8.jpg",
        publication: "THE TIMES OF INDIA",
        title: "Nina Venkatesh creates new record in 50m butterfly in Bhubaneswar",
        date: "2022",
        url: "https://timesofindia.indiatimes.com/city/bhubaneswar/nina-creates-new-record-in-50m-butterfly/articleshow/92993687.cms"
    },

    {
        image: "article9.jpg",
        publication: "THE BRIDGE",
        title: "Nina Venkatesh creates a new 50m butterfly record at junior national aquatic championship",
        date: "2022",
        url: "https://thebridge.in/swimming/nina-venkatesh-50m-butterfly-record-junior-national-33438"
    },

    

];


/* =========================================
   PAGE
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const featured =
            document.querySelector("#featured");

        const archive =
            document.querySelector("#media-archive");

        const featuredLink =
            document.querySelector("#featured-link");

        const featuredImage =
            document.querySelector("#featured-image");

        const featuredPublication =
            document.querySelector("#featured-publication");

        const featuredTitle =
            document.querySelector("#featured-title");

        const featuredDate =
            document.querySelector("#featured-date");

        const storyCount =
            document.querySelector("#story-count");


        if (
            !featured ||
            !archive ||
            !stories.length
        ) {
            return;
        }


        /* =====================================
           STORY COUNT
        ===================================== */

        storyCount.textContent =
            String(stories.length).padStart(2, "0");


        /* =====================================
           FEATURED STORY
           First article = featured
        ===================================== */

        const first =
            stories[0];

        featuredLink.href =
            first.url;

        featuredImage.src =
            `assets/images/media/${first.image}`;

        featuredImage.alt =
            first.title;

        featuredPublication.textContent =
            first.publication;

        featuredTitle.textContent =
            first.title;

        featuredDate.textContent =
            first.date;


        /* =====================================
           CREATE ARCHIVE ARTICLES
        ===================================== */

        stories.forEach(
            function (story, index) {

                /*
                 * First story is featured,
                 * so archive starts at story 02.
                 */

                if (index === 0) {
                    return;
                }


                const number =
                    String(index + 1)
                    .padStart(2, "0");


                const article =
                    document.createElement("a");


                article.className =
                    "media-article";


                article.href =
                    story.url;


                article.target =
                    "_blank";


                article.rel =
                    "noopener noreferrer";


                article.innerHTML = `

                    <div class="article-number">
                        ${number}
                    </div>

                    <div class="article-preview">

                        <img
                            src="assets/images/media/${story.image}"
                            alt="${story.title}"
                        >

                    </div>

                    <div class="article-content">

                        <p class="article-publication">
                            ${story.publication}
                        </p>

                        <h2>
                            ${story.title}
                        </h2>

                        <p class="article-date">
                            ${story.date}
                        </p>

                    </div>

                    <span class="article-arrow">
                        ↗
                    </span>

                `;


                archive.appendChild(article);

            }
        );


        /* =====================================
           ALL STORIES
        ===================================== */

        const articles =
            Array.from(
                document.querySelectorAll(
                    ".media-article"
                )
            );


        const allStories = [
            featured,
            ...articles
        ];


        let ticking = false;


        /* =====================================
           SET ACTIVE STATES
        ===================================== */

        function setStates(activeIndex) {


            /* FEATURED */

            featured.classList.toggle(
                "is-past",
                activeIndex > 0
            );


            /* ARCHIVE */

            articles.forEach(
                function (article, i) {

                    const storyIndex =
                        i + 1;


                    article.classList.remove(
                        "is-active",
                        "is-past",
                        "is-next"
                    );


                    if (
                        storyIndex ===
                        activeIndex
                    ) {

                        article.classList.add(
                            "is-active"
                        );

                    }

                    else if (
                        storyIndex <
                        activeIndex
                    ) {

                        article.classList.add(
                            "is-past"
                        );

                    }

                    else {

                        article.classList.add(
                            "is-next"
                        );

                    }

                }
            );

        }


        /* =====================================
           FIND STORY CLOSEST TO SCREEN CENTER
        ===================================== */

        function updateStories() {

            const center =
                window.innerHeight * 0.5;


            let closest =
                0;

            let distance =
                Infinity;


            allStories.forEach(
                function (story, index) {

                    const rect =
                        story.getBoundingClientRect();


                    const storyCenter =
                        rect.top +
                        rect.height / 2;


                    const difference =
                        Math.abs(
                            storyCenter -
                            center
                        );


                    if (
                        difference <
                        distance
                    ) {

                        distance =
                            difference;

                        closest =
                            index;

                    }

                }
            );


            setStates(closest);

        }


        /* =====================================
           SCROLL
        ===================================== */

        window.addEventListener(
            "scroll",
            function () {

                if (ticking) {
                    return;
                }


                window.requestAnimationFrame(
                    function () {

                        updateStories();

                        ticking = false;

                    }
                );


                ticking = true;

            },
            {
                passive: true
            }
        );


        /* =====================================
           INITIAL STATE
        ===================================== */

        setStates(0);


        setTimeout(
            updateStories,
            100
        );

    }
);