$(document).ready(function(){
    $('.carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: true
    });

    // Toggle reply section
    $(document).on('click', '.reply-btn', function() {
        $(this).siblings('.reply-section').toggle();
    });

    // Like button functionality
    $(document).on('click', '.like-btn', function() {
        var likeCount = $(this).next('span').text();
        likeCount = parseInt(likeCount) + 1;
        $(this).next('span').text(likeCount);
    });

    // Dislike button functionality
    $(document).on('click', '.dislike-btn', function() {
        var dislikeCount = $(this).next('span').text();
        dislikeCount = parseInt(dislikeCount) + 1;
        $(this).next('span').text(dislikeCount);
    });

    // Submit reply functionality
    $(document).on('click', '.submit-reply', function() {
        var replyText = $(this).siblings('textarea').val();
        if(replyText) {
            $(this).parent().hide();
            alert('Respuesta enviada: ' + replyText);
        } else {
            alert('Por favor, escribe una respuesta.');
        }
    });
});
