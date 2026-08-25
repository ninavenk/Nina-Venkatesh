document.addEventListener("DOMContentLoaded", function () {

    const gallery = document.getElementById("gallery-grid");

    if (!gallery) {
        return;
    }


    /* =========================================
       ADD YOUR PHOTOS HERE
    ========================================= */

    const images = [
        "1.webp",
        "2.webp",
        "3.webp",
        "4.webp",
        "5.webp",
        "6.webp",
        "7.webp",
        "8.webp",
        "9.webp",
        "10.webp",
        "11.webp",
        "12.webp",
        "13.webp",
        "14.webp",
        "15.webp",
        "16.webp",
        "17.webp",
        "18.webp",
        "19.webp",
        "20.webp",
        "21.webp",
        "22.webp",
        "23.webp",
        "24.webp",
        "25.webp",
        "26.webp",
        "27.webp",
        "28.webp",
        "29.webp",
        "30.webp",
        "31.webp",
        "32.webp",
        "33.webp",
    ];


    /* =========================================
       CREATE GALLERY
    ========================================= */

    images.forEach(function (image, index) {

        const item = document.createElement("figure");

        item.className = "gallery-item";

        item.innerHTML = `
            <img
                src="assets/images/gallery/${image}"
                alt="Nina Venkatesh"
            >

            <figcaption>
                ${String(index + 1).padStart(2, "0")}
            </figcaption>
        `;

        gallery.appendChild(item);

    });


    /* =========================================
       LIGHTBOX
    ========================================= */

    const lightbox =
        document.getElementById("lightbox");

    const lightboxImage =
        document.getElementById("lightboxImage");

    const lightboxCounter =
        document.getElementById("lightboxCounter");

    const closeButton =
        document.getElementById("lightboxClose");

    const prevButton =
        document.getElementById("lightboxPrev");

    const nextButton =
        document.getElementById("lightboxNext");


    let currentIndex = 0;


    function showImage(index) {

        currentIndex =
            (index + images.length) % images.length;

        lightboxImage.src =
            "assets/images/gallery/" +
            images[currentIndex];

        lightboxCounter.textContent =
            String(currentIndex + 1).padStart(2, "0") +
            " / " +
            String(images.length).padStart(2, "0");
    }


    function openLightbox(index) {

        showImage(index);

        lightbox.classList.add("active");

        document.body.classList.add("lightbox-open");
    }


    function closeLightbox() {

        lightbox.classList.remove("active");

        document.body.classList.remove("lightbox-open");
    }


    /* OPEN IMAGE */

    gallery.addEventListener("click", function (event) {

        const item =
            event.target.closest(".gallery-item");

        if (!item) {
            return;
        }

        const items =
            Array.from(
                gallery.querySelectorAll(".gallery-item")
            );

        const index =
            items.indexOf(item);

        openLightbox(index);

    });


    /* CLOSE */

    closeButton.addEventListener(
        "click",
        closeLightbox
    );


    /* PREVIOUS */

    prevButton.addEventListener(
        "click",
        function () {

            showImage(currentIndex - 1);

        }
    );


    /* NEXT */

    nextButton.addEventListener(
        "click",
        function () {

            showImage(currentIndex + 1);

        }
    );


    /* KEYBOARD */

    document.addEventListener(
        "keydown",
        function (event) {

            if (!lightbox.classList.contains("active")) {
                return;
            }

            if (event.key === "Escape") {
                closeLightbox();
            }

            if (event.key === "ArrowLeft") {
                showImage(currentIndex - 1);
            }

            if (event.key === "ArrowRight") {
                showImage(currentIndex + 1);
            }

        }
    );

});