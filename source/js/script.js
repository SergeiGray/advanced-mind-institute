'use strict';

(function () {

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
        move: 1
      });
      $('.feedback_slider').flexslider({
        selector: ".feedback_slider_container > li",
        animation: "slide",
        slideshow: false,
        smoothHeight: true,
        keyboard: true,
        prevText: "",
        nextText: "",
        itemWidth: 1610,
        itemMargin: 0,
        minItems: 1,
        maxItems: 1,
        controlNav: false,
        directionNav: true,
        touch: true,
        move: 1,
        start: function(slider) {
          $('.feedback_slider_item_total').text(slider.count);
        },
        after: function(slider) {
          $('.feedback_slider_item_index').text(slider.currentSlide + 1);
        }
      });
      $('.store_slider').flexslider({
        selector: ".store_slider_container > li",
        animation: "slide",
        slideshow: false,
        startAt: 1,
        smoothHeight: true,
        keyboard: true,
        prevText: "",
        nextText: "",
        itemWidth: 810,
        itemMargin: 0,
        minItems: 1,
        maxItems: 3,
        move: 1,
        controlNav: false,
        directionNav: true,
        touch: true,
        start: function(slider) {
          $('.store_slider_item_total').text(slider.count - 1);
          $(slider.slides[slider.currentSlide]).addClass('store_active_item');
        },
        after: function(slider) {
          $('.store_slider_item_index').text(slider.currentSlide + 1);
          $(slider.slides).removeClass('store_active_item');
          $(slider.slides[slider.currentSlide]).addClass('store_active_item');
        }
      });
      $('.online_slider').flexslider({
        selector: ".online_slider_container > li",
        animation: "slide",
        slideshow: false,
        smoothHeight: true,
        keyboard: true,
        prevText: "",
        nextText: "",
        itemWidth: 720,
        itemMargin: 0,
        minItems: 1,
        maxItems: 3,
        move: 1,
        controlNav: false,
        directionNav: true,
        touch: true,
        start: function(slider) {
          $('.online_slider_item_total').text(slider.count - 1);
          $(slider.slides[slider.currentSlide]).addClass('online_active_item');
          $(slider.slides[slider.currentSlide + 1]).addClass('online_slider_m_first');
          $(slider.slides[slider.currentSlide + 2]).addClass('online_slider_m_second');
        },
        after: function(slider) {
          $('.online_slider_item_index').text(slider.currentSlide + 1);
          $(slider.slides).removeClass('online_slider_m_first online_slider_m_second online_active_item');
          $(slider.slides[slider.currentSlide]).addClass('online_active_item');
          $(slider.slides[slider.currentSlide + 1]).addClass('online_slider_m_first');
          $(slider.slides[slider.currentSlide + 2]).addClass('online_slider_m_second');

        }
      });
    });
  };

  var scrollBarСustomization = function () {
    $(document).ready(function() {
      $('.feedback_slider_text').niceScroll({
        cursorborder: "none",
        cursoropacitymin: "0",
        cursorwidth: "4px",
        scrollspeed: "30",
        mousescrollstep: "10",
        background: "#b1b1b1",
        cursorminheight: "97"
      });
    });

    $('.feedback_flipping .flex-next, .feedback_flipping .flex-prev').click(function(evt) {
        $('.feedback_slider_text').getNiceScroll().remove();
        $('.feedback_slider_text').niceScroll({
          cursorborder: "none",
          cursoropacitymin: "0",
          cursorwidth: "4px",
          scrollspeed: "30",
          mousescrollstep: "10",
          background: "#b1b1b1",
          cursorminheight: "97"
        });
    });
  };

  var rellaxFirst = new Rellax('.parallax_first_container');
  var rellaxSecond = new Rellax('.parallax_second_container');

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
    $(document).mouseup(function(evt) {
      var div = $('.header_language_switch');
      if (!div.is(evt.target) && div.has(evt.target).length === 0) {
       $('.header_language').removeClass('active');
      }
    });
  };

  hangFlexslider();
  scrollBarСustomization();
  getTimer();
  showHeaderMenu();
  showLanguageMenu();

}());
