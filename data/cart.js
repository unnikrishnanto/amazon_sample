

export let cart = JSON.parse(localStorage.getItem("cart")) || [];

export function addingToCart(productId){
    if(cart.length <= 0){
        cart.push({
            productId,
            quantity :1
        })
        console.log("Sucessfully pushed an element to cart and cart :");
        console.log(cart);
        console.log(JSON.stringify(cart));
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    else{
        console.log("cart is not empty");
        let flag =0;
        cart.forEach((value) =>{
            if(value.productId === productId){
                console.log("Match found");
                flag =1;
                value.quantity++;
                localStorage.setItem("cart", JSON.stringify(cart));
            }
        })
            if(flag == 0){
                console.log("inside Else");
                cart.push({
                    productId,
                    quantity :1
                })
                console.log(JSON.stringify(cart));
                localStorage.setItem("cart", JSON.stringify(cart));
                console.log("Element pushed  and cart is: ");
                console.log(cart);

            }
        }
        calc();
}
export function clearcart(){
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));

}

export let numberOfItems =0 ;
cart.forEach((value) =>{
    numberOfItems +=value.quantity;
})
