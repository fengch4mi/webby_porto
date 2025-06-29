// Mobile menu toggle with sliding animation and overlay
function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('mobileOverlay');

  if (menu.classList.contains('translate-x-full')) {
    // Open menu
    menu.classList.remove('translate-x-full');
    menu.classList.add('translate-x-0');
    overlay.classList.remove('hidden');
  } else {
    // Close menu
    menu.classList.remove('translate-x-0');
    menu.classList.add('translate-x-full');
    overlay.classList.add('hidden');
  }
}

// Simple accordion functionality
function toggleAccordion(id) {
  const content = document.getElementById(id);
  const allContents = document.querySelectorAll('.accordion-content');

  // Close all other accordion items
  allContents.forEach(item => {
    if (item.id !== id) {
      item.classList.add('hidden');
    }
  });

  // Toggle current item
  content.classList.toggle('hidden');
}

(function ($) {

  "use strict";

  // document ready
  $(document).ready(function () {

    var swiper = new Swiper(".testimonial-swiper", {
      slidesPerView: 1,
      loop: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    window.addEventListener("load", (event) => {
      //isotope
      $('.isotope-container').isotope({
        // options
        itemSelector: '.item',
        layoutMode: 'masonry',
      });



      // Initialize Isotope
      var $container = $('.isotope-container').isotope({
        // options
        itemSelector: '.item',
        layoutMode: 'masonry',
      });

      $(document).ready(function () {
        //active button
        $('.filter-button').click(function () {
          $('.filter-button').removeClass('active');
          $(this).addClass('active');
        });
      });

      // Filter items on button click
      $('.filter-button').click(function () {
        var filterValue = $(this).attr('data-filter');
        if (filterValue === '*') {
          // Show all items
          $container.isotope({ filter: '*' });
        } else {
          // Show filtered items
          $container.isotope({ filter: filterValue });
        }
      });

    });

  }); // End of a document

})(jQuery);