function makeTransaction(quantity, pricePerDroid, customerCredits){
    if (customerCredits >= (quantity * pricePerDroid)){
        return "You ordered " + quantity + " droids worth " + (quantity*pricePerDroid) + "credits";
    }
    else{
        return ("Insufficient funds!");
    }
}