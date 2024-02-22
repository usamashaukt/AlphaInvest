$(".sidebar-toggler-mobile").click(function () {
  $(".sidebar-toggler-mobile").toggleClass("sidebar-close");
  $(".sidebar").toggleClass("sidebar-close");
  $(".sidebar-item.sidebar-dropdown")
    .children(".sidebar-link")
    .attr("aria-expanded", false);
  $(".sidebar-item.sidebar-dropdown").children(".ddown").removeClass("show");
});

$(".sidebar-toggler-desktop").click(function () {
  $(".sidebar-toggler-desktop").toggleClass("sidebar-collapse");
  $(".sidebar").toggleClass("sidebar-collapse");
  $(".sidebar-item.sidebar-dropdown")
    .children(".sidebar-link")
    .attr("aria-expanded", false);
  $(".sidebar-item.sidebar-dropdown").children(".ddown").removeClass("show");
});

$(".sidebar-item.sidebar-dropdown").mouseleave((event) => {
  var sidebarItem = $(event.currentTarget);
  if (
    $(window).width() > 992 &&
    $(sidebarItem).closest(".sidebar").hasClass("sidebar-collapse")
  ) {
    $(sidebarItem).children(".sidebar-link").attr("aria-expanded", false);
    $(sidebarItem).children(".ddown").removeClass("show");
  }
});

// in desktop when sidebar is collapsed, close all dropdowns if hover is out 
$(".sidebar").mousemove((event) => {
  if (!event.target.closest(".sidebar-dropdown")) {
    if ($(".sidebar").hasClass("sidebar-collapse")) {
      $(".sidebar-item.sidebar-dropdown")
        .children(".sidebar-link")
        .attr("aria-expanded", false);
      $(".sidebar-item.sidebar-dropdown")
        .children(".ddown")
        .removeClass("show");
    }
  }
});
