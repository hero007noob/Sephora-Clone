let sidebarTopFilters = [
  "Face",
  "Eye",
  "Lip",
  "Cheek",
  "Value & Gift Sets",
  "Makeup Palettes",
  "Brushes & Applicators",
  "Accessories",
  "Nail",
  "Vegan",
  "Mini Size",
];
let sidebarBottomFiltersData = [
  {
    title: "Pickup & Delivery",
    values: ["Pickup Available:", "Same-Day Delivery:"],
  },
  { title: "Rating", values: ["4 & up", "3 & up", "2 & up", "1 & up"] },
  {
    title: "Brand",
    values: [
      "Rare Beauty by Selena Gomez",
      "MAKEUP BY MARIO",
      "ILIA",
      "IT Cosmetics",
      "Charlotte Tilbury",
      "SEPHORA COLLECTION",
      "MILK MAKEUP",
      "NARS",
      "Too Faced",
      "Urban Decay",
      "Fenty Beauty by Rihanna",
      "Benefit Cosmetics",
      "Laura Mercier",
      "HUDA BEAUTY",
      "tarte",
      "Hourglass",
      "MAKE UP FOR EVER",
      "Anastasia Beverly Hills",
    ],
  },
  { title: "New ", values: ["New"] },
  { title: "Sale ", values: ["Sale"] },
  {
    title: "Price Range",
    values: ["Under $25", "$25 to $50", "$50 to $100", "$100 and above"],
  },
];
let sampleData = [
  {
    brand_name: "SEPHORA COLLECTION",
    list_price: "10.00",
    sale_price: "10.00",
    display_name: "Color Shifter Mini Eyeshadow Palette",
    hero_img:
      "https://www.sephora.com/productimages/sku/s2606630-main-zoom.jpg?imwidth=270&pb=2020-03-sephora-value-2020",
    more_colors: 3,
    product_id: "P503921",
    rating: "4.2222",
    reviews: "9",
    target_url:
      "https://www.sephora.com/product/sephora-collection-sc-color-shifter-mini-eyeshadow-palette-P503921?skuId=2606630",
    same_day_eligible: false,
    is_new: true,
    is_best: false,
    is_organic: false,
    is_natural: false,
    sku_id: "2606630",
  },
  {
    brand_name: "Saie",
    list_price: "25.00",
    sale_price: "25.00",
    display_name: "Dew Blush Liquid Cheek Blush",
    hero_img:
      "https://www.sephora.com/productimages/sku/s2564730-main-zoom.jpg?imwidth=270&pb=clean-planet-positive-badge-2021",
    more_colors: 5,
    product_id: "P469825",
    rating: "4.4121",
    reviews: "512",
    target_url:
      "https://www.sephora.com/product/saie-dew-blush-liquid-cheek-blush-P469825?skuId=2564730",
    same_day_eligible: true,
    is_new: false,
    is_best: false,
    is_organic: false,
    is_natural: false,
    sku_id: "2564730",
  },
  {
    brand_name: "MAKEUP BY MARIO",
    list_price: "30.00",
    sale_price: "30.00",
    display_name: "SoftSculpt® Shaping Stick",
    hero_img:
      "https://www.sephora.com/productimages/sku/s2457299-main-zoom.jpg?imwidth=270&pb=allure-2022-bestofbeauty-badge",
    more_colors: 5,
    product_id: "P472327",
    rating: "3.9401",
    reviews: "284",
    target_url:
      "https://www.sephora.com/product/makeup-by-mario-soft-sculpt-shaping-stick-P472327?skuId=2457299",
    same_day_eligible: true,
    is_new: false,
    is_best: false,
    is_organic: false,
    is_natural: false,
    sku_id: "2457299",
  },
  {
    brand_name: "Too Faced",
    list_price: "16.00 - 28.00",
    sale_price: "16.00 - 28.00",
    display_name: "Better Than Sex Volumizing & Lengthening Mascara",
    hero_img:
      "https://www.sephora.com/productimages/sku/s1533439-main-zoom.jpg?imwidth=270",
    more_colors: 2,
    product_id: "P381000",
    rating: "3.741",
    reviews: "19021",
    target_url:
      "https://www.sephora.com/product/better-than-sex-mascara-P381000?skuId=1533439",
    same_day_eligible: true,
    is_new: false,
    is_best: false,
    is_organic: false,
    is_natural: false,
    sku_id: "1533439",
  },
  {
    brand_name: "Rare Beauty by Selena Gomez",
    list_price: "11.00 - 20.00",
    sale_price: "11.00 - 20.00",
    display_name: "Perfect Strokes Universal Volumizing Mascara",
    hero_img:
      "https://www.sephora.com/productimages/sku/s2474138-main-zoom.jpg?imwidth=270",
    more_colors: 0,
    product_id: "P475599",
    rating: "4.387",
    reviews: "1372",
    target_url:
      "https://www.sephora.com/product/rare-beauty-by-selena-gomez-perfect-strokes-universal-volumizing-mascara-P475599?skuId=2474138",
    same_day_eligible: true,
    is_new: false,
    is_best: false,
    is_organic: false,
    is_natural: false,
    sku_id: "2474138",
  },
  {
    brand_name: "NARS",
    list_price: "15.00",
    sale_price: "15.00",
    display_name: "Mini Radiant Creamy Concealer",
    hero_img:
      "https://www.sephora.com/productimages/sku/s2245363-main-zoom.jpg?imwidth=270",
    more_colors: 29,
    product_id: "P422077",
    rating: "4.1462",
    reviews: "1655",
    target_url:
      "https://www.sephora.com/product/radiant-creamy-concealer-mini-P422077?skuId=2245363",
    same_day_eligible: true,
    is_new: false,
    is_best: false,
    is_organic: false,
    is_natural: false,
    sku_id: "2245363",
  },
  {
    brand_name: "Supergoop!",
    list_price: "22.00 - 48.00",
    sale_price: "22.00 - 48.00",
    display_name:
      "Glowscreen Sunscreen SPF 40 PA+++ with Hyaluronic Acid + Niacinamide",
    hero_img:
      "https://www.sephora.com/productimages/sku/s2535656-main-zoom.jpg?imwidth=270&pb=2020-03-sephora-clean-2019",
    more_colors: 1,
    product_id: "P456218",
    rating: "4.151",
    reviews: "1888",
    target_url:
      "https://www.sephora.com/product/supergoop-glowscreen-sunscreen-spf-40-P456218?skuId=2535656",
    same_day_eligible: true,
    is_new: false,
    is_best: false,
    is_organic: false,
    is_natural: false,
    sku_id: "2535656",
  },
];
let topTags = [
  [
    "New",
    "https://www.sephora.com/contentimages/categorybanners/RWD/icons/new.svg",
  ],
  [
    "Bestsellers",
    "https://www.sephora.com/contentimages/categorybanners/RWD/icons/bestsellers.svg",
  ],
  [
    "Clean",
    "https://www.sephora.com/contentimages/categorybanners/RWD/icons/clean_beauty32.svg",
  ],
  [
    "Vegan",
    "https://www.sephora.com/contentimages/categorybanners/RWD/icons/Icon_Vegan.svg",
  ],
  [
    "Mini Size",
    "https://www.sephora.com/contentimages/categorybanners/RWD/icons/minis.svg",
  ],
  [
    "Lip Quiz",
    "https://www.sephora.com/contentimages/categorybanners/RWD/icons/lip_quiz.svg",
  ],
  [
    "Foundation Quiz",
    "https://www.sephora.com/contentimages/categorybanners/RWD/icons/foundation_quiz.svg",
  ],
  [
    "Cruelty-Free",
    "https://www.sephora.com/contentimages/meganav/icons/CrueltyFreeupdated.svg",
  ],
];
let isPopUP = false;
window.onload = () => {
  loadFilters();
};
function loadFilters() {
  let sidebarBottomFilter = document.getElementById("all-drop-down-filters");
  let popupBottomFilter = document.getElementById("filter-pop-up-menu");
  if (checkWidth()) sidebarBottomFilter = popupBottomFilter;
  else popupBottomFilter.innerHTML = null;
  loadSidebarTopFilters(sidebarTopFilters);
  loadSidebarBottomFilters(sidebarBottomFiltersData, sidebarBottomFilter);
  loadTopTags(topTags);
  loadBottomTags(sidebarBottomFiltersData);
  loadAllProducts(sampleData);
}

