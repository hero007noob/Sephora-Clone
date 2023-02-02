export default class Quicklook{
    constructor(title, heading, subtitle, para, price){
        this.title = title;
        this.heading = heading;
        this.subtitle = subtitle;
        this.para = para;
        this.price = price;
        this.isVisible = true;
        this.addToBasketCB = ()=>{console.log('Added to basket')}
    }
    addRatings(rating, reviews){
        this.rating = rating;
        this.reviews = reviews;
        const elem = this.createElementFromHTML(this.renderElement());
        console.log(elem);
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
          return (elem.innerHTML);
    }
    showElement(){
        this.isVisible = true;
        return this.addRatings(this.rating, this.reviews);
    }
    hideElement(){
        this.isVisible = false;
        return this.addRatings(this.rating, this.reviews);
    }
    renderElement(){
        const markup = `
        <div>
        <style>
        @import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,500;1,300&family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
  
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Roboto", sans-serif;
        }
  
        .quicklook {
          width: 100vw;
          height: 100vh;
          display: ${this.isVisible?"flex":"none"};
          justify-content: center;
          align-items: center;
        }
  
        .quicklook__overlay {
          width: 100vw;
          height: 100vh;
          position: fixed;
          top: 0;
          left: 0;
          z-index: -1;
        }
  
        .quicklook__card {
          width: 95%;
          display: flex;
          background-color: white;
          padding: 30px;
          border-radius: 8px;
          box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        }
  
        .quicklook__card__display {
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }
  
        .quicklook__card__display__img {
          width: 300px;
          height: 300px;
        }
  
        .quicklook__card__display__data {
          font-size: 0.7rem;
          font-weight: 700;
        }
  
        .quicklook__card__details {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
        }
  
        .quicklook__card__details__description {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
  
        .quicklook__card__details__description__title {
          font-size: 0.9rem;
          font-weight: 500;
        }
  
        .quicklook__card__details__description__heading {
          font-weight: 400;
          font-size: 1rem;
        }
  
        .quicklook__card__details__description__subtitle {
          font-weight: 300;
          font-size: 0.8rem;
          color: rgb(139, 139, 139);
        }
  
        .quicklook__card__details__description__para {
          font-weight: 400;
          font-size: 0.9rem;
          letter-spacing: 1px;
        }
  
        .quicklook__card__details__alternatives {
          display: flex;
          flex-direction: column;
        }
  
        .quicklook__card__details__alternatives__title {
          font-weight: 400;
          font-size: 0.9rem;
          letter-spacing: 1px;
        }
  
        .quicklook__card__details__alternatives__images {
          display: flex;
          gap: 5px;
          flex-wrap: wrap;
        }
  
        .quicklook__card__details__alternatives__images__image-cirular {
          border-radius: 50%;
          padding: 1px;
          border: 2px solid white;
        }
  
        .quicklook__card__details__alternatives__images__image-cirular:hover {
          border: 2px solid black;
        }
  
        .quicklook__card__details__cta {
          display: flex;
          flex-direction: column;
          width: 100%;
        }
  
        .quicklook__card__details__cta__title {
          font-weight: 500;
          font-size: 1.3rem;
        }
  
        .quicklook__card__details__cta__buttons {
          display: flex;
          gap: 10px;
          justify-content: flex-end;
        }
  
        .quicklook__card__details__cta__buttons__button {
          padding: 10px 25px;
          border-radius: 50px;
          border: 2px solid rgb(226, 3, 15);
          background-color: rgb(226, 3, 15);
          color: white;
        }
  
        .--is-outline {
          border: 2px solid black;
          background-color: white;
          color: black;
        }
  
        .quicklook__card__display{
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
  
        .quicklook__card__display__data{
          display: flex;
          gap: 10px;
        }
  
        .quicklook__card__display__data img {
          width: 14px;
        }
  
        .quicklook__card__display__data__rating{
          display: flex;
          gap: 5px;
          align-items: center;
        }
  
        .quicklook__card__display__data__loves{
          display: flex;
          gap: 5px;
          align-items: center;
        }
        @media only screen and (max-width: 800px){
          .quicklook__overlay{
              display: none;
          }
          .quicklook__card{
              flex-direction: column;
              justify-content: flex-start;
          }
        }
      </style>
      <section class="quicklook">
        <div class="quicklook__overlay"></div>
        <div class="quicklook__card">
          <div class="quicklook__card__display">
            <img
              class="quicklook__card__display__img"
              src="https://www.sephora.com/productimages/sku/s2518959-main-zoom.jpg?imwidth=600"
              alt=""
              srcset=""
            />
            <div class="quicklook__card__display__data">
              <div class="quicklook__card__display__data__rating"></div>
              <div class="quicklook__card__display__data__loves">
                  <img src="https://freesvg.org/img/heart-15.png" alt=""> 161.5K loves
              </div>
            </div>
          </div>
          <div class="quicklook__card__details">
            <div class="quicklook__card__details__description">
              <p class="quicklook__card__details__description__title">
                ${this.title}
              </p>
              <p class="quicklook__card__details__description__heading">
                ${this.heading}
              </p>
              <p class="quicklook__card__details__description__subtitle">
                ${this.subtitle}
              </p>
              <p class="quicklook__card__details__description__para">
                ${this.para}
              </p>
            </div>
            <div class="quicklook__card__details__alternatives">
              <p class="quicklook__card__details__alternatives__title">
                Color: Mesmerize - rose bronze (Selena's go-to shade)
              </p>
              <div class="quicklook__card__details__alternatives__images">
                <img
                  src="https://www.sephora.com/productimages/sku/s2541019+sw.jpg"
                  class="quicklook__card__details__alternatives__images__image-cirular"
                />
                <img
                  src="https://www.sephora.com/productimages/sku/s2541019+sw.jpg"
                  class="quicklook__card__details__alternatives__images__image-cirular"
                />
                <img
                  src="https://www.sephora.com/productimages/sku/s2541019+sw.jpg"
                  class="quicklook__card__details__alternatives__images__image-cirular"
                />
                <img
                  src="https://www.sephora.com/productimages/sku/s2541019+sw.jpg"
                  class="quicklook__card__details__alternatives__images__image-cirular"
                />
                <img
                  src="https://www.sephora.com/productimages/sku/s2541019+sw.jpg"
                  class="quicklook__card__details__alternatives__images__image-cirular"
                />
                <img
                  src="https://www.sephora.com/productimages/sku/s2541019+sw.jpg"
                  class="quicklook__card__details__alternatives__images__image-cirular"
                />
                <img
                  src="https://www.sephora.com/productimages/sku/s2541019+sw.jpg"
                  class="quicklook__card__details__alternatives__images__image-cirular"
                />
                <img
                  src="https://www.sephora.com/productimages/sku/s2541019+sw.jpg"
                  class="quicklook__card__details__alternatives__images__image-cirular"
                />
                <img
                  src="https://www.sephora.com/productimages/sku/s2541019+sw.jpg"
                  class="quicklook__card__details__alternatives__images__image-cirular"
                />
                <img
                  src="https://www.sephora.com/productimages/sku/s2541019+sw.jpg"
                  class="quicklook__card__details__alternatives__images__image-cirular"
                />
                <img
                  src="https://www.sephora.com/productimages/sku/s2541019+sw.jpg"
                  class="quicklook__card__details__alternatives__images__image-cirular"
                />
                <img
                  src="https://www.sephora.com/productimages/sku/s2541019+sw.jpg"
                  class="quicklook__card__details__alternatives__images__image-cirular"
                />
                <img
                  src="https://www.sephora.com/productimages/sku/s2541019+sw.jpg"
                  class="quicklook__card__details__alternatives__images__image-cirular"
                />
              </div>
            </div>
            <div class="quicklook__card__details__cta">
              <p class="quicklook__card__details__cta__title">₹ ${this.price}</p>
              <div class="quicklook__card__details__cta__buttons">
                <button class="quicklook__card__details__cta__buttons__button">
                  Add to Basket
                </button>
                <button
                  class="quicklook__card__details__cta__buttons__button --is-outline"
                >
                  Add to Loves
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
        `;
        this.markup = markup;
        return markup;
    }
    createElementFromHTML(htmlString) {
        var div = document.createElement('div');
        div.innerHTML = htmlString.trim();
      
        // Change this to div.childNodes to support multiple top-level nodes.
        return div.firstChild;
      }
}