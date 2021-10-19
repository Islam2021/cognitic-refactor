/* ----------------------------------------------------------------------------
			Handling the new range slider
 ----------------------------------------------------------------------------------- */

setTimeout(() => {
  const rangeInputs = document.querySelectorAll('input[type="range"]');

  function handleInputChange(e) {
    let target = e.target;
    if (e.target.type !== "range") {
      target = document.getElementById("follower_num_slider");
    }
    const min = target.min;
    const max = target.max;
    const val = target.value;

    target.style.backgroundSize = ((val - min) * 100) / (max - min) + "% 100%";
  }
  rangeInputs.forEach((input) => {
    input.addEventListener("input", handleInputChange);
  });
}, 5000);

/* ----------------------------------------------------------------------------
                Handling the new timeline new workspaces
----------------------------------------------------------------------------------- */

setTimeout(() => {
  $(".add").on("click", function() {
    $(".add-more").toggleClass("show");
  });
}, 1000);

setTimeout(() => {
  $(".advancedSearch").on("click", function() {
    $(".advanced-search").toggleClass("show");
  });
}, 1000);

setTimeout(() => {
  /* ----------------------------------------------------------------------------
     Handling the new slider map
     ----------------------------------------------------------------------------------- */
  $(".owl-carousel").owlCarousel({
    loop: true,
    lazyLoad: true,
    autoplay: false,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
}, 6000);

/* ----------------------------------------------------------------------------
  Handling volumetric chart (show in chart button)
  ----------------------------------------------------------------------------------- */
$(document).on("click", ".volumetricSelectClick", function() {
  $(".volumetric-newSelects-dropdown").toggleClass("show");
});
// $(document).on("mouseleave", ".newSelects-dropdown", function() {
// 	$(".newSelects-dropdown").removeClass("show");
// });
