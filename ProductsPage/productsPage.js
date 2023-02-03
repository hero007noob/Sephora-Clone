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
let currentData = [
  {
    _id: "63da5e720cbf4622ddcb69f5",
    brand_name: "ILIA",
    list_price: 34,
    sale_price: 0,
    display_name: "Multi-Stick Cream Blush + Highlighter + Lip Tint",
    image_alt_text: "ILIA - Multi-Stick Cream Blush + Highlighter + Lip Tint",
    hero_img:
      "https://www.sephora.com/productimages/sku/s2564359-main-zoom.jpg?imwidth=270&pb=2020-03-sephora-clean-2019",
    more_colors: 11,
    product_id: "P411848",
    rating: 4.2326,
    reviews: 1221,
    target_url:
      "https://www.sephora.com/product/multi-stick-P411848?skuId=2564359",
    same_day_eligible: true,
    is_new: false,
    is_best: false,
    is_organic: false,
    is_natural: false,
    sku_id: "2564359",
    is_sale: false,
    product_type: "Lip",
  },
  {
    _id: "63da5e720cbf4622ddcb69f6",
    brand_name: "ILIA",
    list_price: 48,
    sale_price: 0,
    display_name: "Super Serum Skin Tint SPF 40 Foundation",
    image_alt_text: "ILIA - Super Serum Skin Tint SPF 40 Foundation",
    hero_img:
      "https://www.sephora.com/productimages/sku/s2333607-main-zoom.jpg?imwidth=270&pb=allure-best-2020",
    more_colors: 29,
    product_id: "P455418",
    rating: 3.7055,
    reviews: 3515,
    target_url:
      "https://www.sephora.com/product/ilia-super-serum-skin-tint-spf-40-P455418?skuId=2333607",
    same_day_eligible: true,
    is_new: false,
    is_best: false,
    is_organic: false,
    is_natural: false,
    sku_id: "2333607",
    is_sale: false,
  },
  {
    _id: "63da5e720cbf4622ddcb69f8",
    brand_name: "Rare Beauty by Selena Gomez",
    list_price: 30,
    sale_price: 0,
    display_name:
      "Positive Light Tinted Moisturizer Broad Spectrum SPF 20 Sunscreen",
    image_alt_text:
      "Rare Beauty by Selena Gomez - Positive Light Tinted Moisturizer Broad Spectrum SPF 20 Sunscreen",
    hero_img:
      "https://www.sephora.com/productimages/sku/s2557437-main-zoom.jpg?imwidth=270",
    more_colors: 23,
    product_id: "P482729",
    rating: 4.1844,
    reviews: 933,
    target_url:
      "https://www.sephora.com/product/rare-beauty-by-selena-gomez-positive-light-tinted-moisturizer-broad-spectrum-spf-20-sunscreen-P482729?skuId=2557437",
    same_day_eligible: true,
    is_new: false,
    is_best: false,
    is_organic: false,
    is_natural: false,
    sku_id: "2557437",
    is_sale: false,
  },
  {
    _id: "63da5e720cbf4622ddcb6a01",
    brand_name: "IT Cosmetics",
    list_price: 44,
    sale_price: 0,
    display_name:
      "CC+ Nude Glow Lightweight Foundation + Glow Serum with SPF 40 and Niacinamide",
    image_alt_text:
      "IT Cosmetics - CC+ Nude Glow Lightweight Foundation + Glow Serum with SPF 40 and Niacinamide",
    hero_img:
      "https://www.sephora.com/productimages/sku/s2515922-main-zoom.jpg?imwidth=270",
    more_colors: 21,
    product_id: "P482010",
    rating: 4.4306,
    reviews: 1707,
    target_url:
      "https://www.sephora.com/product/it-cosmetics-cc-nude-glow-lightweight-foundation-glow-serum-spf-40-niacinamide-P482010?skuId=2515922",
    same_day_eligible: true,
    is_new: false,
    is_best: false,
    is_organic: false,
    is_natural: false,
    sku_id: "2515922",
    is_sale: false,
  },
  {
    _id: "63da5e720cbf4622ddcb6a04",
    brand_name: "NARS",
    list_price: 34,
    sale_price: 0,
    display_name: "Powermatte Long-Lasting Lipstick",
    image_alt_text: "NARS - Powermatte Long-Lasting Lipstick",
    hero_img:
      "https://www.sephora.com/productimages/sku/s2599108-main-zoom.jpg?imwidth=270",
    more_colors: 11,
    product_id: "P501583",
    rating: 4.532,
    reviews: 250,
    target_url:
      "https://www.sephora.com/product/nars-powermatte-lipstick-P501583?skuId=2599108",
    same_day_eligible: true,
    is_new: false,
    is_best: false,
    is_organic: false,
    is_natural: false,
    sku_id: "2599108",
    is_sale: false,
    product_type: "Lip",
  },
  {
    _id: "63da5e720cbf4622ddcb6a06",
    brand_name: "Charlotte Tilbury",
    list_price: 48,
    sale_price: 0,
    display_name: "Glow Glide Face Architect Highlighter",
    image_alt_text: "Charlotte Tilbury - Glow Glide Face Architect Highlighter",
    hero_img:
      "https://www.sephora.com/productimages/sku/s2643377-main-zoom.jpg?imwidth=270",
    more_colors: 5,
    product_id: "P503729",
    rating: 4.3663,
    reviews: 404,
    target_url:
      "https://www.sephora.com/product/charlotte-tilbury-hollywood-glow-glide-highlighter-P503729?skuId=2643377",
    same_day_eligible: true,
    is_new: true,
    is_best: false,
    is_organic: false,
    is_natural: false,
    sku_id: "2643377",
    is_sale: false,
    product_type: "Face",
  },
  {
    _id: "63da5e720cbf4622ddcb6a0d",
    brand_name: "Benefit Cosmetics",
    list_price: 35,
    sale_price: 0,
    display_name: "Cookie and Tickle Powder Highlighters",
    image_alt_text: "Benefit Cosmetics - Cookie and Tickle Powder Highlighters",
    hero_img:
      "https://www.sephora.com/productimages/sku/s2520468-main-zoom.jpg?imwidth=270",
    more_colors: 1,
    product_id: "P447375",
    rating: 4.7321,
    reviews: 265,
    target_url:
      "https://www.sephora.com/product/cookie-highlighter-P447375?skuId=2520468",
    same_day_eligible: true,
    is_new: false,
    is_best: false,
    is_organic: false,
    is_natural: false,
    sku_id: "2520468",
    is_sale: false,
  },
  {
    _id: "63da5e720cbf4622ddcb6a18",
    brand_name: "Fenty Beauty by Rihanna",
    list_price: 32,
    sale_price: 0,
    display_name: "Eaze Drop Blurring Skin Tint",
    image_alt_text: "Fenty Beauty by Rihanna - Eaze Drop Blurring Skin Tint",
    hero_img:
      "https://www.sephora.com/productimages/sku/s2431864-main-zoom.jpg?imwidth=270",
    more_colors: 24,
    product_id: "P470025",
    rating: 3.9728,
    reviews: 1580,
    target_url:
      "https://www.sephora.com/product/fenty-beauty-rihanna-eaze-drop-blurring-skin-tint-P470025?skuId=2431864",
    same_day_eligible: true,
    is_new: false,
    is_best: false,
    is_organic: false,
    is_natural: false,
    sku_id: "2431864",
    is_sale: false,
  },
  {
    _id: "63da5e720cbf4622ddcb6a1a",
    brand_name: "Hourglass",
    list_price: 38,
    sale_price: 0,
    display_name: "Unlocked™ Satin Crème Lipstick",
    image_alt_text: "Hourglass - Unlocked™ Satin Crème Lipstick",
    hero_img:
      "https://www.sephora.com/productimages/sku/s2637510-main-zoom.jpg?imwidth=270",
    more_colors: 19,
    product_id: "P504297",
    rating: 4.6828,
    reviews: 145,
    target_url:
      "https://www.sephora.com/product/hourglass-unlocked-tm-satin-creme-lipstick-P504297?skuId=2637510",
    same_day_eligible: true,
    is_new: true,
    is_best: false,
    is_organic: false,
    is_natural: false,
    sku_id: "2637510",
    is_sale: false,
    product_type: "Lip",
  },
  {
    _id: "63da5e720cbf4622ddcb6a1d",
    brand_name: "Rare Beauty by Selena Gomez",
    list_price: 30,
    sale_price: 0,
    display_name: "Liquid Touch Weightless Foundation",
    image_alt_text:
      "Rare Beauty by Selena Gomez - Liquid Touch Weightless Foundation",
    hero_img:
      "https://www.sephora.com/productimages/sku/s2361525-main-zoom.jpg?imwidth=270",
    more_colors: 47,
    product_id: "P49848448",
    rating: 4.0548,
    reviews: 5093,
    target_url:
      "https://www.sephora.com/product/rare-beauty-by-selena-gomez-liquid-touch-weightless-foundation-P49848448?skuId=2361525",
    same_day_eligible: true,
    is_new: false,
    is_best: false,
    is_organic: false,
    is_natural: false,
    sku_id: "2361525",
    is_sale: false,
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

// window.onload = () => {
loadFilters();
// };
function loadFilters() {
  console.log("i wanna cry");
  let sidebarBottomFilter = document.getElementById("all-drop-down-filters");
  let popupBottomFilter = document.getElementById("filter-pop-up-menu");
  if (checkWidth()) sidebarBottomFilter = popupBottomFilter;
  else popupBottomFilter.innerHTML = null;
  loadSidebarTopFilters(sidebarTopFilters);
  loadSidebarBottomFilters(sidebarBottomFiltersData, sidebarBottomFilter);
  loadTopTags(topTags);
  loadBottomTags(sidebarBottomFiltersData);
  loadAllProducts(currentData);
  loadUser();
}

function loadSidebarTopFilters(data) {
  let sidebarTopFilter = document.getElementById("sidebar-top-filters");
  data.forEach((item) => {
    let p = document.createElement("p");
    p.id = "top-" + item.replaceAll(" ", "_");
    p.classList.add("sidebar-top-filter-item");
    p.innerHTML = `${item}`;
    p.addEventListener("click", (event) => {
      selectTopItem(event);
      let value = event.target.id.split("-", 2)[1];
      console.log("Product Type", value);
      filterData("Product Type", value);
    });
    // p.innerHTML = `${item} (<span>0</span>)`;
    sidebarTopFilter.appendChild(p);
  });
}
function loadUser(){
  let user = JSON.parse(localStorage.getItem('user_details'));
  console.log("User", user);
  if (user) {
    let name = "Sign In";
    if(user.data) name =user.data.name
    if(user.user) name =user.user.name
    document.getElementById("nav-sign-in-name").textContent =  name;
  }
}
function selectTopItem(event) {
  console.log("here");
  let allTopItems = document.querySelectorAll(".sidebar-top-filter-item");
  allTopItems.forEach((e) => {
    e.style.fontWeight = "normal";
  });
  event.target.style.fontWeight = "700";
  console.log(allTopItems.length);
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
      ${
        item.title == "Rating" || item.title == "Price Range" ? radio : check
      }</div>
${item.title == "Rating" ? star : ""} <p>${title}</p> </li>`;
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
// 
function loadAllProducts(data) {
  document.getElementById("all-products").innerHTML = null;
  data.forEach((product) => {
    let wishlistIcon =  "./Assets/heart-outline.svg"; 
    let wishlistData = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlistData.forEach((wishlist) => {
      if(wishlist._id == product._id){
        wishlistIcon = "./Assets/heart.svg";
      }
    })
    let item = `
    <div class="product-item"  onclick=goToSpecificProduct(event)  >
    <div class="product-love" data-parent = "${
      product._id
    }" onclick=toggleLove(event) >
      <img src="${wishlistIcon}" alt="" />
    </div>
    <div class="product-img-div">
      <div class="product-img">
        <img
          src="${product.hero_img}"
          alt="" />
      </div>
      <div class="quick-look" data-parent = "${product._id}" onclick=quickLookAct(event)>
      Quicklook</div>
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
      let count = Math.round(product.rating);
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
        ${
          product.sale_price
            ? `<p class="product-sale-price">$ ${product.sale_price}</p>`
            : ""
        }
      </div>
      <div class="same-day-delivery" style="opacity: ${
        product.same_day_eligible ? 1 : 0
      }">
        <img src="./Assets/lock.svg" alt="" />
        <p>Same-Day Delivery: 78539-0998</p>
      </div>
    </div>
  `;
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

function addRatings(rating, reviews){
  this.rating = rating;
  this.reviews = reviews;
  // const elem = this.createElementFromHTML(this.renderElement());
  const elem = document.getElementById('the-quicklook-popup');
  // console.log(elem);
  let star = '<div>';
    let count = rating;
    for (let i = 0; i < 5; i++) {
      let url = "https://www.sephora.com/img/ufe/icons/star-outline.svg";
      if (i < count) {
        url = "https://www.sephora.com/img/ufe/icons/star.svg";
      }
      let img = '<img src='+url+' alt="" />';
      star += img;
    }
    star += '</div> '+reviews+' reviews';
    elem.getElementsByClassName(
      "quicklook__card__display__data__rating"
    )[0].innerHTML = star;
    this.markup = elem.innerHTML;
    // return (elem.innerHTML);
    document.getElementById('the-quicklook-popup').innerHTML=this.markup;
}
function goToSpecificProduct(event){ 
  let classes = event.target.classList;
  let id;
  if(classes.contains('product-img-div')){
    console.log("event.target: ", event.target); 
    id = event.target.parentNode.querySelector('.product-love').dataset.parent;
    console.log("id: ", id);
  }
  if(event.target.querySelector('.product-love')){ 
    id = event.target.querySelector('.product-love').dataset.parent;
    console.log('id',id);
  }
  let product = currentData.filter((e)=>e._id == id)[0];
  if(product)
  localStorage.setItem('specificProduct',JSON.stringify(product) );
}
// let quicklook  = document.getElementsByClassName('quicklook')[0];
// quicklook.addEventListener('click',gg);
function quickLookAct(event){
  console.log(
    "quicklook",
   event.target.dataset.parent
  );
  addRatings(3,224);
  let product = currentData.filter((e) => e._id == event.target.dataset.parent)[0];
  localStorage.setItem('quickLook', JSON.stringify(product));
  let quicklook  = document.getElementsByClassName('quicklook')[0];
  quicklook.style.display = "flex"; 
  quicklook.addEventListener('click',()=>{quicklook.style.display = "none";});
  // console.log('dfdfd',);
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
function toggleLove(event) {
  let img = event.target.querySelector("img");
  if (img.src.includes("outline")) {
    img.src = "./Assets/heart.svg";
  } else {
    img.src = "./Assets/heart-outline.svg";
  }
  let wishlistData = JSON.parse(localStorage.getItem('wishlist')) || [];

  let selectedItem = currentData.filter((e) => e._id == event.target.dataset.parent)[0];
  let copy = false;
  let index = 0;
  wishlistData.forEach((element,i) => {
    if( element._id == selectedItem._id
      ){
        copy = true;
        index = i;
      }
  });;
  if (copy) {
    wishlistData.splice(index, 1);
  } else {
    wishlistData.push(selectedItem);
  } 
  localStorage.setItem('wishlist', JSON.stringify(wishlistData));
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
  console.log(li.dataset.parent, li.querySelector("p").textContent);
  filterData(li.dataset.parent, li.querySelector("p").textContent);
  li.classList.toggle("checked");
}
let brandSet = new Set();
let prevRating = null;
let isNew = null;
let isSale = null;
let isSameDay = null;
let filters = [];
let prodType = null;
function filterData(parent, item) {
  filters = filters.filter((e) => {
    if (e.type != parent) {
      return true;
    }
    return false;
  });
  let body = { offset: 1, count: 20 };
  switch (parent) {
    case "Brand":
      if (brandSet.has(item)) {
        brandSet.delete(item);
      } else brandSet.add(item);
      if (brandSet.size > 0) {
        filters.push({ type: parent, value: [...brandSet] });
      }
      break;
    case "Rating":
      let currentRaing = +item.split(" ")[0];
      if (prevRating != currentRaing) {
        prevRating = currentRaing;
      } else prevRating = null;
      if (prevRating != null) {
        filters.push({ type: parent, value: [prevRating, 6] });
      }
      break;
    case "Pickup & Delivery":
      if (item.includes("Same")) item = false;
      else item = true;
      if (isSameDay != item) {
        isSameDay = item;
      } else isSameDay = null;
      if (isSameDay != null) {
        filters.push({ type: parent, value: item });
      }
      break;
    case "New ":
      if (isNew != item) {
        isNew = item;
      } else isNew = null;
      if (isNew != null) {
        filters.push({ type: parent, value: item });
      }
      break;
    case "Sale ":
      if (isSale != item) {
        isSale = item;
      } else isSale = null;
      if (isSale != null) {
        filters.push({ type: parent, value: item });
      }
      break;
    case "Product Type":
      if (prodType != item) {
        prodType = item;
      } else prodType = null;
      if (prodType != null) {
        filters.push({ type: parent, value: item });
      }
      break;
    case "Price Range":
      let min = 0;
      let max = 1000;
      if (item.includes("Under")) max = 25;
      else if (item.includes("above")) min = 100;
      else if (item.includes("25")) {
        min = 25;
        max = 50;
      } else {
        min = 50;
        max = 100;
      }
      filters.push({ type: parent, value: [min, max] });
      break;
    default:
      break;
  }
  if (filters.length > 0) {
    body.filters = filters;
    getFillteredData(JSON.stringify(body));
  }
}
async function getFillteredData(body) {
  try {
    let url =
      "https://beta-sephora-express-cr5j5yn2ca-uc.a.run.app/api/v1/sephora/filtered_products";
    let res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    });
    let data = await res.json();
    if (res.status == 200) {
      console.log("res", data);
      currentData = data;
      localStorage.setItem("products_data", JSON.stringify(currentData));
      loadAllProducts(data);
    }
  } catch (error) {
    console.log("bhai", error);
  }
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
const cart = JSON.parse(localStorage.getItem("basket_data")) || [];
document.getElementById("navBar_button_cartCount").innerHTML = cart.length;
addEventListener("storage", (event) => {
  const cart = JSON.parse(localStorage.getItem("basket_data")) || [];
  document.getElementById("navBar_button_cartCount").innerHTML = cart.length;
});
function displayModal(e) {
  document.querySelector(".navBar_bottom_overlay").style.display = "block";
  const temp = document.querySelectorAll(".bottom-navbar");
  const elem = e.getElementsByClassName("bottom-navbar")[0];
  temp.forEach((item) => {
    if (item != elem) item.style.display = "none";
  });
  if (elem.style.display == "block") {
    console.log("hansaaa");
    elem.style.display = "none";
  } else elem.style.display = "block";
}
// close modal
document
  .querySelector(".navBar_bottom_overlay")
  .addEventListener("click", () => {
    const temp = document.querySelectorAll(".bottom-navbar");
    temp.forEach((item) => {
      item.style.display = "none";
    });
    document.querySelector(".navBar_bottom_overlay").style.display = "none";
  });
