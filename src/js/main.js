
$('.moreDetailsButton').click(function(){
    $(".plusIcon").addClass("buttonClicked");
    setTimeout(function() {
        $(".plusIcon").removeClass("buttonClicked");
        $(".modal").removeClass("zindex0");
        $(".modal").addClass("zindex1");
        $(".modal").addClass("modalOpen");
        $(".plusIcon").removeClass("fadeIn");
        $(".plusIcon").addClass("fadeOut");
        $(".title").removeClass("fadeInRight");
        $(".title").addClass("fadeOutLeft");
        $(".buttonText").removeClass("fadeInRight");
        $(".buttonText").addClass("fadeOutLeft");
        $(".modalContent").removeClass("fadeOutLeft");
        $(".modalContent").addClass("fadeInRight1");
    },  300);
});

$('.exit').click(function(){
    $(".modalContent").removeClass("fadeInRight1");
    $(".modalContent").addClass("fadeOutLeft");
    setTimeout(function() {
        $(".modal").removeClass("modalOpen");
        $(".title").removeClass("fadeOutLeft");
        $(".title").addClass("fadeInRight");
        $(".buttonText").removeClass("fadeOutLeft");
        $(".buttonText").addClass("fadeInRight");
        setTimeout(function() {
            $(".modal").removeClass("zindex1");
            $(".modal").addClass("zindex0");
            $(".plusIcon").removeClass("fadeOut");
            $(".plusIcon").addClass("fadeIn");
            },  300);
    },  100);
});