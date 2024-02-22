$(".form-input.search input").bind("input propertychange", function (event) {
  var inputVal = event.target.value;
  var formParent = $(event.target).closest(".form-input.search");
  console.log($(formParent).find(".icon"));
  if (inputVal.length > 0) {
    $(formParent).find(".icon").show();
  } else {
    $(formParent).find(".icon").hide();
  }
});

$(".form-input.search .icon").on("click", (event) => {
  $(event.currentTarget)
    .closest(".form-input.search")
    .find("input")
    .val("")
    .trigger("input");
});

$(".form-input .icon").on("click", (event) => {
  $(event.currentTarget).closest(".form-input").find("input").focus();
});

$(".form-input.select-search input").on("focus", (event) => {
  ($(event.currentTarget).closest(".form-input.select-search").find(".search-list").css("display", "block"));
})
$(".form-input.select-search input").on("blur", (event) => {
  ($(event.currentTarget).closest(".form-input.select-search").find(".search-list").css("display", "none"));
})