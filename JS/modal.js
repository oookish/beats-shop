$('.form').submit(e => {
  e.preventDefault();


  $.fancybox.open({
    src: "#modal",
    type: "inline"
  })
});