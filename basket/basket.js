


let cartdata = [
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
      brand_name: "MAKEUP BY MARIO",
      list_price: "$30.00",
      sale_price: "$30.00",
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
      list_price: "$16.00 - $28.00",
      sale_price: "$16.00 - $28.00",
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
      list_price: "$11.00 - $20.00",
      sale_price: "$11.00 - $20.00",
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




let user_details = JSON.parse(localStorage.getItem("user_details")) || {};

if(user_details.email!=undefined){
    document.getElementById("getItShipped-twobox").style.display = "none";
    document.getElementById("lowerleft").style.display = "none";
}


function displayData(cartdata){
    document.getElementById("cartproducts").innerHTML = "";
    cartdata.forEach(function(elem,index){
        let cartproduct_card = document.createElement("div");
        cartproduct_card.setAttribute("class","cartproducts-card");
        cartproduct_card.innerHTML = `
        <img class="product-img" src=${elem.hero_img} alt="">
        `
        let cartproducts_card_details = document.createElement("div");
        cartproducts_card_details.setAttribute("class","cartproducts-card-details");
        cartproducts_card_details.innerHTML = `
        <h4>${elem.brand_name}</h4>
        <p class="cartproducts-card-productname">${elem.display_name}</p>
        <p class="cartproducts-card-details-item">ITEM ${elem.product_id}</p>
        <p class="cartproducts-card-details-size">Size: 3.3 oz/ 100 mL</p>
        `
        let cartproducts_card_details_buttons = document.createElement("div");
        cartproducts_card_details_buttons.setAttribute("class","cartproducts-card-details-buttons");
        cartproducts_card_details_buttons.innerHTML = `
        <select name="product-number" id="product-number">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </select>
        `
        let moveToLovesbtn = document.createElement("button");
        moveToLovesbtn.setAttribute("class","cartproducts-card-details-btn");
        moveToLovesbtn.innerText = "Move to Loves"
        let removeFromCartbtn = document.createElement("button");
        removeFromCartbtn.setAttribute("class","cartproducts-card-details-btn");
        removeFromCartbtn.innerText = "Remove"
        removeFromCartbtn.addEventListener("click",function(){
            removeFromCartFunc(elem,index);
        })

        cartproducts_card_details_buttons.append(moveToLovesbtn,removeFromCartbtn);

        cartproducts_card_details.append(cartproducts_card_details_buttons);

        let cartproducts_card_price = document.createElement("div");
        cartproducts_card_price.setAttribute("class","cartproducts-card-price");
        cartproducts_card_price.innerHTML = `
        <h4 class="cartProductPrice">${elem.sale_price}</h4>
        <button class="change-method">Change Method</button>
        `

        cartproduct_card.append(cartproducts_card_details,cartproducts_card_price);


        document.getElementById("cartproducts").append(cartproduct_card);
    })
}


// function to complete the remove form cart function
function removeFromCartFunc(elem,index){
    console.log(index)
}

function calculateTotalPrice(){
    let cartTotal = cartdata.reduce(function(elem,curr){
        return elem + Number(curr.sale_price);
    },0)
    console.log(cartTotal);
    document.querySelector(".cart-subtotal").innerText = `$ ${cartTotal}`;
   document.getElementById("cart-subtotal-h").innerText = `$ ${cartTotal}`;
}



calculateTotalPrice();
displayData(cartdata);



// function displayData(cartdata){
//     cartdata.forEach(function(elem,index){
//         let cartproduct_card = document.createElement("div");
//         cartproduct_card.setAttribute("class","cartproducts-card");
//         cartproduct_card.innerHTML = `
//         <img class="product-img" src=${elem.hero_img} alt="">
//         <div class="cartproducts-card-details">
//             <h4>${elem.brand_name}</h4>
//             <p class="cartproducts-card-productname">${elem.display_name}</p>
//             <p class="cartproducts-card-details-item">ITEM ${elem.product_id}</p>
//             <p class="cartproducts-card-details-size">Size: 3.3 oz/ 100 mL</p>
//             <div class="cartproducts-card-details-buttons">
//                 <select name="product-number" id="product-number">
//                     <option value="1">1</option>
//                     <option value="2">2</option>
//                     <option value="3">3</option>
//                     <option value="4">4</option>
//                     <option value="5">5</option>
//                     <option value="6">6</option>
//                     <option value="7">7</option>
//                     <option value="8">8</option>
//                     <option value="9">9</option>
//                     <option value="10">10</option>
//                 </select>
//                 <button class="cartproducts-card-details-btn"  >Move to Loves</button>
//                 <button class="cartproducts-card-details-btn" >Remove</button>
//             </div>
//         </div>
//         <div class="cartproducts-card-price">
//             <h4 class="cartProductPrice">${elem.sale_price}</h4>
//             <button class="change-method">Change Method</button>
//         </div>
        
        
//         `
        



//         document.getElementById("cartproducts").append(cartproduct_card);
//     })
// }