document.addEventListener("DOMContentLoaded", function () {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // Show the button when scrolling 400px down
    window.onscroll = function () {
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    };

    // Click event to smoothly scroll to the top
    scrollToTopBtn.addEventListener("click", function () {
        var currentPosition = window.scrollY || document.documentElement.scrollTop;
        var targetPosition = 0;
        var distance = currentPosition - targetPosition;
        var duration = 500; // Duration of the scroll in ms
        var startTime = null;

        // Smooth scroll function using requestAnimationFrame
        function scrollStep(timestamp) {
            if (!startTime) startTime = timestamp;
            var progress = timestamp - startTime;
            var percentage = Math.min(progress / duration, 1);
            window.scrollTo(0, currentPosition - distance * percentage);

            if (progress < duration) {
                requestAnimationFrame(scrollStep);
            }
        }
        requestAnimationFrame(scrollStep);
    });
});