function loadSidebarTopFilters(data) {
  let sidebarTopFilter = document.getElementById("sidebar-top-filters");
  data.forEach((item) => {
    let p = document.createElement("p");
    p.id = "top-" + item.replaceAll(" ", "_");
    p.classList.add("sidebar-top-filter-item");
    p.innerHTML = `${item}`;
    p.addEventListener("click", (event) => {
      console.log(event.target.id.split("-", 2)[1]);
    });
    // p.innerHTML = `${item} (<span>0</span>)`;
    sidebarTopFilter.appendChild(p);
  });
}
function loadSidebarBottomFilters(data, sidebarBottomFilter) {
  sidebarBottomFilter.innerHTML = null;
  let popFilter = document.getElementById("filter-pop-up-menu");
  if (popFilter) {
    sidebarBottomFilter.innerHTML += `<p id="pop-up-filter-title">Filter & Sort</p>`;
    sidebarBottomFilter.innerHTML += `<div id="pop-up-close"><img src="./Assets/cross.svg" alt=""></div>`;
  }
  data.forEach((item) => {
    let filter = `
    <div class="drop-down-filter" id="bottom-${item.title.replaceAll(
      " ",
      "_"
    )}">
    <div class="drop-down-filter-title">
      <p> ${item.title} </p>
      <i class="fa-solid fa-chevron-down" id="drop-down-arrow"></i>
    </div>
    <div class="drop-down-filter-content" data-collapsed="true">
      <ul class="drop-down-filter-list">
      `;
    let check = `<div class="checkBox">
      <img src="./Assets/check.png" alt="" />`;
    let radio = `<div class="radio">
      <img src="./Assets/radio.png" alt="" />`;

    item.values.forEach((title) => {
      let star = `<div class="rating-stars">`;
      if (item.title == "Rating") {
        let count = +title.split(" ")[0];
        for (let i = 0; i < 5; i++) {
          let url = "https://www.sephora.com/img/ufe/icons/star-outline.svg";
          if (i < count) {
            url = "https://www.sephora.com/img/ufe/icons/star.svg";
          }
          let img = `<img src= ${url} alt="" />`;
          star += img;
        }
        star += `</div>`;
      }
      filter += `<li class="drop-down-filter-item" data-parent="${
        item.title
      }" id="bottom-${title.replaceAll(" ", "_")}" onclick="checkAct(event)">
      ${item.title == "Rating" || item.title == "Price Range" ? radio : check}
    </div>

    ${item.title == "Rating" ? star : ""} ${title} </li>`;
    });
    filter += `</ul>
    </div>
  </div>`;
    sidebarBottomFilter.innerHTML += filter;
  });
  setUpSidebarBottomFilters(sidebarBottomFilter);
}
function loadTopTags(data) {
  let parent = document.getElementById("product-top-tags");
  data.forEach((item) => {
    let view = `
    <div class="top-tag">
    <p>${item[0]}</p>
    <img
      src="${item[1]}"
      alt="" />
  </div>`;
    parent.innerHTML += view;
  });
}
function loadBottomTags(data) {
  let parent = document.getElementById("product-bottom-tags");
  let background = document.getElementById("bottom-filters-popup");
  let closeBtn = document.getElementById("pop-up-close");
  if (closeBtn)
    closeBtn.addEventListener("click", () => {
      background.style.display = "none";
    });
  data.forEach((item) => {
    let view = `
    <div class="bottom-tag" onclick="openFilterPopUp()">
    <p>${item.title}</p>
    <i class="fa-solid fa-chevron-down" id="drop-down-arrow"></i>
  </div>`;
    parent.innerHTML += view;
  });
}
function loadAllProducts(data) {
  data.forEach((product) => {
    let item = `
    <div class="product-item">
    <div class="product-love">
      <img src="./Assets/heart-outline.svg" alt="" />
    </div>
    <div class="product-img-div">
      <div class="product-img">
        <img
          src="${product.hero_img}"
          alt="" />
      </div>
      <p class="brand-name">${product.brand_name}</p>
      <p class="display-name"
        >${product.display_name}</p
      >
      <p class="color-count">${product.more_colors} Colors</p>
      <div class="product-rating">
      `;
    let star = `<div class="rating-stars">`;
    if (product.rating) {
      let count = +product.rating.split(".")[0];
      for (let i = 0; i < 5; i++) {
        let url = "https://www.sephora.com/img/ufe/icons/star-outline.svg";
        if (i < count) {
          url = "https://www.sephora.com/img/ufe/icons/star.svg";
        }
        let img = `<img src=${url} alt="" />`;
        star += img;
      }
      star += `</div>`;
    }
    item += star;
    item += `<p>${product.reviews}</p>
      </div>
      <div class="product-price-div">
        <p class="product-list-price">$ ${product.list_price}</p>
        <p class="product-sale-price">$ ${product.sale_price}</p>
      </div>
      <div class="same-day-delivery" style="opacity: ${
        product.same_day_eligible ? 1 : 0
      }">
        <img src="./Assets/lock.svg" alt="" />
        <p>Same-Day Delivery: 78539-0998</p>
      </div>
    </div>
  </div>`;
    document.getElementById("all-products").innerHTML += item;
  });
}
function setUpSidebarBottomFilters(parent) {
  let dropDownFilters = parent.querySelectorAll(".drop-down-filter");
  dropDownFilters.forEach((filter) => {
    filter
      .querySelector(".drop-down-filter-title")
      .addEventListener("click", function (e) {
        var section = filter.querySelector(".drop-down-filter-content");
        var isCollapsed = section.getAttribute("data-collapsed") === "true";
        toggleDropDownArrow(filter);
        if (isCollapsed) {
          expandSection(section);
          section.setAttribute("data-collapsed", "false");
        } else {
          collapseSection(section);
        }
      });
  });
}

