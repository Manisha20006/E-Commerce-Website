/* =====================
   CART SYSTEM
===================== */

let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* Add to cart */

function addToCart(name,price){

cart.push({name:name,price:price});

localStorage.setItem("cart",JSON.stringify(cart));

updateCartCount();

alert("Product added to cart");

}

/* Update cart counter */

function updateCartCount(){

let cartCount=document.getElementById("cartCount");

if(cartCount){
cartCount.innerText=cart.length;
}

}

updateCartCount();

/* Display cart items */

function displayCart(){

let cartItems=document.getElementById("cartItems");
let totalPrice=document.getElementById("totalPrice");

if(!cartItems) return;

cartItems.innerHTML="";

let total=0;

cart.forEach((item,index)=>{

let li=document.createElement("li");

li.innerHTML = item.name + " - ₹" + item.price + 
` <button onclick="removeItem(${index})">Remove</button>`;

cartItems.appendChild(li);

total+=item.price;

});

if(totalPrice){
totalPrice.innerText="Total: ₹"+total;
}

}

/* Remove item */

function removeItem(index){

cart.splice(index,1);

localStorage.setItem("cart",JSON.stringify(cart));

displayCart();

updateCartCount();

}

displayCart();

/* =========================
   CART COUNTER
========================= */

function updateCartCount(){

let cartCount = document.getElementById("cartCount");

if(cartCount){
cartCount.innerText = cart.length;
}

}

updateCartCount();


/* =========================
   POPUP MESSAGE
========================= */

function showPopup(){

let popup = document.getElementById("popup");

if(!popup) return;

popup.style.display = "block";

setTimeout(function(){
popup.style.display = "none";
},2000);

}


/* =========================
   PRODUCT FILTER
========================= */

function filterProducts(category){

let products = document.querySelectorAll(".product");

products.forEach(product => {

if(category === "all"){
product.style.display = "block";
}

else if(product.classList.contains(category)){
product.style.display = "block";
}

else{
product.style.display = "none";
}

});

}


/* =========================
   PRODUCT SEARCH
========================= */

let searchInput = document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("keyup", function(){

let value = this.value.toLowerCase();

let products = document.querySelectorAll(".product");

products.forEach(product => {

let text = product.innerText.toLowerCase();

if(text.includes(value)){
product.style.display = "block";
}else{
product.style.display = "none";
}

});

});

}


/* =========================
   HERO IMAGE SLIDER
========================= */

let slider = document.getElementById("slider");

if(slider){

let images = [
"images/hero1.jpg",
"images/hero2.jpg",
"images/hero3.jpg"
];

let index = 0;

setInterval(function(){

index++;

if(index >= images.length){
index = 0;
}

slider.src = images[index];

},3000);

}


/* =========================
   DARK MODE
========================= */

function toggleDark(){

document.body.classList.toggle("dark");

}


/* =========================
   MOBILE MENU
========================= */

function toggleMenu(){

let navbar = document.getElementById("navbar");

if(navbar.style.display === "block"){
navbar.style.display = "none";
}else{
navbar.style.display = "block";
}

}

function addToCart(name,price){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.push({name:name,price:price});

localStorage.setItem("cart",JSON.stringify(cart));

showPopup();

}

function showPopup(){

let popup = document.getElementById("popup");

if(!popup) return;

popup.style.display = "block";

setTimeout(function(){

popup.style.display = "none";

},2000);

}