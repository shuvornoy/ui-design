$(document).ready(function () {
  $(".person-slider").slick({
    slidesToShow: 5,
    asNavFor: ".text-slider",
    centerMode: true,
    centerPadding: "0px",
    arrows: false,
  });
  $(".text-slider").slick({
    asNavFor: ".person-slider",
    focusOnSelect: true,
    prevArrow:
      '<span class="priv_arrow"><i class="fa-solid fa-angle-left"></i></span>',
    nextArrow:
      '<span class="next_arrow"><i class="fa-solid fa-angle-right"></i></span>',
  });
});