function collapseSection(element) {
  element.style.height = "0px";
  element.setAttribute("data-collapsed", "true");
}

function expandSection(element) {
  var sectionHeight = element.scrollHeight;
  element.style.height = sectionHeight + "px";
  element.setAttribute("data-collapsed", "false");
}

function checkAct(event) {
  let li = event.target;
  let id = li.dataset.parent;
  if (id == "Rating" || id == "Pickup & Delivery" || id == "Price Range") {
    let parent = document.getElementById(`bottom-${id.replaceAll(" ", "_")}`);
    let allLis = parent.querySelectorAll("li");
    for (let i = 0; i < allLis.length; i++) {
      if (allLis[i] != li) allLis[i].classList.remove("checked");
    }
  }
  li.classList.toggle("checked");
}

function toggleDropDownArrow(filter) {
  let dropDownArrow = filter.querySelector("#drop-down-arrow");
  dropDownArrow.classList.toggle("rotate");
}
function openFilterPopUp() {
  let popup = document.getElementById("bottom-filters-popup");
  popup.style.display = "flex";
}
function reportWindowSize() {
  console.log("in", window.innerWidth);
  console.log("out", screen.width);
  let percent = 69 - 1920 / 28.2;
}
window.addEventListener("resize", (event) => {
  let sidebarBottomFilter = document.getElementById("all-drop-down-filters");
  let popupBottomFilter = document.getElementById("filter-pop-up-menu");
  let background = document.getElementById("bottom-filters-popup");
  let closeBtn = document.getElementById("pop-up-close");
  if (closeBtn)
    closeBtn.addEventListener("click", () => {
      background.style.display = "none";
    });
  if (checkWidth()) {
    sidebarBottomFilter.innerHTML = null;
    if (!isPopUP) {
      console.log("here");
      isPopUP = true;
      loadSidebarBottomFilters(sidebarBottomFiltersData, popupBottomFilter);
    }
  } else {
    if (isPopUP) {
      background.style.display = "none";
      console.log("here2");
      popupBottomFilter.innerHTML = null;
      loadSidebarBottomFilters(sidebarBottomFiltersData, sidebarBottomFilter);
      isPopUP = false;
    }
  }
  // reportWindowSize();
});
function checkWidth() {
  // console.log(window.innerWidth, window.innerWidth < 821);
  return +window.innerWidth < 900 || +screen.width < 900;
}
