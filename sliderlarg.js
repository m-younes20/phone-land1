
let sliderItems = $(".sliders-larg .slide");
$(".sliders-larg .slide").each(function () {
   $(".sliders-larg .pageitem").append("<li></li>");

});

function showSliderWithJQ() {
   $(".sliders-larg .slide").removeClass("active");
   $(".sliders-larg .pageitem li").removeClass("active");
   $(".sliders-larg .slide").eq(sliderIndex).addClass("active")
   $(".sliders-larg .pageitem li").eq(sliderIndex).addClass("active")
}
showSliderWithJQ();

$(".sliders-larg i.fa-arrow-left").click(function () {
   sliderIndex++;
   if (sliderIndex > sliderItems.length - 1)
      sliderIndex = 0;
   showSliderWithJQ();
});

$(".sliders-larg i.fa-arrow-right").click(function () {
   sliderIndex--;
   if (sliderIndex < 0)
      sliderIndex = sliderItems.length - 1;
   showSliderWithJQ();
});

