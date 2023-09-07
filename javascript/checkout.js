import { cart,calcNoOfItems,removeProduct } from "../data/cart.js";
import { product } from "../data/product.js";

let checkoutNumberEle = document.querySelector(".checkout-num-js");
let gridContent =``;
const orderSummaryElement = document.querySelector(".order-summary-js");
pageload();

const paymentElement =document.querySelector(".payment-summary");
paymentElement.innerHTML=`
<div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (${calcNoOfItems()}):</div>
            <div class="payment-summary-money">$555</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$4.99</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$47.74</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$4.77</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$52.51</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>
`;

function pageload(){
  
        checkoutNumberEle.innerHTML =`${calcNoOfItems()} items`          
        gridContent =``;
        orderSummaryElement.innerHTML = gridContent;
        if(cart.length <= 0){
        orderSummaryElement.innerHTML=` 
        <div>Your cart is empty.</div>
        <a href="home.html">
        <button class ="view-products-button">View Products</button>
        </a> `;  
        }
        else{ 
        cart.forEach((value) =>{
        product.forEach((product) =>{
        if(product.id === value.productId){
        gridContent +=`
        <div class="cart-item-container">
        <div class="delivery-date">
          Delivery date: Wednesday, June 15
        </div>

        <div class="cart-item-details-grid">
          <img class="product-image"
            src="${product.image}">

          <div class="cart-item-details">
            <div class="product-name">
              ${product.name}
            </div>
            <div class="product-price">
            $${((product.priceCents)/100).toFixed(2)}
            </div>
            <div class="product-quantity">
              <span>
                Quantity: <span class="quantity-label">${value.quantity}</span>
              </span>
              <span class="update-quantity-link link-primary">
                Update
              </span>
              <span class="delete-quantity-link link-primary js-delete-button"
              data-cart-Item-Id ="${value.productId}">
                Delete
              </span>
            </div>
          </div>

          <div class="delivery-options">
            <div class="delivery-options-title">
              Choose a delivery option:
            </div>

            <div class="delivery-option">
              <input type="radio" class="delivery-option-input"
                name="delivery-option-2">
              <div>
                <div class="delivery-option-date">
                  Tuesday, June 21
                </div>
                <div class="delivery-option-price">
                  FREE Shipping
                </div>
              </div>
            </div>
            <div class="delivery-option">
              <input type="radio" checked class="delivery-option-input"
                name="delivery-option-2">
              <div>
                <div class="delivery-option-date">
                  Wednesday, June 15
                </div>
                <div class="delivery-option-price">
                  $4.99 - Shipping
                </div>
              </div>
            </div>
            <div class="delivery-option">
              <input type="radio" class="delivery-option-input"
                name="delivery-option-2">
              <div>
                <div class="delivery-option-date">
                  Monday, June 13
                </div>
                <div class="delivery-option-price">
                  $9.99 - Shipping
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        `;
        }
        })

        })
        orderSummaryElement.innerHTML = gridContent;

        }
        deleteFunction();

}

function deleteFunction(){
  document.querySelectorAll(".js-delete-button").forEach((button) =>{
    button.addEventListener('click' ,() =>{
      let id  = button.dataset.cartItemId;
      removeProduct(id);
      pageload();      
    })  
   })
  
}
