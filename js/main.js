$(document).ready(function(){

var multipleCancelButton = new Choices('#choices-multiple-remove-button', {
removeItemButton: true,
maxItemCount:10,
searchResultLimit:10,
renderChoiceLimit:10
});


});

(function($) {
    "use strict";


    //service popoup
    $(".filter_content .card").click(function() {
        $(".full_page_overlay, .service_providers").addClass("on");
        $("body").addClass("fix");
    });

    $(".full_page_overlay, .service_providers .close_btn").click(function() {
        $("body").removeClass("fix");
        $(".full_page_overlay, .service_providers").removeClass("on");
        $(".c_s1, .c_s2, .c_s3, .c_s4, .c_s5").removeClass("select");
    });




    $(".service_1").click(function() {
        $(".s2, .s3").removeClass("on");
        $(".s1").addClass("on");
    });

    $(".service_2").click(function() {
        $(".s1, .s3").removeClass("on");
        $(".s2").addClass("on");
    });

    $(".service_3").click(function() {
        $(".s1, .s2").removeClass("on");
        $(".s3").addClass("on");
    });




    $(".provider_1").click(function() {

        $(".c_s1").addClass("select");
        $(".c_s2, .c_s3, .c_s4, .c_s5").removeClass("select");
    });
    $(".provider_2").click(function() {

        $(".c_s2").addClass("select");
        $(".c_s1, .c_s3, .c_s4, .c_s5").removeClass("select");
    });
    $(".provider_3").click(function() {

        $(".c_s3").addClass("select");
        $(".c_s1, .c_s2, .c_s4, .c_s5").removeClass("select");
    });
    $(".provider_4").click(function() {

        $(".c_s4").addClass("select");
        $(".c_s1, .c_s2, .c_s3, .c_s5").removeClass("select");
    });
    $(".provider_5").click(function() {

        $(".c_s5").addClass("select");
        $(".c_s1, .c_s2, .c_s3, .c_s4").removeClass("select");
    });
    //service popoup



}(jQuery));









// external js: isotope.pkgd.js

// init Isotope
var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows'
});
// filter functions
var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
        var number = $(this).find('.number').text();
        return parseInt(number, 10) > 50;
    },
    // show if name ends with -ium
    ium: function() {
        var name = $(this).find('.name').text();
        return name.match(/ium$/);
    }
};
// bind filter button click
$('.filters-button-group').on('click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[filterValue] || filterValue;
    $grid.isotope({
        filter: filterValue
    });
});
// change is-checked class on buttons
$('.button-group').each(function(i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'button', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
    });
});


// navbar
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.getElementById('navbar_top').classList.add('fixed-top');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('navbar_top').classList.remove('fixed-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });
});


// owl carousel
$('.features').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplaySpeed: 5000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:4,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
})
// end owl carousel
// testimonial slider
  $(document).ready(function(){
        $('#testimonial-slider').owlCarousel({
            items:1,
            itemsDesktop:[1000,1],
            itemsDesktopSmall:[979,1],
            itemsTablet:[768,1],
            pagination: false,
            navigation:true,
            navigationText:["",""],
            slideSpeed:1000,
            autoPlay:true
        });
    });



// counterUpjs
$(document).ready(function() {

  var counters = $(".count");
  var countersQuantity = counters.length;
  var counter = [];

  for (i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
  }

  var count = function(start, value, id) {
    var localStart = start;
    setInterval(function() {
      if (localStart < value) {
        localStart++;
        counters[id].innerHTML = localStart;
      }
    }, 40);
  }

  for (j = 0; j < countersQuantity; j++) {
    count(0, counter[j], j);
  }
});


var app = {
    settings: {
        container: $('.calendar'),
        calendar: $('.front'),
        days: $('.weeks span'),
        form: $('.back'),
        input: $('.back input'),
        buttons: $('.back button')
    },

    init: function() {
        instance = this;
        settings = this.settings;
        this.bindUIActions();
    },

    swap: function(currentSide, desiredSide) {
        settings.container.toggleClass('flip');

    currentSide.fadeOut(900);
    currentSide.hide();
    desiredSide.show();

    },

    bindUIActions: function() {
        settings.days.on('click', function(){
            instance.swap(settings.calendar, settings.form);
            settings.input.focus();
        });

        settings.buttons.on('click', function(){
            instance.swap(settings.form, settings.calendar);
        });
    }
}

app.init();