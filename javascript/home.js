let cartQuantity = JSON.parse(localStorage.getItem('Quantity')) || 0;

settingCartValue();


    
const productGridElement = document.querySelector(".product-grid-js");
let gridcode ='';
productGridElement.innerHTML =gridcode;
product.forEach((value) =>{
    gridcode +=`
    <div class="product" > 
    <div class="image-container">
        <img class="product-image" src="${value.image}" alt="">
    </div>          
    <div class="product-name">${value.name}</div>
    <div class="product-rating-container" >
        <img class="product-rating-image" src="images/ratings/rating-${(value.rating.stars)*10}.png" alt="">
        <div class="rating-count">${value.rating.count}</div>
    </div>
    <div class="product-price">$${((value.priceCents)/100).toFixed(2)}</div>
    <div class="product-quantity-container">
        <select>
          <option selected value="1">1</option>
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
      </div>
      <div class="added-to-cart-container"  >
      <img class ="check-image" src="images/icons/checkmark.png" alt="">  
      <p class ="text"> Added </p> 
      </div>
    <button class="add-to-cart-button add-to-cart-button-js"> Add to cart</button>
    </div>
    `;
    productGridElement.innerHTML =gridcode;
})

const addButton = document.querySelectorAll(".add-to-cart-button-js")
addButton.forEach((button) =>{
    button.addEventListener('click', () =>{
        displayAdded(button);
})
})

function displayAdded(button){
    
    cartQuantity++ ;
    localStorage.setItem('Quantity',JSON.stringify(cartQuantity));
    settingCartValue();

    let addToCartContainer = button.closest('.product').querySelector('.added-to-cart-container');
    
   setTimeout(() => {
    addToCartContainer.classList.remove("displaying-added-to-cart");  
   }, 1000);
   
   addToCartContainer.classList.add("displaying-added-to-cart");
}

function settingCartValue(){
    if(cartQuantity > 9){
        document.querySelector(".cart-quantity").classList.add('cart-quantity-when-gt-10');    
    }
    else{
        document.querySelector(".cart-quantity").classList.remove('cart-quantity-when-gt-10');
    }

    document.querySelector(".cart-quantity").innerHTML=`${cartQuantity}`;
}

const logoContainer = document.getElementById('id1')

function displayResize(){
if(window.innerWidth <=575){
    logoContainer.innerHTML =`<img style ="width :40px;" src="images/amazon-mobile-logo-white.png" alt="">`;
}
else{
    logoContainer.innerHTML =`<img class="amazon-logo" src="images/amazon-logo-white.png" alt="" />`;
}
}

displayResize();


window.addEventListener("resize", displayResize);