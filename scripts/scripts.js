function checkout () {
    
    let delivered = document.getElementById("yes").checked;
    let notDelivered = document.getElementById("no").checked;
    console.log(delivered, notDelivered)
    if( delivered === true && notDelivered === false){
        prompt("Where do you want it to be delivered?")
        alert("your delivery fee will be 100/=.")
        
    }
}
