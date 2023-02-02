import Quicklook from "./quicklook/quicklook.js";

const qu = new Quicklook("TTle", "HHdn", "loremp10 kjfbjkbfk", "jhewdfk wjefgkjw  gbewdfugwefd", 221);
document.querySelector('body').innerHTML = qu.addRatings(3, 332);

document.getElementsByClassName('quicklook__card__details__cta__buttons__button')[0].addEventListener('click', ()=>{
    console.log("clicked")
})