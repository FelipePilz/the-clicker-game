var clicks = 0;

var internet = {
    price: 15,
    quantity: 0,
    cps: 0
}

var energyDrink = {
    price: 100,
    quantity: 0,
    cps: 0
}

var keyboard = {
    price: 800,
    quantity: 0,
    cps: 0
}
var database = {
    price: 2000,
    quantity: 0,
    cps: 0
}

function addCPS(){
    internet.cps = internet.quantity * 1;  // 1 cps per internet
    energyDrink.cps = energyDrink.quantity * 3; // 3 cps per internet
    keyboard.cps = keyboard.quantity * 6;   // 6 cps per internet
    database.cps = database.quantity * 10; // 10 cps per database
    clicks += internet.cps + energyDrink.cps + keyboard.cps + database.cps;// final cps
    document.getElementById("clicker-overall").innerHTML = "Clicks: "+clicks;
    
    setTimeout(addCPS, 1000);
    mainClick(true);
}
addCPS();


function mainClick(fixBug){
    if(fixBug == true){//bug fix
        //dont add clicks  
    }else{
        clicks++;
    }
    document.getElementById("clicker-overall").innerHTML = "Clicks: "+clicks;
    //Calculate ACPS - AUTOMATED CLICKS PER SECOND
    document.getElementById("clicker-acps").innerHTML = ((internet.quantity * 1)+(energyDrink.quantity * 3)+(keyboard.quantity * 6) + (database.quantity * 10)) +" - ACPS" //YES I KNOW, BUT IT INSTANTLY REPLACE THE CURRENT CPS, SOOOOOOO yeah ;)
    

    //SHOW KEYBOARD
    var showKeyboard = false;
    if(clicks >= 600 && showKeyboard == false){
        document.getElementById("keyboard-price").innerHTML = "Keyboard: <br>"+keyboard.price+" Clicks";
        document.getElementById("clicker-store-button-keyboard").style.backgroundImage = "url(https://cdn3.iconfinder.com/data/icons/ikooni-flat-devices-technologies/128/devices-18-512.png)"
        showKeyboard = true;
    }

    //SHOW DATABASE
    var showDatabase = false;
    if(clicks >= 1700 && showDatabase == false){
        document.getElementById("database-price").innerHTML = "Database: <br>"+database.price+" Clicks";
        document.getElementById("clicker-store-button-database").style.backgroundImage = "url(https://cdn.iconscout.com/icon/free/png-256/setting-database-4-1118521.png)"
        showDatabase = true;
    }
 //////////////////////////////////////////////////////////////   

    //VALIDATE INTERNET PRICE
    if(clicks >= internet.price){
        document.getElementById("clicker-store-button-internet").style.filter = "grayscale(0%)";
        document.getElementById("clicker-store-button-internet").style.cursor = "pointer";
        document.getElementById("clicker-store-button-internet").disabled = false;
    }else{
        document.getElementById("clicker-store-button-internet").style.filter = "grayscale(100%)";
        document.getElementById("clicker-store-button-internet").style.cursor = "unset";
        document.getElementById("clicker-store-button-internet").disabled = true;
    }

    //VALIDATE ENERGY DRINK PRICE
    if(clicks >= energyDrink.price){
        document.getElementById("clicker-store-button-energyDrink").style.filter = "grayscale(0%)";
        document.getElementById("clicker-store-button-energyDrink").style.cursor = "pointer";
        document.getElementById("clicker-store-button-energyDrink").disabled = false;
    }else{
        document.getElementById("clicker-store-button-energyDrink").style.filter = "grayscale(100%)";
        document.getElementById("clicker-store-button-energyDrink").style.cursor = "unset";
        document.getElementById("clicker-store-button-energyDrink").disabled = true;
    }

    //VALIDATE KEYBOARD PRICE
    if(clicks >= keyboard.price){
        document.getElementById("clicker-store-button-keyboard").style.filter = "grayscale(0%)";
        document.getElementById("clicker-store-button-keyboard").style.cursor = "pointer";
        document.getElementById("clicker-store-button-keyboard").disabled = false;
    }else{
        document.getElementById("clicker-store-button-keyboard").style.filter = "grayscale(100%)";
        document.getElementById("clicker-store-button-keyboard").style.cursor = "unset";
        document.getElementById("clicker-store-button-keyboard").disabled = true;
    }

    //VALIDATE DATABASE PRICE
    if(clicks >= database.price){
        document.getElementById("clicker-store-button-database").style.filter = "grayscale(0%)";
        document.getElementById("clicker-store-button-database").style.cursor = "pointer";
        document.getElementById("clicker-store-button-database").disabled = false;
    }else{
        document.getElementById("clicker-store-button-database").style.filter = "grayscale(100%)";
        document.getElementById("clicker-store-button-database").style.cursor = "unset";
        document.getElementById("clicker-store-button-database").disabled = true;
    }
}



function buyInternet(){
    clicks -= internet.price;
    internet.price *= 1.2;
    internet.price = internet.price.toFixed(0); //round up the price
    document.getElementById("internet-price").innerHTML = "Internet: <br>"+internet.price+" Clicks";
    internet.quantity ++;
    document.getElementById("clicker-internet-quantity").innerHTML = internet.quantity;
    mainClick(true)
}

function buyEnergyDrink(){
    clicks -= energyDrink.price;
    energyDrink.price *= 1.5;
    energyDrink.price = energyDrink.price.toFixed(0); //round up the price
    document.getElementById("energyDrink-price").innerHTML = "Energy Drink: <br>"+energyDrink.price+" Clicks";
    energyDrink.quantity ++;
    document.getElementById("clicker-energyDrink-quantity").innerHTML = energyDrink.quantity;
    mainClick(true)
}

function buyKeyboard(){
    clicks -= keyboard.price;
    keyboard.price *= 1.9;
    keyboard.price = keyboard.price.toFixed(0); //round up the price
    document.getElementById("keyboard-price").innerHTML = "Energy Drink: <br>"+keyboard.price+" Clicks";
    keyboard.quantity ++;
    document.getElementById("clicker-keyboard-quantity").innerHTML = keyboard.quantity;
    mainClick(true)    
}

function buyDatabase(){
    clicks -= database.price;
    database.price *= 2.3;
    database.price = database.price.toFixed(0); //round up the price
    document.getElementById("database-price").innerHTML = "Database: <br>"+database.price+" Clicks";
    database.quantity ++;
    document.getElementById("clicker-database-quantity").innerHTML = database.quantity;
    mainClick(true)    
}
