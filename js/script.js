$(document).ready(function() {

    //Video Popup
    $('.video-btn').click(function(){
        $('.video-popup').fadeIn();
        $('#iframeHolder').html('');
        var link = $(this).attr("link");
        $('#iframeHolder').html('<iframe src="'+link+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    });
    $('.close-video').click(function(){
        $('.video-popup').fadeOut();
        $('#iframeHolder').html('');
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#header').addClass('scrolled');
        } else {
            $('#header').removeClass('scrolled');
        }
    });
    $('.mobile-menu-btn').click(function(){
        $('.menu-area').addClass("open-menu");
    });
    $('.close-btn').click(function(){
        $('.menu-area').removeClass("open-menu");
    });


    // PARALLAX
    // const parallax = document.getElementById("parallax");
    //     // Parallax Effect for DIV 1
    //     window.addEventListener("scroll", function () {
    //     let offset = window.pageYOffset;
    //     parallax.style.backgroundPositionY = offset * 0.2 + "px";
    //     // DIV 1 background will move slower than other elements on scroll.
    // });

    // const grid = document.querySelector('.product-grid-content');

    // function addItems() {
    //     for (let i = 0; i < 3; i++) {
    //         const item = document.createElement('div');
    //         item.classList.add('grid-item');
    //         const img = document.createElement('img');
    //         img.src = `https://source.unsplash.com/random/${Math.floor(Math.random() * 100) + 200}x${Math.floor(Math.random() * 100) + 200}`;
    //         item.appendChild(img);
    //         grid.appendChild(item);
    //     }
    // }

    // // Load initial items
    // addItems();

    // // Optional: Load more items on scroll or button click
    // window.addEventListener('scroll', () => {
    //     if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
    //         addItems();
    //     }
    // });

    
    $(".testimonial-content").owlCarousel({
        loop: true,
        items: 3,
        margin: 30,
        dots: true,
        nav: false,
        mouseDrag: true,
        autoplay: false,
        autoplayTimeout: 4000,
        smartSpeed: 300
    });

    $('.product-img').on('click', function() {
        // Get images from data attribute
        const images = $(this).parent().data('images');
        
        // Get the product name dynamically
        const productName = $(this).siblings('.product-name').text();
    
        // Update the modal title with the product name
        $('#productModalLabel').text(productName);
    
        // Clear the gallery
        $('#thumbnails').empty();
    
        // Set the main image
        $('#mainImage').attr('src', images[0]);
    
        // Add thumbnails to the modal
        images.forEach(function(image, index) {
            const activeClass = index === 0 ? 'active-thumbnail' : ''; // Set active-thumbnail class for the first image
            $('#thumbnails').append(`
                <img src="${image}" class="img-fluid thumbnail-img ${activeClass}" alt="Thumbnail ${index + 1}" data-large="${image}">
            `);
        });
    
        // Show the modal
        $('#productModal').modal('show');
    });
    
    // Change the main image when clicking on a thumbnail
    $(document).on('click', '.thumbnail-img', function() {
        const largeImage = $(this).data('large');
        
        // Update the main image
        $('#mainImage').attr('src', largeImage);
        
        // Remove the 'active-thumbnail' class from all thumbnails
        $('.thumbnail-img').removeClass('active-thumbnail');
        
        // Add the 'active-thumbnail' class to the clicked thumbnail
        $(this).addClass('active-thumbnail');
    });
    


    
    



});