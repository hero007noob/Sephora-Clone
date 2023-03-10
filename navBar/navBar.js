export default class Navbar {
  constructor() {
  }
  renderElement() {
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
      .navBar {
        display: flex;
        background-color: white;
        padding: 30px;
        /* height: 50px; */
      }
      .navBar_icon {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
      }
      .navBar_search {
        flex: 2.5;
        background-color: rgba(0,0,0,0.05);
        border-radius: 30px;
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 1px 10px;
      }
      .navBar_search input {
        width: calc(100% - 48px);
        padding: 10px 5px;
        background-color: transparent;
        border: none;
      }
      .navBar_descriptiveButtons {
        flex: 4;
        display: flex;
        /* background-color: red; */
        justify-content: space-around;
      }
      .navBar_descriptiveButton {
        flex: 1;
        display: flex;
        justify-content: center;
        gap: 10px;
        align-items: center;
        position: relative;
      }
      .navBar_descriptiveButton_dropdown{
          position: absolute;
          top: 50px;
          height: 0;
          overflow: hidden;
          width: 400px;
          background-color: white;
          box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
          border-radius: 8px;
          transition: all 0.3s;
          padding: 0;
          padding-top: 0;
      }
      .navBar_descriptiveButton_dropdown_sticky{
          background-color: white;
          position: sticky;
          padding-top: 10px;
          top: 0;
      }
      .navBar_descriptiveButton:hover .navBar_descriptiveButton_dropdown{
          height: fit-content;
          overflow-y: scroll;
          padding: 20px;
          padding-top: 0;
      }
      .navBar_descriptiveButton_dropdown_top{
          display: flex;
          gap: 20px;
          align-items: center;
      }
      .navBar_descriptiveButton_dropdown_top_icons{
          display: flex;
          gap: 10px;
      }
      .navBar_descriptiveButton_dropdown_top_text p:nth-child(1){
          font-weight: 500;
      }
      .navBar_descriptiveButton_dropdown_top_text p:nth-child(2){
          font-weight: 400;
          font-size: 0.7rem;
      }
      .navBar_descriptiveButton_dropdown_bigbuttons{
          padding: 5px;
          display: flex;
          gap: 10px;
          padding-bottom: 10px;
          /* justify-content: space-evenly; */
      }
      .navBar_descriptiveButton_dropdown_bigbuttons button{
          padding: 5px 10px;
          width: 100%;
          border-radius: 70px;
      }
      .navBar_descriptiveButton_dropdown_bigbuttons button:nth-child(1){
          border: 2px solid black;
          background-color: black;
          color: white;
      }
      .navBar_descriptiveButton_dropdown_bigbuttons button:nth-child(2){
          border: 2px solid black;
          background-color: white;
          color: black;
      }
      .navBar_descriptiveButton_dropdown_buttons{
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding-top: 15px;
          border-top: 1px solid #000;
      }
      .navBar_descriptiveButton_dropdown_button{
          display: flex;
          align-items: center;
          padding-bottom: 15px;
          border-bottom: 1px solid #000;
          gap: 10px;
      }
      .navBar_descriptiveButton_dropdown_button_right p:nth-child(1){
          font-weight: 400;
          font-size: 0.9rem;
      }
      .navBar_descriptiveButton_dropdown_button_right p:nth-child(2){
          font-weight: 400;
          font-size: 0.7rem;
          color: rgb(121, 121, 121);
      }
      .navBar_descriptiveButton_dropdown_section{
          display: flex;
          flex-direction: column;
          gap: 10px;
      }
      .navBar_descriptiveButton_dropdown_section p{
          font-weight: 300;
      }
      .navBar_descriptiveButton_dropdown_section p:nth-child(1){
          font-weight: 700;
      }
      .navBar_buttons {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
      }
      .navBar_buttons_number {
        position: relative;
      }
      #navBar_button_cartCount {
        position: absolute;
        background-color: brown;
        font-size: 0.7rem;
        color: white;
        padding: 2px 6px;
        border-radius: 60%;
        top: -5px;
        right: -5px;
      }
      .navBar_descriptiveButton_right p:nth-child(2) {
        font-size: 0.8rem;
        color: gray;
      }
      .navBar_categories {
        background-color: black;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        overflow-x: scroll;
      }
      .navBar_categories_button {
        color: white;
        text-decoration: none;
        padding: 10px;
        background-color: transparent;
        font-weight: 200;
        white-space: nowrap;
      }
      .navBar_bottom{
        background-color: white;
        border-top: 1px solid rgb(190, 190, 190);
        width: 100%;
        /* position: absolute; */
        bottom: 0;
        display: none;
        justify-content: space-evenly;
        padding: 10px;
        position: fixed;
      }
      .navBar_bottom_button{
        display: flex;
        flex-direction: column;
        /* background-color: brown; */
        justify-content: center;
        align-items: center;
      }

      .bottom-navbar{
          height: fit-content;
          width: 100%;
          position: fixed;
          display: none;
          bottom: 65px;
          left: 0;
          /* background-color: aqua; */
          padding: 10px;
          z-index: -50;
          /* left: 0; */
      }
      .navBar_bottom_overlay{
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        display: none;
      }
      @media only screen and (max-width: 1000px) {
        body {
          /* background-color: aqua; */
        }
        .navBar_descriptiveButtons {
          display: none;
        }
        .navBar_categories {
          background-color: white;
          padding: 5px;
          border-top: 1px solid rgb(210, 210, 210);
          border-bottom: 1px solid rgb(210, 210, 210);
          font-size: 0.8rem;
        }
        .navBar_categories::-webkit-scrollbar {
          display: none;
        }
        .navBar_descriptiveButton_dropdown{
          top: initial;
        }
        .navBar_categories_button {
          background-color: white;
          color: black;
          padding: 5px;
          box-shadow: 0 0 6px rgb(0 0 0 / 20%);
          border-radius: 4px;
        }
        .navBar_bottom{
            display: flex;
        }
      }
    </style>
  <section class="navBar">
    <div class="navBar_icon">
      <svg
        width="120px"
        viewBox="0 0 125 17"
        data-at="sephora_logo_ref"
        class="css-jlyw9s e65zztl0"
        data-comp="StyledComponent BaseComponent "
      >
        <path
          fill-rule="evenodd"
          d="M8.94 1.645s-.05.142-.747 2.032c-1.992-1.586-5.33-1.47-5.33.97 0 2.861 6.972 2.502 6.755 7.61C9.445 16.36 4.395 17.302.5 15.326c.34-.723.694-1.42.936-1.99 2.945 1.741 5.481.943 5.898-.458C8.473 9.044.53 10.228.53 4.793c0-2.286 2.647-5.84 8.41-3.148ZM16.465 1.33h9.124s-.027.822-.01 1.991H18.75v4.082h4.844c-.017.814-.008 1.453-.008 1.873H18.75v5.088h6.83a104.28 104.28 0 0 0 0 1.954h-9.106L16.465 1.33ZM38.195 8.675c-.55 0-.958-.006-1.516-.009 0-2.796.005-5.41.005-5.41s.666-.003 1.295-.003c.602 0 4.106-.273 4.22 2.523.11 2.757-2.648 2.9-4.004 2.9Zm.136-7.316c-.81-.02-2.501-.029-3.945-.029l.005 14.988h2.296s-.007-2.861-.008-5.682c.569-.01 1.75-.041 2.705-.068 1.323-.04 4.8-.701 4.776-4.811-.027-4.62-5.025-4.38-5.83-4.398ZM97.183 8.268c-.536 0-.923-.01-1.466-.014.002-2.632.008-5.058.008-5.058s.628-.009 1.236-.009c.58 0 3.685-.175 3.948 2.267.312 2.885-3.092 2.814-3.726 2.814Zm5.053 8.05h2.854l-4.737-6.725c1.275-.469 2.753-1.557 2.566-4.043-.334-4.454-4.686-4.124-5.618-4.167-.785-.037-2.475-.059-3.94-.052v14.987h2.364s-.007-3.354-.009-6.318c.784.003 1.064-.011 2.246-.042l4.274 6.36ZM61.063 6.976V1.33h2.321v14.336h-2.322V8.851l-7.738.01v6.805h-2.321V1.33h2.32v5.646h7.74ZM79.167.68c-4.823 0-7.963 3.501-7.963 7.82 0 4.319 3.14 7.82 7.963 7.82s7.962-3.501 7.962-7.82c0-4.319-3.14-7.82-7.962-7.82Zm0 2.128c-3.536 0-5.544 2.548-5.544 5.691 0 3.144 1.988 5.692 5.544 5.692 3.555 0 5.543-2.548 5.543-5.692 0-3.143-2.008-5.691-5.543-5.691Zm36.209 7.99 4.935-.03-2.507-7.306h-.033l-2.395 7.336Zm1.084-9.688h2.745l5.435 14.855-2.43-.006s-.537-1.499-1.253-3.484l-6.13.038s-.246.764-.977 3.447h-2.343l4.953-14.85Z"
        ></path>
      </svg>
    </div>
    <div class="navBar_search">
      <svg
        width="15px"
        viewBox="0 0 24 24"
        data-at="search_icon"
        class="css-15a1208 e65zztl0"
        aria-hidden="true"
        data-comp="Icon StyledComponent "
        style=""
      >
        <path
          d="M9 0a9 9 0 019 9c0 2.215-.8 4.243-2.127 5.81l7.906 7.909h.002a.752.752 0 010 1.062.752.752 0 01-1.062 0l-7.907-7.909A8.964 8.964 0 019 18a9 9 0 01-9-9 9 9 0 019-9zm0 1.5A7.499 7.499 0 001.5 9c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5S13.143 1.5 9 1.5z"
        ></path>
      </svg>
      <input class="navBar_input" type="text" placeholder="Search" />
    </div>
    <div class="navBar_descriptiveButtons">
      <div class="navBar_descriptiveButton"><!-- Stores & Services -->
        <svg
          height="24px"
          viewBox="0 0 24 24"
          style="opacity: 0.6"
          aria-hidden="true"
          class="css-3a5k3u e65zztl0"
          data-comp="Icon StyledComponent "
        >
          <g>
            <path
              d="M1.5 24a.5.5 0 01-.5-.5v-20a.5.5 0 01.5-.5h21a.5.5 0 01.5.5v20a.5.5 0 01-.5.5h-21zM22 23V4H2v19h20z"
            ></path>
            <path d="M0 23h24v1H0z"></path>
            <path
              d="M7.5 24a.5.5 0 01-.5-.5v-10a.5.5 0 01.5-.5h9a.5.5 0 01.5.5v10a.5.5 0 01-.5.5h-9zm8.5-1v-9H8v9h8z"
            ></path>
            <path
              d="M11.5 13h1v11h-1zM1 6V5h22v1zm0 2V7h22v1zm0 2V9h22v1z"
            ></path>
          </g>
        </svg>
        <div class="navBar_descriptiveButton_right">
          <p>Stores & Services</p>
          <p>Choose Your Store</p>
        </div>
        <div class="navBar_descriptiveButton_dropdown">
          <!-- Stores -->
          <div class="navBar_descriptiveButton_dropdown_sticky">
              
              <div style="max-width: 200px; margin: auto;" class="navBar_descriptiveButton_dropdown_bigbuttons">
                  <button>Choose Your Store</button>
              </div>
          </div>
          <div class="navBar_descriptiveButton_dropdown_buttons">
            <p>Happening at Sephora</p>
              <div class="navBar_descriptiveButton_dropdown_button">
                  <img width="50px" src="https://www.sephora.com/contentimages/meganav/icons/happening_services.jpg" alt="">
                  <div class="navBar_descriptiveButton_dropdown_button_right">
                      <p>Services</p>
                      <p>Personalized makeup, skincare and brow services</p>
                  </div>
              </div>
              <div class="navBar_descriptiveButton_dropdown_button">
                  <img width="50px" src="https://www.sephora.com/contentimages/meganav/icons/happening_events_2.jpg" alt="">
                  <div class="navBar_descriptiveButton_dropdown_button_right">
                      <p>Store Events</p>
                      <p>Exciting launches, parties and more!</p>
                  </div>
              </div>
              <div class="navBar_descriptiveButton_dropdown_button">
                  <img width="50px" src="https://www.sephora.com/contentimages/meganav/icons/happening_new.jpg" alt="">
                  <div class="navBar_descriptiveButton_dropdown_button_right">
                      <p>What's New in Store</p>
                      <p>Explore what's hot in your store</p>
                  </div>
              </div> 
          </div>
        </div>
      </div>
      <div class="navBar_descriptiveButton"><!-- Community -->
        <svg width="24px" viewBox="0 0 24 24" style="opacity:0.6" aria-hidden="true" class="css-7auic7 e65zztl0" data-comp="Icon StyledComponent "><path d="M3.5 3.914H3v-.5a.5.5 0 0 0-1 0v.5h-.5a.5.5 0 1 0 0 1H2v.5a.5.5 0 1 0 1 0v-.5h.5a.5.5 0 0 0 0-1m5.707 1.5.354-.354a.5.5 0 0 0-.708-.707l-.353.354-.354-.354a.5.5 0 0 0-.707.707l.354.354-.354.354a.5.5 0 0 0 .707.707L8.5 6.12l.353.354a.5.5 0 1 0 .708-.707l-.354-.354v.001Zm-3.639-2.5a.509.509 0 0 1-.51-.5c0-.276.214-.5.49-.5h.02a.5.5 0 0 1 0 1m16 5a.509.509 0 0 1-.51-.5c0-.276.214-.5.49-.5h.02a.5.5 0 1 1 0 1M4 22.364c0-.17.013-.334.025-.5H1.038c.275-1.764 2.014-2.695 3.952-2.933.239-.381.515-.738.825-1.061C2.891 17.926 0 19.32 0 22.364a.5.5 0 0 0 .5.5h3.592c-.06-.16-.09-.33-.092-.5m15-10.5c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2m0 5c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3m-14-5c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2m0 5c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3m13.185 1.006c.31.323.586.68.825 1.062 1.939.237 3.676 1.168 3.95 2.932h-2.985c.013.166.025.33.025.5 0 .176-.036.343-.091.5h3.59c.277 0 .5-.223.5-.5 0-3.044-2.89-4.438-5.814-4.494M6.027 22h11.878c-.25-2.247-2.16-4-4.473-4H10.5a4.507 4.507 0 0 0-4.473 4m12.405 1H5.5a.5.5 0 0 1-.5-.5c0-3.033 2.467-5.5 5.5-5.5h2.932c3.033 0 5.5 2.467 5.5 5.5a.5.5 0 0 1-.5.5m-6.499-13c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2m0 5c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3m4.191-13c-.308 0-.585.118-.725.258a.876.876 0 0 0-.313.645c-.021.345.104.714.31.92.455.562 1.336 1.346 2.082 1.955.475-.388 1.542-1.284 2.045-1.914a1.29 1.29 0 0 0 .349-.96c-.009-.154-.056-.437-.271-.608a.409.409 0 0 1-.044-.039c-.168-.169-.54-.308-.925-.239a.917.917 0 0 0-.701.532c-.164.351-.741.351-.905 0a.915.915 0 0 0-.7-.532A1.076 1.076 0 0 0 16.124 2Zm1.355 4.866a.689.689 0 0 1-.434-.153c-.401-.32-1.753-1.426-2.393-2.224-.371-.368-.601-1.013-.564-1.644.032-.553.262-1.027.647-1.332.388-.394 1.097-.597 1.763-.48.381.066.714.228.98.471a1.94 1.94 0 0 1 .982-.472c.66-.114 1.352.081 1.784.5.373.305.595.771.626 1.314.036.631-.194 1.276-.602 1.684-.607.762-1.956 1.864-2.354 2.182a.697.697 0 0 1-.435.154Z"></path></svg>
        <div class="navBar_descriptiveButton_right">
          <p>Community</p>
        </div>
        <div class="navBar_descriptiveButton_dropdown">
          <!-- Community -->
          <div class="navBar_descriptiveButton_dropdown_sticky">
              <div class="navBar_descriptiveButton_dropdown_top">
                  <img width="50px" height="50px" src="https://www.sephora.com/img/ufe/icons/me-active.svg" alt="" srcset="">
                  <div class="navBar_descriptiveButton_dropdown_top_text">
                      <p>Good morning, Beautiful. ??????</p>
                      <p>Sign in for <b>FREE standard shipping</b> on all orders.</p>
                  </div>
                  <div class="navBar_descriptiveButton_dropdown_top_icons">
                      <svg width="24px" viewBox="0 0 24 24" aria-hidden="true" class="css-psp8z9 eanm77i0" data-comp="Icon StyledComponent "><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M11.04 17.9c-.353 0-.64.268-.64.6 0 .828.718 1.5 1.6 1.5.883 0 1.6-.672 1.6-1.5 0-.332-.286-.6-.64-.6h-1.92z" fill="currentColor" fill-rule="nonzero"></path><path d="M11.899 4.55c-.981.18-2.426.71-3.46 1.722-.71.692-1.221 1.618-1.221 2.826v4.265l-2.72 3.912h15.046l-2.762-3.853V9.098c0-1.228-.53-2.164-1.27-2.86-1.057-.992-2.534-1.51-3.613-1.688z" stroke="currentColor" stroke-width="1.067" stroke-linejoin="round"></path></g></svg>
                      <svg width="24px" viewBox="0 0 24 24" aria-hidden="true" class="css-psp8z9 eanm77i0" data-comp="Icon StyledComponent "><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M20.625 5.389V18.61H3.375V5.39z" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4 8l8 6 8-6"></path></g></svg>
                  </div>
              </div>
              <div class="navBar_descriptiveButton_dropdown_bigbuttons">
                  <button>Sign In</button>
                  <button>Create Account</button>
              </div>
          </div>
          <div class="navBar_descriptiveButton_dropdown_buttons">
              <div class="navBar_descriptiveButton_dropdown_button">
                  <img width="50px" src="https://www.sephora.com/contentimages/meganav/icons/community_home.jpg" alt="">
                  <div class="navBar_descriptiveButton_dropdown_button_right">
                      <p>Community Home</p>
                      <p>Ask questions, join challenges, and get recommendations from people like you</p>
                  </div>
              </div>
              <div class="navBar_descriptiveButton_dropdown_button">
                  <img width="50px" src="https://www.sephora.com/contentimages/meganav/icons/community_groups.jpg" alt="">
                  <div class="navBar_descriptiveButton_dropdown_button_right">
                      <p>Groups</p>
                      <p>Discover topics tailored to your beauty interests</p>
                  </div>
              </div>
              <div class="navBar_descriptiveButton_dropdown_button">
                  <img width="50px" src="https://www.sephora.com/contentimages/meganav/icons/community_gallery.jpg" alt="">
                  <div class="navBar_descriptiveButton_dropdown_button_right">
                      <p>Gallery</p>
                      <p>Add your photos and get inspired by fellow beauty lovers</p>
                  </div>
              </div> 
              <div class="navBar_descriptiveButton_dropdown_section">
                  <p>Fetured Groups</p>
                  <p>Trending at Sephora</p>
                  <p>Clean Beauty</p>
                  <p>Wellness Warriors</p>
              </div>
              <div class="navBar_descriptiveButton_dropdown_section">
                  <p>Featured Threads</p>
                  <p>Join our Self-Care Challenge</p>
                  <p>Tell us your Favorite Black-Owned Beauty Brands</p>
                  <p>Monthly Faves: Share your Top Products!</p>
              </div>
          </div>
        </div>
      </div>
      <div class="navBar_descriptiveButton"> <!-- Sign In -->
          <svg width="24px" viewBox="0 0 24 24" aria-hidden="true" class="css-7auic7 eanm77i0" data-comp="Icon StyledComponent " style="opacity: 0.6;"><g><path d="M12.388.006c6.296.212 11.419 5.33 11.606 11.594.213 6.93-5.443 12.607-12.38 12.394C5.317 23.782.195 18.664.007 12.4-.229 5.57 5.287-.042 12.087 0l.301.005v.001Zm-.031 1.01C5.998.82.797 6.024 1.017 12.37c.171 5.73 4.866 10.418 10.628 10.614 6.35.195 11.534-5 11.338-11.354-.167-5.633-4.707-10.26-10.323-10.6l-.303-.014v.002Z"></path><path d="M16.007 5.02c.027 0 .027.026.053.026.374 1.786 1.334 4.08 3.76 5.013.347 1.44.32 3.04-.187 4.666-.666 2.001-2.852 4.214-4.852 4.881-4.56 1.546-8.827-.88-10.293-4.72 5.52-1.253 5.093-7.707 5.093-7.707l.03.112c.117.437.5 2.087.157 3.755 4.613-.08 5.893-3.76 6.24-6.027h-.001Zm.13 3.119-.072.146c-1.123 2.26-3.144 3.717-6.28 3.771-.04 0-.08 0-.12-.005l-.075-.012c-.745 1.512-1.887 2.681-3.463 3.37l-.235.097.053.091c1.617 2.77 4.92 4.149 8.271 3.129l.245-.079c1.69-.563 3.646-2.533 4.208-4.222a7.845 7.845 0 0 0 .29-3.516l-.025-.133-.228-.117c-1.034-.553-1.84-1.344-2.446-2.314l-.124-.206Z"></path><path d="M14.674 17.125c-.054 0-.106.028-.16.028-.56.08-1.093-.108-1.546-.454a.637.637 0 0 0-.374-.134c-.213 0-.374.108-.507.24a.596.596 0 0 0-.48-.266.578.578 0 0 0-.373.134c-.454.346-.986.56-1.546.452-.054 0-.107-.026-.16-.026l-.027.054.533.373c.774.56 1.734.799 2.64.613h.026c.347-.08.694-.212 1.014-.4l.987-.586-.027-.028Zm4.774-4.693v-.026c-1.68-.027-2.134-1.2-2.16-1.253-.48.986-2.934 1.333-3.708.053l-.16.08c.134.266.268 1.573 2.188 2.693v-.027c-.56-.4-.667-.986-.641-1.573.64.854 1.68 1.414 2.053 1.414v-.028c-.693-.24-.96-.853-1.066-1.44.827.72 2.026.988 2.373.908v-.028c-.986-.133-1.226-.613-1.36-1.172.933.505 2.16.56 2.48.4Z"></path></g></svg>
        <div class="navBar_descriptiveButton_right">
          <p>Sign In</p>
          <p>for FREE Shipping ????</p>
        </div>
        <div class="navBar_descriptiveButton_dropdown">
          <div class="navBar_descriptiveButton_dropdown_sticky">
              <div class="navBar_descriptiveButton_dropdown_top">
                  <img width="50px" height="50px" src="https://www.sephora.com/img/ufe/icons/me-active.svg" alt="" srcset="">
                  <div class="navBar_descriptiveButton_dropdown_top_text">
                      <p>Good morning, Beautiful. ??????</p>
                      <p>Sign in for <b>FREE standard shipping</b> on all orders.</p>
                  </div>
              </div>
              <div class="navBar_descriptiveButton_dropdown_bigbuttons">
                  <button>Sign In</button>
                  <button>Create Account</button>
              </div>
          </div>
          <div class="navBar_descriptiveButton_dropdown_buttons">
              <div class="navBar_descriptiveButton_dropdown_button">
                  <img width="24px" src="https://www.sephora.com/img/ufe/icons/beauty-traits.svg" alt="">
                  <div class="navBar_descriptiveButton_dropdown_button_right">
                      <p>Beauty Preferences</p>
                      <p>Complete to see your personalized recommendations</p>
                  </div>
              </div>
              <div class="navBar_descriptiveButton_dropdown_button">
                  <img width="24px" src="https://www.sephora.com/img/ufe/icons/subscription.svg" alt="">
                  <div class="navBar_descriptiveButton_dropdown_button_right">
                      <p>Buy It Again</p>
                      <p>Reorder from in-store and online purchases</p>
                  </div>
              </div>
              <div class="navBar_descriptiveButton_dropdown_button">
                  <img width="24px" src="https://www.sephora.com/img/ufe/icons/track.svg" alt="">
                  <div class="navBar_descriptiveButton_dropdown_button_right">
                      <p>Orders</p>
                      <p>View & track online or pickup orders</p>
                  </div>
              </div>
              <div class="navBar_descriptiveButton_dropdown_button">
                  <img width="24px" src="https://www.sephora.com/img/ufe/icons/auto-replenish.svg" alt="">
                  <div class="navBar_descriptiveButton_dropdown_button_right">
                      <p>Auto-Replenish</p>
                      <p>View and manage your subscriptions</p>
                  </div>
              </div>
              <div class="navBar_descriptiveButton_dropdown_button">
                  <img width="24px" src="https://www.sephora.com/img/ufe/icons/heart.svg" alt="">
                  <div class="navBar_descriptiveButton_dropdown_button_right">
                      <p>Loves</p>
                      <p>View saved products</p>
                  </div>
              </div>
              <div class="navBar_descriptiveButton_dropdown_button">
                  <img width="24px" src="https://www.sephora.com/img/ufe/icons/account.svg" alt="">
                  <div class="navBar_descriptiveButton_dropdown_button_right">
                      <p>Account Settings</p>
                      <p>Payment, contact info, addresses, password</p>
                  </div>
              </div>
              <div class="navBar_descriptiveButton_dropdown_button">
                  <img width="24px" src="https://www.sephora.com/img/ufe/icons/cc-outline.svg" alt="">
                  <div class="navBar_descriptiveButton_dropdown_button_right">
                      <p>Sephora Credit Card Program</p>
                      <p>Apply now</p>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div class="navBar_buttons">
      <div class="navBar_buttons_number">
        <!-- <div id="navBar_button_cartCount">1</div> -->
        <svg width="24px" viewBox="0 0 24 24" data-at="love_icon_small" aria-hidden="true" class="css-psp8z9 e65zztl0" data-comp="Icon StyledComponent "><path d="M22 3.1c2.7 2.2 2.6 7.2.1 9.7-2.2 2.8-7.4 8.1-9.3 9.6-.5.4-1.1.4-1.6 0-1.8-1.5-7-6.8-9.2-9.6-2.6-2.6-2.7-7.6 0-9.7C4.6.5 9.7.7 12 4.2 14.3.8 19.3.5 22 3.1zm-.7.8c-2.4-2.4-7.2-2-8.9 1.5-.1.3-.4.4-.7.2-.1 0-.2-.1-.2-.2-1.6-3.5-6.5-4-8.9-1.5C.4 5.6.5 10 2.7 12.2c2.2 2.7 7.3 8 9.1 9.4.1.1.2.1.3 0 1.8-1.4 6.9-6.7 9.1-9.5 2.3-2.1 2.4-6.5.1-8.2z"></path></svg>
      </div>
      <div class="navBar_buttons_number">
          <!-- <div id="navBar_button_cartCount">2</div> -->
        <svg width="24" height="24" fill="none" class="css-13o7eu2">
          <path
            d="m21.87 21.733.837.224-.224-.837-1.158-4.327A10.466 10.466 0 0 0 22.479 12c0-5.798-4.696-10.5-10.49-10.5C6.196 1.5 1.5 6.202 1.5 12c0 5.799 4.696 10.5 10.49 10.5 2.195 0 4.233-.676 5.918-1.83l3.962 1.063z"
            stroke="currentColor"
          ></path>
        </svg>
      </div>
      <div class="navBar_buttons_number">
          <div id="navBar_button_cartCount">0</div>
          <svg width="24px" height="24px" class="css-9uy14h"><path d="M23.498 10c.326 0 .566.28.487.57l-3.078 11.32c-.177.652-.816 1.11-1.55 1.11H4.643c-.733 0-1.371-.458-1.55-1.11L.015 10.57c-.079-.29.16-.57.487-.57h22.996zm-3.112 9.999H3.613l.453 1.668a.588.588 0 0 0 .576.414h14.716c.271 0 .509-.17.575-.414L20.386 20zm.815-3H2.797l.544 2h17.317l.543-2zm.816-3H1.981l.544 2h18.948l.544-2zm.839-3.08H1.144L1.71 13h20.579l.567-2.08zm-9.037-9.205l5.612 5.2a.5.5 0 1 1-.68.734l-5.612-5.2a1.674 1.674 0 0 0-2.278 0l-5.612 5.2a.5.5 0 1 1-.68-.734l5.612-5.2a2.674 2.674 0 0 1 3.638 0z"></path></svg>
      </div>
    </div>
  </section>
  <section class="navBar_categories">
    <a href="#" class="navBar_categories_button">New</a>
    <a href="#" class="navBar_categories_button">Brands</a>
    <a href="#" class="navBar_categories_button">Makeup</a>
    <a href="#" class="navBar_categories_button">Skincare</a>
    <a href="#" class="navBar_categories_button">Hair</a>
    <a href="#" class="navBar_categories_button">Fragrance</a>
    <a href="#" class="navBar_categories_button">Tools & Brushes</a>
    <a href="#" class="navBar_categories_button">Bath & Body</a>
    <a href="#" class="navBar_categories_button">Mini Size</a>
  </section>
  <section class="navBar_bottom_overlay"></section>
  <section class="navBar_bottom">
      <div class="navBar_bottom_button">
          <svg width="24px" viewBox="0 0 24 24" aria-hidden="true" class="css-7auic7 e65zztl0" data-comp="Icon StyledComponent "><path d="M22.338 7.854v-.001l-9.516-6.404a1.494 1.494 0 0 0-1.676 0L1.661 7.842A1.5 1.5 0 0 0 1 9.085V22.5A1.5 1.5 0 0 0 2.5 24h6a1.5 1.5 0 0 0 1.5-1.5v-7a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v7a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V9.098c0-.5-.248-.966-.662-1.244Z"></path></svg>
          <span>Home</span>
      </div>
      <div class="navBar_bottom_button">
          <svg height="24px" viewBox="0 0 24 24" style="opacity:0.6" aria-hidden="true" class="css-7auic7 e65zztl0" data-comp="Icon StyledComponent "><path d="M7.5 0A3.5 3.5 0 0 1 11 3.5V5h3.5c.133 0 .26.053.354.146A.504.504 0 0 1 15 5.5V11h-1V6h-3v1.5a.5.5 0 1 1-1 0V6H5v1.5a.5.5 0 0 1-1 0V6H1v16.5a.5.5 0 0 0 .5.5H8v1H1.5A1.5 1.5 0 0 1 0 22.5v-17c0-.133.053-.26.146-.354A.504.504 0 0 1 .5 5H4V3.5A3.5 3.5 0 0 1 7.5 0Zm16 12c.133 0 .26.053.354.146A.504.504 0 0 1 24 12.5v10a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 9 22.5v-10c0-.133.053-.26.146-.354A.504.504 0 0 1 9.5 12Zm-.5 1H10v9.5a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5V13Zm-3.5 2a.5.5 0 0 1 .5.5v1a3.504 3.504 0 0 1-3.5 3.5 3.504 3.504 0 0 1-3.5-3.5v-1a.5.5 0 1 1 1 0v1a2.5 2.5 0 1 0 5 0v-1a.5.5 0 0 1 .5-.5ZM7.5 1A2.5 2.5 0 0 0 5 3.5V5h5V3.5A2.5 2.5 0 0 0 7.5 1Z"></path></svg>
          <span>Shop</span>
      </div>
      <div class="navBar_bottom_button">
          <svg width="24px" viewBox="0 0 24 24" style="opacity:0.6" aria-hidden="true" class="css-7auic7 e65zztl0" data-comp="Icon StyledComponent "><g><path d="M18.346 3.988a1.959 1.959 0 0 0-2.005 1.853 1.957 1.957 0 1 0 3.912.112 1.96 1.96 0 0 0-1.907-1.965Zm-.025 1a.957.957 0 0 1 .932.955.957.957 0 0 1-1.913-.06.956.956 0 0 1 .98-.895Z"></path><path d="M21.82 1.126 13.488.91a1.47 1.47 0 0 0-1.054.405L.49 12.658a1.47 1.47 0 0 0-.055 2.08l8.118 8.55a1.472 1.472 0 0 0 2.08.051L22.58 11.995c.283-.27.448-.64.457-1.03l.216-8.331a1.469 1.469 0 0 0-1.433-1.508Zm-8.359.784 8.333.216a.47.47 0 0 1 .458.481l-.216 8.333a.47.47 0 0 1-.146.33L9.944 22.614a.472.472 0 0 1-.667-.016l-8.117-8.55a.47.47 0 0 1 .017-.664L13.124 2.04a.471.471 0 0 1 .337-.13Z"></path><path d="M14.009 9a.504.504 0 0 0-.354.146l-.35.35a2.579 2.579 0 0 0-1.286-.457 2.105 2.105 0 0 0-1.666.603c-1.047 1.046-.282 2.511.092 3.224.729 1.332.499 1.801.261 2.038a1.38 1.38 0 0 1-1.925-.176 3.434 3.434 0 0 1-.782-1.936.498.498 0 0 0-.778-.381.502.502 0 0 0-.22.45 4.59 4.59 0 0 0 .763 2.177l-.36.36a.5.5 0 1 0 .707.707l.351-.351c.423.296.927.458 1.443.463a2.107 2.107 0 0 0 1.508-.606c1.082-1.082.198-2.695-.087-3.217-.57-1.092-.646-1.666-.266-2.045.237-.23.563-.345.892-.313a1.63 1.63 0 0 1 1.033.488c.374.356.549.874.464 1.383a.503.503 0 0 0 .764.523.49.49 0 0 0 .215-.318 2.499 2.499 0 0 0-.425-1.9l.36-.359A.5.5 0 0 0 14.009 9Z"></path></g></svg>
          <span>Offers</span>
      </div>
      <div onclick="displayModal(this)" class="navBar_bottom_button"><!--ME-->
        <div class="navBar_descriptiveButton_dropdown bottom-navbar bottom-navbar">
          <div class="navBar_descriptiveButton_dropdown_sticky">
              <div class="navBar_descriptiveButton_dropdown_top">
                  <img width="50px" height="50px" src="https://www.sephora.com/img/ufe/icons/me-active.svg" alt="" srcset="">
                  <div class="navBar_descriptiveButton_dropdown_top_text">
                      <p>Good morning, Beautiful. ??????</p>
                      <p>Sign in for <b>FREE standard shipping</b> on all orders.</p>
                  </div>
              </div>
              <div class="navBar_descriptiveButton_dropdown_bigbuttons">
                  <button>Sign In</button>
                  <button>Create Account</button>
              </div>
          </div>
          <div class="navBar_descriptiveButton_dropdown_buttons">
              <div class="navBar_descriptiveButton_dropdown_button">
                  <img width="24px" src="https://www.sephora.com/img/ufe/icons/beauty-traits.svg" alt="">
                  <div class="navBar_descriptiveButton_dropdown_button_right">
                      <p>Beauty Preferences</p>
                      <p>Complete to see your personalized recommendations</p>
                  </div>
              </div>
              <div class="navBar_descriptiveButton_dropdown_button">
                  <img width="24px" src="https://www.sephora.com/img/ufe/icons/subscription.svg" alt="">
                  <div class="navBar_descriptiveButton_dropdown_button_right">
                      <p>Buy It Again</p>
                      <p>Reorder from in-store and online purchases</p>
                  </div>
              </div>
              <div class="navBar_descriptiveButton_dropdown_button">
                  <img width="24px" src="https://www.sephora.com/img/ufe/icons/track.svg" alt="">
                  <div class="navBar_descriptiveButton_dropdown_button_right">
                      <p>Orders</p>
                      <p>View & track online or pickup orders</p>
                  </div>
              </div>
              <div class="navBar_descriptiveButton_dropdown_button">
                  <img width="24px" src="https://www.sephora.com/img/ufe/icons/auto-replenish.svg" alt="">
                  <div class="navBar_descriptiveButton_dropdown_button_right">
                      <p>Auto-Replenish</p>
                      <p>View and manage your subscriptions</p>
                  </div>
              </div>
              <div class="navBar_descriptiveButton_dropdown_button">
                  <img width="24px" src="https://www.sephora.com/img/ufe/icons/heart.svg" alt="">
                  <div class="navBar_descriptiveButton_dropdown_button_right">
                      <p>Loves</p>
                      <p>View saved products</p>
                  </div>
              </div>
              <div class="navBar_descriptiveButton_dropdown_button">
                  <img width="24px" src="https://www.sephora.com/img/ufe/icons/account.svg" alt="">
                  <div class="navBar_descriptiveButton_dropdown_button_right">
                      <p>Account Settings</p>
                      <p>Payment, contact info, addresses, password</p>
                  </div>
              </div>
              <div class="navBar_descriptiveButton_dropdown_button">
                  <img width="24px" src="https://www.sephora.com/img/ufe/icons/cc-outline.svg" alt="">
                  <div class="navBar_descriptiveButton_dropdown_button_right">
                      <p>Sephora Credit Card Program</p>
                      <p>Apply now</p>
                  </div>
              </div>
          </div>
        </div>
          <svg width="24px" viewBox="0 0 24 24" aria-hidden="true" class="css-7auic7 eanm77i0" data-comp="Icon StyledComponent " style="opacity: 0.6;"><g><path d="M12.388.006c6.296.212 11.419 5.33 11.606 11.594.213 6.93-5.443 12.607-12.38 12.394C5.317 23.782.195 18.664.007 12.4-.229 5.57 5.287-.042 12.087 0l.301.005v.001Zm-.031 1.01C5.998.82.797 6.024 1.017 12.37c.171 5.73 4.866 10.418 10.628 10.614 6.35.195 11.534-5 11.338-11.354-.167-5.633-4.707-10.26-10.323-10.6l-.303-.014v.002Z"></path><path d="M16.007 5.02c.027 0 .027.026.053.026.374 1.786 1.334 4.08 3.76 5.013.347 1.44.32 3.04-.187 4.666-.666 2.001-2.852 4.214-4.852 4.881-4.56 1.546-8.827-.88-10.293-4.72 5.52-1.253 5.093-7.707 5.093-7.707l.03.112c.117.437.5 2.087.157 3.755 4.613-.08 5.893-3.76 6.24-6.027h-.001Zm.13 3.119-.072.146c-1.123 2.26-3.144 3.717-6.28 3.771-.04 0-.08 0-.12-.005l-.075-.012c-.745 1.512-1.887 2.681-3.463 3.37l-.235.097.053.091c1.617 2.77 4.92 4.149 8.271 3.129l.245-.079c1.69-.563 3.646-2.533 4.208-4.222a7.845 7.845 0 0 0 .29-3.516l-.025-.133-.228-.117c-1.034-.553-1.84-1.344-2.446-2.314l-.124-.206Z"></path><path d="M14.674 17.125c-.054 0-.106.028-.16.028-.56.08-1.093-.108-1.546-.454a.637.637 0 0 0-.374-.134c-.213 0-.374.108-.507.24a.596.596 0 0 0-.48-.266.578.578 0 0 0-.373.134c-.454.346-.986.56-1.546.452-.054 0-.107-.026-.16-.026l-.027.054.533.373c.774.56 1.734.799 2.64.613h.026c.347-.08.694-.212 1.014-.4l.987-.586-.027-.028Zm4.774-4.693v-.026c-1.68-.027-2.134-1.2-2.16-1.253-.48.986-2.934 1.333-3.708.053l-.16.08c.134.266.268 1.573 2.188 2.693v-.027c-.56-.4-.667-.986-.641-1.573.64.854 1.68 1.414 2.053 1.414v-.028c-.693-.24-.96-.853-1.066-1.44.827.72 2.026.988 2.373.908v-.028c-.986-.133-1.226-.613-1.36-1.172.933.505 2.16.56 2.48.4Z"></path></g></svg>
          <span>Me</span>
      </div>
      <div onclick="displayModal(this)" class="navBar_bottom_button"><!--Community-->
          <div class="navBar_descriptiveButton_dropdown bottom-navbar">
              <!-- Community -->
              <div class="navBar_descriptiveButton_dropdown_sticky">
                  <div class="navBar_descriptiveButton_dropdown_top">
                      <img width="50px" height="50px" src="https://www.sephora.com/img/ufe/icons/me-active.svg" alt="" srcset="">
                      <div class="navBar_descriptiveButton_dropdown_top_text">
                          <p>Good morning, Beautiful. ??????</p>
                          <p>Sign in for <b>FREE standard shipping</b> on all orders.</p>
                      </div>
                      <div class="navBar_descriptiveButton_dropdown_top_icons">
                          <svg width="24px" viewBox="0 0 24 24" aria-hidden="true" class="css-psp8z9 eanm77i0" data-comp="Icon StyledComponent "><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M11.04 17.9c-.353 0-.64.268-.64.6 0 .828.718 1.5 1.6 1.5.883 0 1.6-.672 1.6-1.5 0-.332-.286-.6-.64-.6h-1.92z" fill="currentColor" fill-rule="nonzero"></path><path d="M11.899 4.55c-.981.18-2.426.71-3.46 1.722-.71.692-1.221 1.618-1.221 2.826v4.265l-2.72 3.912h15.046l-2.762-3.853V9.098c0-1.228-.53-2.164-1.27-2.86-1.057-.992-2.534-1.51-3.613-1.688z" stroke="currentColor" stroke-width="1.067" stroke-linejoin="round"></path></g></svg>
                          <svg width="24px" viewBox="0 0 24 24" aria-hidden="true" class="css-psp8z9 eanm77i0" data-comp="Icon StyledComponent "><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M20.625 5.389V18.61H3.375V5.39z" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4 8l8 6 8-6"></path></g></svg>
                      </div>
                  </div>
                  <div class="navBar_descriptiveButton_dropdown_bigbuttons">
                      <button>Sign In</button>
                      <button>Create Account</button>
                  </div>
              </div>
              <div class="navBar_descriptiveButton_dropdown_buttons">
                  <div class="navBar_descriptiveButton_dropdown_button">
                      <img width="50px" src="https://www.sephora.com/contentimages/meganav/icons/community_home.jpg" alt="">
                      <div class="navBar_descriptiveButton_dropdown_button_right">
                          <p>Community Home</p>
                          <p>Ask questions, join challenges, and get recommendations from people like you</p>
                      </div>
                  </div>
                  <div class="navBar_descriptiveButton_dropdown_button">
                      <img width="50px" src="https://www.sephora.com/contentimages/meganav/icons/community_groups.jpg" alt="">
                      <div class="navBar_descriptiveButton_dropdown_button_right">
                          <p>Groups</p>
                          <p>Discover topics tailored to your beauty interests</p>
                      </div>
                  </div>
                  <div class="navBar_descriptiveButton_dropdown_button">
                      <img width="50px" src="https://www.sephora.com/contentimages/meganav/icons/community_gallery.jpg" alt="">
                      <div class="navBar_descriptiveButton_dropdown_button_right">
                          <p>Gallery</p>
                          <p>Add your photos and get inspired by fellow beauty lovers</p>
                      </div>
                  </div> 
                  <div class="navBar_descriptiveButton_dropdown_section">
                      <p>Fetured Groups</p>
                      <p>Trending at Sephora</p>
                      <p>Clean Beauty</p>
                      <p>Wellness Warriors</p>
                  </div>
                  <div class="navBar_descriptiveButton_dropdown_section">
                      <p>Featured Threads</p>
                      <p>Join our Self-Care Challenge</p>
                      <p>Tell us your Favorite Black-Owned Beauty Brands</p>
                      <p>Monthly Faves: Share your Top Products!</p>
                  </div>
              </div>
            </div>
          <svg width="24px" viewBox="0 0 24 24" style="opacity:0.6" aria-hidden="true" class="css-7auic7 e65zztl0" data-comp="Icon StyledComponent "><path d="M3.5 3.914H3v-.5a.5.5 0 0 0-1 0v.5h-.5a.5.5 0 1 0 0 1H2v.5a.5.5 0 1 0 1 0v-.5h.5a.5.5 0 0 0 0-1m5.707 1.5.354-.354a.5.5 0 0 0-.708-.707l-.353.354-.354-.354a.5.5 0 0 0-.707.707l.354.354-.354.354a.5.5 0 0 0 .707.707L8.5 6.12l.353.354a.5.5 0 1 0 .708-.707l-.354-.354v.001Zm-3.639-2.5a.509.509 0 0 1-.51-.5c0-.276.214-.5.49-.5h.02a.5.5 0 0 1 0 1m16 5a.509.509 0 0 1-.51-.5c0-.276.214-.5.49-.5h.02a.5.5 0 1 1 0 1M4 22.364c0-.17.013-.334.025-.5H1.038c.275-1.764 2.014-2.695 3.952-2.933.239-.381.515-.738.825-1.061C2.891 17.926 0 19.32 0 22.364a.5.5 0 0 0 .5.5h3.592c-.06-.16-.09-.33-.092-.5m15-10.5c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2m0 5c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3m-14-5c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2m0 5c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3m13.185 1.006c.31.323.586.68.825 1.062 1.939.237 3.676 1.168 3.95 2.932h-2.985c.013.166.025.33.025.5 0 .176-.036.343-.091.5h3.59c.277 0 .5-.223.5-.5 0-3.044-2.89-4.438-5.814-4.494M6.027 22h11.878c-.25-2.247-2.16-4-4.473-4H10.5a4.507 4.507 0 0 0-4.473 4m12.405 1H5.5a.5.5 0 0 1-.5-.5c0-3.033 2.467-5.5 5.5-5.5h2.932c3.033 0 5.5 2.467 5.5 5.5a.5.5 0 0 1-.5.5m-6.499-13c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2m0 5c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3m4.191-13c-.308 0-.585.118-.725.258a.876.876 0 0 0-.313.645c-.021.345.104.714.31.92.455.562 1.336 1.346 2.082 1.955.475-.388 1.542-1.284 2.045-1.914a1.29 1.29 0 0 0 .349-.96c-.009-.154-.056-.437-.271-.608a.409.409 0 0 1-.044-.039c-.168-.169-.54-.308-.925-.239a.917.917 0 0 0-.701.532c-.164.351-.741.351-.905 0a.915.915 0 0 0-.7-.532A1.076 1.076 0 0 0 16.124 2Zm1.355 4.866a.689.689 0 0 1-.434-.153c-.401-.32-1.753-1.426-2.393-2.224-.371-.368-.601-1.013-.564-1.644.032-.553.262-1.027.647-1.332.388-.394 1.097-.597 1.763-.48.381.066.714.228.98.471a1.94 1.94 0 0 1 .982-.472c.66-.114 1.352.081 1.784.5.373.305.595.771.626 1.314.036.631-.194 1.276-.602 1.684-.607.762-1.956 1.864-2.354 2.182a.697.697 0 0 1-.435.154Z"></path></svg>
          <span>Community</span>
      </div>
      <div onclick="displayModal(this)" class="navBar_bottom_button"><!--Stores-->
        <div class="navBar_descriptiveButton_dropdown bottom-navbar">
          <!-- Stores -->
          <div class="navBar_descriptiveButton_dropdown_sticky">
              
              <div style="max-width: 200px; margin: auto;" class="navBar_descriptiveButton_dropdown_bigbuttons">
                  <button>Choose Your Store</button>
              </div>
          </div>
          <div class="navBar_descriptiveButton_dropdown_buttons">
            <p>Happening at Sephora</p>
              <div class="navBar_descriptiveButton_dropdown_button">
                  <img width="50px" src="https://www.sephora.com/contentimages/meganav/icons/happening_services.jpg" alt="">
                  <div class="navBar_descriptiveButton_dropdown_button_right">
                      <p>Services</p>
                      <p>Personalized makeup, skincare and brow services</p>
                  </div>
              </div>
              <div class="navBar_descriptiveButton_dropdown_button">
                  <img width="50px" src="https://www.sephora.com/contentimages/meganav/icons/happening_events_2.jpg" alt="">
                  <div class="navBar_descriptiveButton_dropdown_button_right">
                      <p>Store Events</p>
                      <p>Exciting launches, parties and more!</p>
                  </div>
              </div>
              <div class="navBar_descriptiveButton_dropdown_button">
                  <img width="50px" src="https://www.sephora.com/contentimages/meganav/icons/happening_new.jpg" alt="">
                  <div class="navBar_descriptiveButton_dropdown_button_right">
                      <p>What's New in Store</p>
                      <p>Explore what's hot in your store</p>
                  </div>
              </div> 
          </div>
        </div>
          <svg width="24px" viewBox="0 0 24 24" style="opacity:0.6" aria-hidden="true" class="css-7auic7 e65zztl0" data-comp="Icon StyledComponent "><g><path d="M1.5 24a.5.5 0 01-.5-.5v-20a.5.5 0 01.5-.5h21a.5.5 0 01.5.5v20a.5.5 0 01-.5.5h-21zM22 23V4H2v19h20z"></path><path d="M0 23h24v1H0z"></path><path d="M7.5 24a.5.5 0 01-.5-.5v-10a.5.5 0 01.5-.5h9a.5.5 0 01.5.5v10a.5.5 0 01-.5.5h-9zm8.5-1v-9H8v9h8z"></path><path d="M11.5 13h1v11h-1zM1 6V5h22v1zm0 2V7h22v1zm0 2V9h22v1z"></path></g></svg>
          <span>Stores</span>
      </div>
  </section>
  </div>
      `;
    const x = document.createElement("div");
    x.innerHTML = markup;

    // SCRIPT

    var script = document.createElement("script");
    script.innerHTML = `
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
          document.getElementById('navBar_button_cartCount').innerHTML = cart.length;
        addEventListener('storage', (event)=>{
          const cart = JSON.parse(localStorage.getItem('cart')) || [];
          document.getElementById('navBar_button_cartCount').innerHTML = cart.length;
      })
      function displayModal(e){
        document.querySelector('.navBar_bottom_overlay').style.display = "block";
        const temp = document.querySelectorAll('.bottom-navbar');
        temp.forEach((item)=>{
          item.style.display = "none";
        })
        const elem = (e.getElementsByClassName('bottom-navbar')[0]);
        elem.style.display = "block";
      }
      // close modal
      document.querySelector('.navBar_bottom_overlay').addEventListener('click', ()=>{
        const temp = document.querySelectorAll('.bottom-navbar');
        temp.forEach((item)=>{
          item.style.display = "none";
        })
        document.querySelector('.navBar_bottom_overlay').style.display = "none";
      })
        `;
    x.append(script);

    // SCRIPT

    this.markup = x;
    return x;
  }
  displayModal() {}
  createElementFromHTML(htmlString) {
    var div = document.createElement("div");
    div.innerHTML = htmlString.trim();

    // Change this to div.childNodes to support multiple top-level nodes.
    return div.childNodes;
  }
}
