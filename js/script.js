$(document).ready(function () {

    //CHANGE HEADER BG COLOR
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#header').addClass('scrolled');
        } else {
            $('#header').removeClass('scrolled');
        }
    });

    //MOBILE MNNU
    $('.mobile-menu-btn').click(function () {
        $('.menu-area').addClass("open-menu");
    });
    $('.close-btn').click(function () {
        $('.menu-area').removeClass("open-menu");
    });





    //PRODUCTION PROCESS AREA ANIMATION
    // Variable to store the timeout ID for delaying the class addition
    var completeTimeout;

    $(window).on('scroll', function () {
        // Get the top and height of the process container
        var processContainer = $('.process-container');
        var containerTop = processContainer.offset().top;
        var containerHeight = processContainer.outerHeight();
        var containerBottom = containerTop + containerHeight;

        // Get the current scroll position
        var scrollTop = $(window).scrollTop();
        var windowHeight = $(window).height();

        // Offset to complete the progress 200px before the bottom of the screen
        var stopBeforeEnd = 300;

        // Calculate the adjusted container height for the progress to finish early
        var adjustedHeight = containerHeight - stopBeforeEnd;

        // Check if the user has scrolled into the production process section
        if (scrollTop + windowHeight > containerTop && scrollTop < containerBottom - stopBeforeEnd) {
            // Calculate the percentage of scroll within the container
            var progress = ((scrollTop + windowHeight - containerTop) / (adjustedHeight + windowHeight)) * 100;

            // Set the height of the progress line based on the scroll progress
            $('.progress-line').css('height', progress + '%');

            // Activate the process steps based on scroll position
            $('.process-item').each(function () {
                var itemTop = $(this).offset().top;
                var itemHeight = $(this).outerHeight();
                var itemBottom = itemTop + itemHeight;

                if (scrollTop + windowHeight > itemTop + itemHeight / 4 && scrollTop < itemBottom) {
                    $(this).addClass('active');
                } else {
                    $(this).removeClass('active');
                }
            });

            // Clear any previously set timeout (in case of scrolling back up)
            clearTimeout(completeTimeout);

            // Remove the class from progress-container instantly when progress is less than 100%
            $('.progress-container').removeClass('completed');

        } else if (scrollTop + windowHeight >= containerBottom - stopBeforeEnd) {
            // If scrolled past the threshold (200px before the end), set the progress to 100%
            $('.progress-line').css('height', '100%');

            // Make sure the last step stays active
            $('.process-item').last().addClass('active');

            // Set a timeout to add the class after a 300ms delay
            completeTimeout = setTimeout(function () {
                $('.progress-container').addClass('completed');
            }, 100);
        }
    });





});