'use strict';

(function () {

  var currentSlideFeedbackSlider;
  var hangFlexslider = function () {
    $(document).ready(function() {
      $('.landing_slider').flexslider({
        selector: ".landing_slider_container > li",
        animation: "slide",
        slideshow: false,
        smoothHeight: true,
        keyboard: true,
        prevText: "",
        nextText: "",
        itemWidth: 140,
        itemMargin: 60,
        minItems: 1,
        maxItems: 5,
        controlNav: false,
        directionNav: true,
        touch: true,
        move: 1,
        animationLoop: false,
        animationSpeed: 900,
        keyboard: false,
        before: function(slider) {
          console.log('Before' + '   ' + slider.currentSlide + ' ' + slider);
          console.log(slider);
          slider.limit = 1200;
          slider.last = slider.count - 4;
        }
      });
      $('.feedback_slider').flexslider({
        selector: ".feedback_slider_container > li",
        controlsContainer: ".feedback_flipping",
        animation: "slide",
        slideshow: false,
        smoothHeight: true,
        keyboard: true,
        prevText: "Пред.",
        nextText: "След.",
        itemWidth: 1610,
        itemMargin: 50,
        minItems: 1,
        maxItems: 1,
        controlNav: false,
        directionNav: true,
        touch: true,
        move: 1,
        animationLoop: false,
        animationSpeed: 900,
        keyboard: false,
        start: function(slider) {
          $('.feedback_slider_item_total').text(slider.count);
          $(slider.slides[slider.currentSlide]).find('.feedback_slider_text').niceScroll({
            cursorborder: "none",
            cursoropacitymin: "1",
            cursorwidth: "3px",
            scrollspeed: "30",
            mousescrollstep: "10",
            background: "#E1E1E1",
            cursorminheight: "97"
          });
          currentSlideFeedbackSlider = slider.slides[slider.currentSlide];
        },
        before: function(slider) {
          $(slider.slides).find('.feedback_slider_text').getNiceScroll().remove();
          currentSlideFeedbackSlider = slider.slides[slider.currentSlide];
        },
        after: function(slider) {
          $('.feedback_slider_item_index').text(slider.currentSlide + 1);
          $(slider.slides).find('.feedback_slider_text').getNiceScroll().remove();
          $(slider.slides[slider.currentSlide]).find('.feedback_slider_text').niceScroll({
            cursorborder: "none",
            cursoropacitymin: "1",
            cursorwidth: "3px",
            scrollspeed: "30",
            mousescrollstep: "10",
            background: "#E1E1E1",
            cursorminheight: "97"
          });
          currentSlideFeedbackSlider = slider.slides[slider.currentSlide];
        }
      });
      $('.store_slider').flexslider({
        selector: ".store_slider_container > li",
        controlsContainer: ".store_flipping",
        animation: "slide",
        easing: "swing",
        slideshow: false,
        startAt: 1,
        smoothHeight: true,
        keyboard: true,
        prevText: "Пред.",
        nextText: "След.",
        itemWidth: 810,
        itemMargin: 0,
        minItems: 1,
        maxItems: 3,
        move: 1,
        controlNav: false,
        directionNav: true,
        touch: true,
        animationLoop: false,
        animationSpeed: 900,
        keyboard: false,
        start: function(slider) {
          $('.store_slider_item_total').text(slider.count);
          $('.store_slider_item_index').text(slider.currentSlide + 1);
          $(slider.slides[slider.currentSlide]).addClass('store_active_item');
        },
        before: function(slider) {
          slider.last = slider.count - 1;
          if (slider.direction === "next") {
            $(slider.slides).removeClass('store_active_item');
            $(slider.slides[slider.currentSlide + 1]).addClass('store_active_item');
          }
          if (slider.direction === "prev") {
            $(slider.slides).removeClass('store_active_item');
            $(slider.slides[slider.currentSlide - 1]).addClass('store_active_item');
          }
        },
        after: function(slider) {
          $('.store_slider_item_index').text(slider.currentSlide + 1);
        }
      });
      $('.online_slider').flexslider({
        selector: ".online_slider_container > li",
        controlsContainer: ".online_flipping",
        animation: "slide",
        slideshow: false,
        smoothHeight: true,
        keyboard: true,
        prevText: "Пред.",
        nextText: "След.",
        itemWidth: 720,
        itemMargin: 0,
        minItems: 0,
        maxItems: 3,
        move: 1,
        controlNav: false,
        directionNav: true,
        touch: true,
        animationLoop: false,
        animationSpeed: 900,
        keyboard: false,
        start: function(slider) {
          $('.online_slider_item_total').text(slider.count);
          $('.online_slider_item_index').text(slider.currentSlide + 1);
          $(slider.slides[slider.currentSlide]).addClass('online_active_item');
          $(slider.slides[slider.currentSlide + 1]).addClass('online_slider_m_first');
          $(slider.slides[slider.currentSlide + 2]).addClass('online_slider_m_second');
        },
        before: function(slider) {
          if (slider.direction === "next") {
            $(slider.slides).removeClass('online_slider_m_first online_slider_m_second online_active_item');
            $(slider.slides[slider.currentSlide + 2]).addClass('online_slider_m_first');
            $(slider.slides[slider.currentSlide + 3]).addClass('online_slider_m_second');
            $(slider.slides[slider.currentSlide + 1]).addClass('online_active_item');
          }
          if (slider.direction === "prev") {
            $(slider.slides).removeClass('online_slider_m_first online_slider_m_second online_active_item');
            $(slider.slides[slider.currentSlide + 1]).addClass('online_slider_m_second');
            $(slider.slides[slider.currentSlide]).addClass('online_slider_m_first');
            $(slider.slides[slider.currentSlide - 1]).addClass('online_active_item');
          }
          slider.last = slider.count - 1;
        },
        after: function(slider) {
          $('.online_slider_item_index').text(slider.currentSlide + 1);
        }
      });
      $('.program_page_aside_slider').flexslider({
        selector: ".program_page_aside_slider_container > li",
        controlsContainer: ".program_page_aside_slider_flipping",
        animation: "slide",
        slideshow: false,
        smoothHeight: true,
        keyboard: true,
        prevText: "",
        nextText: "",
        itemWidth: 325,
        itemMargin: 5,
        minItems: 1,
        maxItems: 1,
        move: 1,
        controlNav: false,
        directionNav: true,
        touch: true,
        animationLoop: false,
        animationSpeed: 900,
        keyboard: false,
      });
    });
  };

  var scrollBarСustomization = function () {
    $(document).ready(function() {
      $('body').niceScroll({
        cursorborder: "none",
        scrollspeed: "30",
        mousescrollstep: "20",
        horizrailenabled: false
      });
      $('window').trigger('scroll');
      $('body').trigger('scroll');
    });
  };

  var getTimer = function () {
    jQuery(document).ready(function($) {

      $("[data-timer]").each(function () {
        var $this = $(this);
        var timerDescription = $this.prop('title');

        if (timerDescription != false) {
          timerDescription = timerDescription+': ';
        };

        var dateArr = $this.data("timer").split(",");

        dateArr = $.map(dateArr, function (elem) {
          return parseInt(elem);
        });

        dateArr[1]--;

        var date = new Date(dateArr[0], dateArr[1], dateArr[2], dateArr[3], dateArr[4], dateArr[5]);

        $this.countdown({
          until: date,
          layout:'<ul class="timer_list">{y<}<li class="timer_item">{yn} {yl}</li>{y>}{o<}<li class="timer_item">{on} {ol}</li>{o>}{d<}' +
            ' <li class="timer_item"> <span class="value"> {d10}{d1}</span> </li>{d>}{h<}' +
            ' <li class="timer_item"> <span class="value">:{h10}{h1}</span> </li>{h>}{m<}' +
            ' <li class="timer_item"> <span class="value">:{m10}{m1}</span> </li>{m>}{s<}' +
            ' <li class="timer_item"> <span class="value">:{s10}{s1}</span> </li>{s>}</ul>',
          padZeroes: true,
          description: timerDescription
        }, $.countdown.regional['ru']);

      });
    });
  };

  $(document).ready(function(){
    $("#jquery_jplayer_1").jPlayer({
      ready: function () {
        $(this).jPlayer("setMedia", {
          mp3: "resources/Linkin_Park_-_Numb.mp3",
          oga: ""
        });
      },
      swfPath: "/js",
      supplied: "mp3,oga"
    });
  });

  var showHeaderMenu = function () {
    $('.header_navigation_container').hover(function(evt) {
      $(evt.currentTarget).parent('.header_navigation_item').find('.header_navigation_link').addClass('active');
    }, function(evt) {
      $(evt.currentTarget).parent('.header_navigation_item').find('.header_navigation_link').removeClass('active');
    });
    $('.header_navigation_drop_down').click(function(evt) {
      evt.preventDefault();
    });
  };

  var showLanguageMenu = function () {
    $('.header_language_switch').click(function(evt) {
      evt.preventDefault();
      $('.header_language').toggleClass('active');
    });
    $('.footer_language_switch').click(function(evt) {
      evt.preventDefault();
      $('.footer_language').toggleClass('active');
    });
    $(document).mouseup(function(evt) {
      var header = $('.header_language_switch');
      var footer = $('.footer_language_switch');
      if (!header.is(evt.target) && header.has(evt.target).length === 0) {
       $('.header_language').removeClass('active');
      }
      if (!footer.is(evt.target) && footer.has(evt.target).length === 0) {
       $('.footer_language').removeClass('active');
      }
    });
  };

  var storeShowCard = function () {
    $('.store_slider_overlay_button').click(function(evt) {
      evt.preventDefault();
      $(evt.currentTarget).parents('.store_slider_item').find('.store_slider_image').addClass('display_none');
      $(evt.currentTarget).parents('.store_slider_item').find('.store_slider_overlay').addClass('display_none');
      $(evt.currentTarget).parents('.store_slider_item').find('.store_slider_content').addClass('display_flex');
    });
    $('.store_slider_content').mouseleave(function(evt) {
      evt.preventDefault;
      $(evt.currentTarget).parents('.store_slider_item').find('.store_slider_image').removeClass('display_none');
      $(evt.currentTarget).parents('.store_slider_item').find('.store_slider_overlay').removeClass('display_none');
      $(evt.currentTarget).parents('.store_slider_item').find('.store_slider_content').removeClass('display_flex');
    });
  };

  var showAutocompleteHint = function() {
    var availableTags = [
      "Сенсомоторный ритм",
      "Настройка на ритмы Солнечной системы",
      "Планетарные биоритмы Земли"
    ];
    $( "#catalog_search" ).autocomplete({
      source: availableTags
    });
  };

  var hangSelect2 = function () {
    $(document).ready(function() {
      $('.select').select2();
    });
  };

  var changeActiveCatalog = function () {
    $('.catalog_sorting_graduation').click(function(evt) {
      evt.preventDefault();
      $('.catalog_sorting_graduation_increase').toggleClass('active');
      $('.catalog_sorting_graduation_reduction').toggleClass('active');
    });
    $('.catalog_apportionment').click(function(evt) {
      evt.preventDefault();
      $('.catalog_apportionment_list').toggleClass('active');
      $('.catalog_apportionment_tile').toggleClass('active');
    });
    $('.catalog_category_link').click(function(evt) {
      evt.preventDefault();
      $(evt.currentTarget).parents('.catalog_category_list').find('.catalog_category_link').removeClass('active');
      $(evt.currentTarget).addClass('active');
    });
    $('.catalog_card_like').click(function(evt) {
      evt.preventDefault();
      $(evt.currentTarget).toggleClass('active');
    });
    $('.catalog_aside_title_frequency').click(function(evt) {
      evt.preventDefault();
      $(evt.currentTarget).parent('.catalog_aside_container').toggleClass('enable');
      $('.catalog_aside_frequency_container').slideToggle("slow");
    });
  };

  var changeActiveProgramPage = function () {
    $('.program_card_like').click(function(evt) {
      evt.preventDefault();
      $(evt.currentTarget).toggleClass('active');
    });
    $('.program_info_nav_link').click(function(evt) {
      evt.preventDefault();
      $('.feedback_slider').find('.feedback_slider_text').getNiceScroll().remove();

      $(evt.currentTarget).parents('.program_info_nav').find('.program_info_nav_link').removeClass('active');
      $('.program_info_main_unit').removeClass('active');
      $(evt.currentTarget).addClass('active');
      if($(evt.currentTarget).hasClass('program_info_specification_link')) {
        $('.program_info_specification').addClass('active');
      };
      if($(evt.currentTarget).hasClass('program_info_feature_link')) {
        $('.program_info_feature').addClass('active');
      };
      if($(evt.currentTarget).hasClass('program_info_meditate_link')) {
        $('.program_info_meditate').addClass('active');
      };
      $(currentSlideFeedbackSlider).find('.feedback_slider_text').niceScroll({
        cursorborder: "none",
        cursoropacitymin: "1",
        cursorwidth: "3px",
        scrollspeed: "30",
        mousescrollstep: "10",
        background: "#E1E1E1",
        cursorminheight: "97"
      });
    });
  };



  // var rellax = new Rellax('.parallax');


  hangFlexslider();
  scrollBarСustomization();
  getTimer();
  showHeaderMenu();
  showLanguageMenu();
  storeShowCard();
  showAutocompleteHint();
  hangSelect2();
  changeActiveCatalog();
  changeActiveProgramPage();

}());
