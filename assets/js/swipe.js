/* =========================================================
   SCROLL DOWN INDICATOR
   Appears on page load.
   Disappears only after the user actually starts scrolling.
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const swipeIndicator = document.querySelector(".mobile-swipe");

    if (!swipeIndicator) {
        return;
    }

    let dismissed = false;

    // Always start fresh when the homepage loads.
    swipeIndicator.classList.remove("swipe-dismissed");

    function dismissSwipe() {

        if (dismissed) {
            return;
        }

        dismissed = true;

        swipeIndicator.classList.add("swipe-dismissed");

        window.removeEventListener(
            "scroll",
            dismissOnScroll
        );
    }

    function dismissOnScroll() {

        // Ignore tiny/browser restoration movements.
        if (window.scrollY > 20) {
            dismissSwipe();
        }
    }

    window.addEventListener(
        "scroll",
        dismissOnScroll,
        {
            passive: true
        }
    );

});