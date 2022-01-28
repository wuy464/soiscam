const search = document.querySelector(".header-search");
const inputSearch = document.querySelector(".header-search-input");
const iconClose = document.querySelector(".header-search-iconClose");
const menuItem = document.querySelectorAll(".container-menu-item");
const listScam = document.querySelector(".scamlist");

search.addEventListener("submit", (e) => {
  e.preventDefault();
});

// search input
inputSearch.addEventListener("input", (e) => {
  if (e.target.value !== "") {
    iconClose.classList.add("active");
  } else {
    iconClose.classList.remove("active");
  }
});
iconClose.addEventListener("click", (e) => {
  inputSearch.value = "";
  iconClose.classList.remove("active");
  getData();
});

// menu-item
menuItem.forEach((item) => {
  item.addEventListener("click", (e) => {
    menuItem.forEach((item) => item.classList.remove("active"));
    item.classList.add("active");
  });
});

// lightbox images scam-item

document.body.addEventListener("click", (e) => {
  if (e.target.matches(".info-image")) {
    const srcImages = e.target.getAttribute("src");
    console.log(srcImages);
    const template = `<div class="lightbox">
      <img src="${srcImages}" alt="" />
      <ion-icon class="lightbox-close" name="close"></ion-icon>  
    </div>`;

    document.body.insertAdjacentHTML("beforeend", template);
  } else if (e.target.matches(".lightbox-close")) {
    const remove = e.target.parentNode;
    remove.parentNode.removeChild(remove);
  }
});

// scamlist accordion
document.body.addEventListener("click", (e) => {
  if (e.target.matches(".scamlist-item-heading")) {
    const content = e.target.nextElementSibling;
    content.style.height = `${content.scrollHeight}px`;
    content.classList.toggle("active");
    console.log(content.scrollHeight);

    if (!content.classList.contains("active")) {
      content.style.height = `0px`;
    }
  }
});
inputSearch.addEventListener(
  "input",
  debounceFn(function (e) {
    let path = url;
    if (e.target.value !== "") {
      path = `${url}?accountHolder=${e.target.value}`;
    }
    getData(path);
    console.log(path);
  }, 500)
);

// debounceFn
function debounceFn(func, wait, immediate) {
  let timeout;
  return function () {
    let context = this,
      args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
