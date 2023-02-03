


function createAddress(fname,lname,phone,address,zip){
    this.fname = fname;
    this.lname = lname;
    this.phone = phone;
    this.address = address;
    this.zip = zip;
}



document.getElementById("checkout-saveContinue").addEventListener("click",saveAddress);


function saveAddress(){
    let fname = document.getElementById("checkout-fname").value;
    let lname = document.getElementById("checkout-lname").value;
    let phone = document.getElementById("checkout-phone").value;
    let address = document.getElementById("checkout-address").value;
    let zip = document.getElementById("checkout-zip").value;
    let curraddress = new createAddress(fname,lname,phone,address,zip);
    localStorage.setItem("sephora-checkoutAddress",JSON.stringify(curraddress));
    document.getElementById("checkout-form-container").style.display = "none";
    document.getElementById("checkout-saveContinue").style.display = "none";
    document.getElementById("toshow").style.display = "block"
}

function extractAddress(){
    let extracedAddress = JSON.parse(localStorage.getItem("sephora-checkoutAddress"))
    document.getElementById("localStored-name").innerText = `${extracedAddress.fname} ${extracedAddress.lname}`;
    document.getElementById("localStored-phone").innerText = extracedAddress.phone;
    document.getElementById("localStored-address").innerText = extracedAddress.address;
    document.getElementById("localStored-zip").innerText = extracedAddress.zip;
}

extractAddress();

// document.getElementById("final-saveContinue").addEventListener("click")


cartTotal = JSON.parse(localStorage.getItem("sephoraCartTotal"));
document.querySelector(".cart-subtotal").innerText = `$ ${cartTotal}`;
document.getElementById("cart-subtotal-h").innerText = `$ ${cartTotal}`;
let right_promocode = document.getElementById("right-promocode");
right_promocode.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      if(right_promocode.value==="hera pheri"){
        let promocode_show = document.getElementById("promocode-show");
        promocode_show.innerText = "promo code applied";
        promocode_show.setAttribute("id","promocode-applied");
        cartTotal = cartTotal - 50;
        document.querySelector(".cart-subtotal").innerText = `$ ${cartTotal}`;
        document.getElementById("cart-subtotal-h").innerText = `$ ${cartTotal}`;
        localStorage.setItem("sephoraCartTotal",JSON.stringify(cartTotal));
      }
    }
  });





