var mySlider = 0;
photoSlider();

function photoSlider() {
    var i;
    var photos = document.getElementsByClassName("mySlides");
    for (i = 0; i < photos.length; i++) {
       photos[i].style.display = "none";
    }
    mySlider++;
    if (mySlider > photos.length) {mySlider = 1;}
    photos[mySlider-1].style.display = "block";
    setTimeout(photoSlider, 6000);
}

$(function(){
    $('ul li a').on('click', function(){
        $(this).parent().addClass('current').siblings().removeClass('current');
        });
    });

$(function(){
    $(".menu-link").click(function(){
    $("#menu").toggleClass("active");
    $(".container").toggleClass("active");
            });
    });
