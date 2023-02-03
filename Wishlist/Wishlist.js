let data = [
  {
    brand_name: "SEPHORA COLLECTION",
    list_price: "$10.00",
    sale_price: "$10.00",
    display_name: "Color Shifter Mini Eyeshadow Palette",
    hero_img:
      "https://www.sephora.com/productimages/sku/s2606630-main-zoom.jpg?imwidth=270&pb=2020-03-sephora-value-2020",
    more_colors: 3,
    product_id: "P503921",
    rating: "4.2222",
    reviews: "9",
    target_url:
      "https://www.sephora.com/product/sephora-collection-sc-color-shifter-mini-eyeshadow-palette-P503921?skuId=2606630",
    same_day_eligible: true,
    is_new: true,
    is_best: false,
    is_organic: false,
    is_natural: false,
    sku_id: "2606630",
  },
  {
    brand_name: "Saie",
    list_price: "$25.00",
    sale_price: "$25.00",
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
    brand_name: "NARS",
    list_price: "$15.00",
    sale_price: "$15.00",
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
    list_price: "$22.00 - $48.00",
    sale_price: "$22.00 - $48.00",
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

var wish = JSON.parse(localStorage.getItem("wishlist")) || [];

displayItems(data);
var total = 0;

function displayItems(arr) {
  document.getElementById("wishlistmain").innerText = "";
  total = 0;

  arr.map(function (elem, index) {
    var wishdiv = document.createElement("div");
    wishdiv.className = "item";

    var imagediv = document.createElement("div");
    imagediv.className = "imagediv";

    var image = document.createElement("img");
    image.src = elem.hero_img;

    imagediv.append(image);

    var details = document.createElement("div");
    details.className = "details";

    var details1 = document.createElement("div");
    details1.className = "details1";

    var brand_name = document.createElement("p");
    brand_name.innerText = elem.brand_name;

    var display_name = document.createElement("p");
    display_name.innerText = elem.display_name;

    details1.append(brand_name, display_name);

    var details2 = document.createElement("div");
    details2.className = "details2";

    var product_id = document.createElement("p");
    product_id.innerText = "ITEM :" + elem.sku_id;

    var rating = document.createElement("p");
    rating.innerText = "RATING :" + elem.rating;

    details2.append(product_id, rating);

    details.append(details1, details2);
    var leftDiv = document.createElement("div");
    leftDiv.className = "wishlist-left-div";
    var rightDiv = document.createElement("div");
    rightDiv.className = "wishlist-right-div";
    var pricediv = document.createElement("div");
    pricediv.className = "pricediv";

    var price = document.createElement("p");
    price.innerText = elem.sale_price;

    pricediv.append(price);

    var basketbuttondiv = document.createElement("div");
    basketbuttondiv.className = "basketbuttondiv";

    var basketbutton = document.createElement("button");
    basketbutton.innerText = "Add to Basket";

    basketbuttondiv.append(basketbutton);

    total = total + elem.price;
    // console.log(total)

    var icondiv = document.createElement("div");
    icondiv.className = "icondiv";

    var icon = document.createElement("img");
    icon.src = "./heart.svg";

    icondiv.addEventListener("click", function () {
      remove(elem, index);
    });

    icondiv.append(icon);
    leftDiv.append(imagediv, details);
    rightDiv.append(pricediv, basketbuttondiv, icondiv);
    wishdiv.append(leftDiv, rightDiv);

    document.getElementById("wishlistmain").append(wishdiv);
  });
}
function remove(elem, index) {
  data.splice(index, 1);
  displayItems(data);
}
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
