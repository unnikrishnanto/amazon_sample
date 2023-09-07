

export let cart = JSON.parse(localStorage.getItem("cart")) || [];

export function addingToCart(productId){
    if(cart.length <= 0){
        cart.push({
            productId,
            quantity :1
        })
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    else{
        let flag =0;
        cart.forEach((value) =>{
            if(value.productId === productId){
                flag =1;
                value.quantity++;
                localStorage.setItem("cart", JSON.stringify(cart));
            }
        })
            if(flag == 0){
                cart.push({
                    productId,
                    quantity :1
                })
                localStorage.setItem("cart", JSON.stringify(cart));
                
            }
        }
}
export function clearcart(){
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));

}

let numberOfItems =0 ;
export function calcNoOfItems(){
        numberOfItems =0;
        cart.forEach((value) =>{
            numberOfItems +=value.quantity;
        })
        return numberOfItems;    
}

export function removeProduct(Id){
    let index =0;
    cart.forEach((element) => {
       if(element.productId === Id){
        cart.splice(index,1);
        localStorage.setItem("cart", JSON.stringify(cart));
       }
       index++;
    });
}
