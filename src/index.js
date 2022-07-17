import "./index.scss";
import "bootstrap/js/dist/carousel";
import Offcanvas from "bootstrap/js/dist/offcanvas";
import Collapse from "bootstrap/js/dist/collapse";
import Modal from "bootstrap/js/dist/modal";

function renderItems() {
  const list = document.getElementById("list");

  for (let i = 0; i < 20; i++) {
    const colItem = document.createElement("div");
    colItem.classList.add("col");
    colItem.innerHTML = `
    <div class="mt-4">
      <div class="card">
        <img src="https://bruce-fe-ec.web.app/images/item.png" class="card-img-top" >
        <div class="card-body p-2">
          <h5 class="card-title text-primary">$2000</h5>
          <p class="card-text fs-7">這是一罐沐浴乳這是一罐沐浴乳這是一罐沐浴乳</p>
          <p class="card-text text-end fs-8">已售出 1000</p>
        </div>
        <span class="badge bg-primary position-absolute top-0 end-0">雙11優惠</span>
      </div>
    </div>
  `;
    list.appendChild(colItem);
  }
}

function collapsePCHandler() {
  // get elements
  const collapse = document.getElementById("filter-collapse");
  const collapseBtn = document.getElementById("filter-collapse-btn");
  const collapseBtnText = document.getElementById("filter-btn-text");
  const filterIcon = document.getElementById("filter-icon");

  const bsCollapse = new Collapse(collapse, {
    toggle: false,
  });

  collapseBtn.addEventListener("click", function () {
    bsCollapse.toggle();
  });

  collapse.addEventListener("show.bs.collapse", function () {
    collapseBtnText.innerText = "收起";
    filterIcon.classList.add("transform-rotate-180");
  });
  collapse.addEventListener("hide.bs.collapse", function () {
    collapseBtnText.innerText = "顯示更多";
    filterIcon.classList.remove("transform-rotate-180");
  });
}

function collapseMobileHandler() {
  const collapseMobile = document.getElementById("filter-mobile-collapse");
  const collapseBtnMobile = document.getElementById(
    "filter-mobile-collapse-btn"
  );
  const collapseBtnTextMobile = document.getElementById(
    "filter-mobile-btn-text"
  );
  const filterIconMobile = document.getElementById("filter-mobile-icon");

  // 初始化下拉選單

  const bsCollapseMobile = new Collapse(collapseMobile, {
    toggle: false,
  });

  collapseBtnMobile.addEventListener("click", function () {
    bsCollapseMobile.toggle();
  });

  collapseMobile.addEventListener("show.bs.collapse", function () {
    collapseBtnTextMobile.innerText = "收起";
    filterIconMobile.classList.add("transform-rotate-180");
  });
  collapseMobile.addEventListener("hide.bs.collapse", function () {
    collapseBtnTextMobile.innerText = "顯示更多";
    filterIconMobile.classList.remove("transform-rotate-180");
  });
}

function offcanvasHandler() {
  const myOffcanvas = document.getElementById("offcanvasScrolling");
  const mobileFilterBtn = document.getElementById("mobile-filter-btn");

  const bsOffcanvas = new Offcanvas(myOffcanvas, { backdrop: true });

  mobileFilterBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    bsOffcanvas.toggle();
  });
}

function searchHandler() {
  const searchBtn = document.getElementById("search-btn");
  const itemsWrapper = document.getElementById("items-wrapper");
  const spinnerWrapper = document.getElementById("spinner-wrapper");

  searchBtn.addEventListener("click", function () {
    itemsWrapper.classList.add("d-none");
    spinnerWrapper.classList.remove("d-none");

    setTimeout(function () {
      itemsWrapper.classList.remove("d-none");
      spinnerWrapper.classList.add("d-none");
    }, 1500);
  });
}

function modalHandler() {
  const cartBtn = document.getElementById("cart-btn");
  const cart = new Modal(document.getElementById("cart"), {
    keyboard: false,
  });

  cartBtn.addEventListener("click", function () {
    cart.toggle();
  });
}

collapseMobileHandler();
offcanvasHandler();
collapsePCHandler();
renderItems();
searchHandler();
modalHandler();
