document.addEventListener('DOMContentLoaded', function() {
    // Initialize Swiper for Anime
    var swiperAnime = new Swiper('#anime-container .swiper-container', {
        slidesPerView: 6, // Number of slides visible at once
        spaceBetween: 10, // Space between slides
        slidesPerGroup: 4, // Number of slides to scroll at once
        centeredSlides: false,
        speed: 800,
        navigation: {
            nextEl: '#anime-container .custom-swiper-button-next',
            prevEl: '#anime-container .custom-swiper-button-prev',
        },
        pagination: {
            el: '#anime-container .custom-swiper-pagination',
            clickable: true,
        },
    });

    // Add dummy slides for Anime
    var swiperAnimeWrapper = document.querySelector('#anime-container .swiper-wrapper');
    for (var i = 0; i < 3; i++) {
        var dummyAnimeSlide = document.createElement('div');
        dummyAnimeSlide.className = 'swiper-slide dummy-slide';
        swiperAnimeWrapper.appendChild(dummyAnimeSlide);
    }

    // Update Swiper instance for Anime
    swiperAnime.update();

    // Initialize Swiper for Movies
    var swiperMovie = new Swiper('#movie-container .swiper-container', {
        slidesPerView: 6, // Number of slides visible at once
        spaceBetween: 10, // Space between slides
        slidesPerGroup: 4, // Number of slides to scroll at once
        centeredSlides: false,
        speed: 800, 
        navigation: {
            nextEl: '#movie-container .custom-swiper-button-next',
            prevEl: '#movie-container .custom-swiper-button-prev',
        },
        pagination: {
            el: '#movie-container .custom-swiper-pagination',
            clickable: true,
        },
    });

    // Add dummy slides for Movies
    var swiperMovieWrapper = document.querySelector('#movie-container .swiper-wrapper');
    for (var j = 0; j < 3; j++) {
        var dummyMovieSlide = document.createElement('div');
        dummyMovieSlide.className = 'swiper-slide dummy-slide';
        swiperMovieWrapper.appendChild(dummyMovieSlide);
    }

    // Update Swiper instance for Movies    
    swiperMovie.update();

    function appendCheckboxState(event) {
        var includeHentaiCheckbox = document.getElementById('include-hentai');
        var checkboxState = includeHentaiCheckbox.checked ? 'true' : 'false';
        
        // Find the form that is being submitted
        var form = event.target;

        // Create or update hidden input field
        var hiddenInput = form.querySelector('input[name="include_hentai"]');
        if (!hiddenInput) {
            hiddenInput = document.createElement('input');
            hiddenInput.type = 'hidden';
            hiddenInput.name = 'include_hentai';
            form.appendChild(hiddenInput);
        }
        hiddenInput.value = checkboxState;
    }

    // Add event listeners to all forms
    var forms = document.querySelectorAll('form');
    forms.forEach(function(form) {
        form.addEventListener('submit', appendCheckboxState);
    });

});
