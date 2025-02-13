import { toggleClass } from "./utils/class.js";
const navbar = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (scrollY === 0 && navbar.classList.contains("nav_scroll_anim")) {
    navbar.classList.remove("nav_scroll_anim");
  } else if (scrollY > 0 && !navbar.classList.contains("nav_scroll_anim")) {
    navbar.classList.add("nav_scroll_anim");
  }
});
function changeOverlayAndTogglesSidebar() {
  document.querySelector(".sidebar").classList.toggle("invisible_sidebar");
  document
    .querySelector(".overlay_div_for_sidebar")
    .classList.toggle("overlay_visible_for_sidebar");
}

document.querySelector(".fa-bars").addEventListener("click", () => {
  changeOverlayAndTogglesSidebar();
});
document.querySelector(".fa-xmark").addEventListener("click", () => {
  changeOverlayAndTogglesSidebar();
});
document
  .querySelector(".overlay_div_for_sidebar")
  .addEventListener("click", () => {
    changeOverlayAndTogglesSidebar();
  });
document.querySelectorAll(".fa-cart-shopping").forEach((cartIcon) => {
  let bounceEndTimeout;
  cartIcon.addEventListener("mouseenter", () => {
    // toggleClass(cartIcon, "fa-bounce");
    const cartIconClassList = cartIcon.classList;
    cartIconClassList.add("fa-bounce");
    bounceEndTimeout = setTimeout(() => {
      if (cartIconClassList.contains("fa-bounce")) {
        cartIconClassList.remove("fa-bounce");
      }
    }, 1800);
  });
  cartIcon.addEventListener("mouseleave", () => {
    const cartIconClassList = cartIcon.classList;
    clearTimeout(bounceEndTimeout);
    cartIconClassList.remove("fa-bounce");
  });
});
