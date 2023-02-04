
let data = JSON.parse(localStorage.getItem("specificProduct"));
console.log('ddd', data);
if (data) {
    let star = `<div class="rating-stars">`;
    let count = Math.round(data.rating);
    for (let i = 0; i < 5; i++) {
        let url = "https://www.sephora.com/img/ufe/icons/star-outline.svg";
        if (i < count) {
            url = "https://www.sephora.com/img/ufe/icons/star.svg";
        }
        let img = `<img src= ${url} alt="" />`;
        star += img;
    }
    document.getElementsByClassName("specific-product__product-details__description__info__title")[0].textContent = data.brand_name
    document.getElementsByClassName("specific-product__product-details__description__info__heading")[0].textContent = data.display_name
    document.getElementsByClassName("specific-product__product-details__showcase__hero__img")[0].src = data.hero_img;
    document.getElementsByClassName("specific-product__product-details__description__info__popularity__rating")[0].innerHTML += star;
    document.getElementsByClassName("specific-product__product-details__description__info__price")[0].textContent = data.list_price;
}