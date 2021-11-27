function delivery () {
    let delivered = document.getElementById("yes").checkout
    let notDelivered = document.getElementById("no").checkout;{
    console.log(delivered, notDelivered)
    alert("your delivery fee will be 100/=.")
    prompt("Where do you want it to be delivered?")
    alert("your order will be delivered to your location")}
    
}
function checkout(){
    // size
    let s = document.getElementById("small").checked;
    console.log(s)
    let m = document.getElementById("medium").checked;
    console.log(m)
    let l =document.getElementById("large").checked;
    console.log(l)
    // crust 
    let c = document.getElementById("crispy").checked;
    console.log(c)
    let st = document.getElementById("stuffed").checked;
    console.log(st)
    let g = document.getElementById("glutten-free").checked;
    console.log(g)
    // toppings
    let p = document.getElementById("pepperoni").checked;
    console.log(p)
    let mu = document.getElementById("mushroom").checked;
    console.log(mu)
    let ex = document.getElementById("extracheese").checked;
    console.log(ex)
    let ba = document.getElementById("bacon").checked;
    console.log(ba)
    // quantity
    let qty = parseInt(document.getElementById("quantity").value);
    console.log(s,m,l)
    if ( s ==true&&m==false&&l==false){
        if(c==true&&st==false&&g==false){
            if(p==true&&mu==false&&ex==false&&ba==false)
            {alert ("your order is "+ qty + " small pizza with pepperoni toppings crispy  crusted which will cost:")}
            else if(p==false&&mu==true&&ex==false&& ba==false)
            {alert ("your order is " +qty+ " small pizza with mushroom toppings crispy  crusted which will cost:")}
            else if (p==false&&mu==false&&ex==true&&ba==false)
            {alert ("your order is " +qty+ " small pizza with extra-cheese toppings crispy  crusted which will cost:")}
            else if (p==false&&mu==false&&ex==false&&ba==true){
                alert ("your order is " +qty+ " small pizza with bacon toppings crispy  crusted which will cost:")
            }
        }
        else if (c==false&&st==true&&g==false){
            if(p==true&&mu==false&&ex==false&&ba==false){
                alert ("your order is " +qty+ " small pizza with pepperoni toppings stuffed  crusted which will cost:")
            }
            else if(p==false&&mu==true&&ex==false&& ba==false){
                alert ("your order is " +qty+ " small pizza with mushroom toppings stuffed  crusted which will cost:")
            }
            else if (p==false&&mu==false&&ex==true&&ba==false){
                alert ("your order is " +qty+ " small pizza with extracheese toppings stuffed  crusted which will cost:")
            }
            else if (p==false&&mu==false&&ex==false&&ba==true){
                alert ("your order is " +qty+ "  small pizza with bacon toppings stuffed  crusted which will cost:")
            }
        }
        else if (c==false&&st==false&&g==true){
            if(p==true&&mu==false&&ex==false&&ba==false){alert ("your order is " +qty+ " small pizza with pepperoni toppings glutten-free  crusted which will cost:")}
            else if(p==false&&mu==true&&ex==false&& ba==false){alert ("your order is " +qty+ " small pizza with mushroom toppings glutten-free  crusted which will cost:")}
            else if (p==false&&mu==false&&ex==true&&ba==false){alert ("your order is " +qty+ " small pizza with extracheese toppings glutten-free  crusted which will cost:")}
            else if (p==false&&mu==false&&ex==false&&ba==true){alert ("your order is " +qty+ " small pizza with bacon toppings glutten-free  crusted which will cost:")}}
    }
    else if (s==false&&m==true&&l==false){
        if(c==true&&st==false&&g==false){
            if(p==true&&mu==false&&ba==false){alert ("your order is " +qty+ " medium pizza with pepproni toppings crispy   crusted which will cost:")}
            else if(p==false&&mu==true&&ex==false&& ba==false){alert ("your order is " +qty+ " medium pizza with mushroom toppings crispy   crusted which will cost:")}
            else if (p==false&&mu==false&&ex==true&&ba==false){alert ("your order is " +qty+ " medium pizza with extracheese toppings crispy   crusted which will cost:")}
            else if (p==false&&mu==false&&ex==false&&ba==true){alert ("your order is " +qty+ " medium pizza with bacontoppings crispy   crusted which will cost:")}
        }
        else if (c==false&&st==true&&g==false){
            if(p==true&&mu==false&&ba==false){alert ("your order is " +qty+ " medium pizza with pepperoni toppings stuffed  crusted which will cost:")}
            else if(p==false&&mu==true&&ex==false&& ba==false){alert ("your order is is " +qty+ " medium pizza with mushroom toppings stuffed  crusted which will cost:")}
            else if (p==false&&mu==false&&ex==true&&ba==false){alert ("your order  is " +qty+ " medium pizza with extracheese toppings stuffed  crusted which will cost:")}
            else if (p==false&&mu==false&&ex==false&&ba==true){alert ("your order  is " +qty+ " medium pizza with bacon toppings stuffed  crusted which will cost:")}}
        else if (c==false&&st==false&&g==true){
            if(p==true&&mu==false&&ba==false){alert ("your order  is " +qty+ " medium pizza with pepporoni toppings glutten-free  crusted which will cost:")}
            else if(p==false&&mu==true&&ex==false&& ba==false){alert ("your order  is " +qty+ " medium pizza with mushroom toppings glutten-free  crusted which will cost:")}
            else if (p==false&&mu==false&&ex==true&&ba==false){alert ("your order  is " +qty+ " medium pizza with extracheese toppings glutten-free  crusted which will cost:")}
            else if (p==false&&mu==false&&ex==false&&ba==true){alert ("your order  is " +qty+ " medium pizza with bacon toppings glutten-free  crusted which will cost:")}
        }
        }
    else if (s==false&&m==false&&l==true){
        if(c==true&&st==false&&g==false){
            if(p==true&&mu==false&&ba==false){alert ("your order  is " +qty+ "large pizza with pepperoni toppings crispy  crusted which will cost:")}
            else if(p==false&&mu==true&&ex==false&& ba==false){alert ("your order  is " +qty+ " large pizza with mushroom toppings crispy  crusted which will cost:")}
            else if (p==false&&mu==false&&ex==true&&ba==false){alert ("your order  is " +qty+ "  large pizza with extracheese toppings crispy  crusted which will cost:")}
            else if (p==false&&mu==false&&ex==false&&ba==true){alert ("your order  is " +qty+ " large pizza with bacon toppings crispy  crusted which will cost:")
}}
    
        
         else if (c==false&&st==true&&g==false){
             if(p==false&&mu==true&&ex==false&& ba==false){alert ("your order  is " +qty+ "large pizza with pepperoni toppings stuffed  crusted which will cost:")}
             else if(p==false&&mu==true&&ex==false&& ba==false){alert ("your order  is " +qty+ " large pizza with mushroom toppings stuffed  crusted which will cost:")}
             else if (p==false&&mu==false&&ex==true&&ba==false){alert ("your order  is " +qty+ " large pizza with extracheese toppings stuffed  crusted which will cost:")}
             else if (p==false&&mu==false&&ex==false&&ba==true){alert ("your order  is " +qty+ " large pizza with bacon toppings stuffed  crusted which will cost:")}
         else if (c==false&&st==false&&g==true)
             if(p==false&&mu==true&&ex==false&& ba==false){alert ("your order  is " +qty+ " large pizza with pepperoni toppings glutten-free  crusted which will cost:")}
             else if(p==false&&mu==true&&ex==false&& ba==false){alert ("your order  is " +qty+ " large pizza with mushroom toppings glutten-free  crusted which will cost:")}
             else if (p==false&&mu==false&&ex==true&&ba==false){alert ("your order  is " +qty+ " large pizza with extracheese toppings glutten-free  crusted which will cost:")}
             else if (p==false&&mu==false&&ex==false&&ba==true){alert ("your order is" +qty+ " large pizza with bacon toppings glutten-free  crusted which will cost:")}
            }
    }
    
}