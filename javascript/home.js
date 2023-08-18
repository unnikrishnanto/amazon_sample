const productGridElement = document.querySelector(".product-grid-js");
productGridElement.innerHTML =`
<div class="product" style="background-color:  aqua;"> 
<div class="image-container">
    <img class="product-image" src="images/products/athletic-cotton-socks-6-pairs.jpg" alt="">
</div>          
<div class="product-name">Black and Gray Athletic Cotton Socks - 6 Pairs</div>
<div class="product-rating-container" >
    <img class="product-rating-image" src="images/ratings/rating-45.png" alt="">
    <div class="rating-count">87</div>
</div>
<div class="product-price">$ 10</div>
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
<button class="add-to-cart-button"> Add to cart</button>
</div>
`;