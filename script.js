function renderDishes(i) {
    for (let i = 0; i < myDishes.length; i++) {
        document.getElementById(`my_dishes`).innerHTML += 
        ` 
        <div id="plus${i}" class="dishes_css">
            <div id="plus_div${i}" class="plus_div" onclick="onclickDish(${i})">
                <img src="assets/img/plus.png" alt="" id="plus_button">
            </div>
            <div id="dishes${i}">
                <h3 id="name${i}">${myDishes[i].name}</h3>
                <p id="desc${i}">${myDishes[i].description}</p>
                <p id="price${i}">${myDishes[i].price} €</p>
            </div>`
  } 
}

function renderBasketNew(i) {
    return    document.getElementById(`main_basket`).innerHTML +=      
    `<div id="basket_dishesPro${i}" class="main_delete">
        <h3 id="name${i}">${myDishes[i].name}</h3>
        <div id="dishes_basket${i}" class="dishes_basket">
            <img src="assets/img/order_minus.png" alt="" class="symbols_basket" onclick="dishMinus(${i})">
            <p id="count${i}">${myDishes[i].count}</p>
            <img src="assets/img/order_plus.png" alt="" class="symbols_basket" onclick="dishPlus(${i})">
            <p id="amountDish${i}">${myDishes[i].amount}</p><p>€</p>
            <img src="assets/img/delete.png" alt="" class="symbols_basket" onclick="deleteEntry(${i})">
        </div>
    </div>`
}

function renderAllThings() {
   renderDishes();
   renderSum();
}

function onclickDish(i) {
    
    if(myDishes[i].count == 0) {
        myDishes[i].count += 1;
        renderBasketNew(i);
        amountDish(i);
        sumAmountAdd(i);
        }
    else {
        document.getElementById(`count${i}`).innerHTML ="";
        myDishes[i].count += 1;
        document.getElementById(`count${i}`).innerHTML = myDishes[i].count;
        amountDish(i);
        sumAmountAdd(i);
    }
}

function dishPlus(i) {
    document.getElementById(`count${i}`).innerHTML ="";
    myDishes[i].count += 1;
    document.getElementById(`count${i}`).innerHTML = myDishes[i].count;
    amountDish(i);
    sumAmountAdd(i);
}

function dishMinus(i) {
    if(myDishes[i].count <= 1) {
        deleteEntry(i);
        sumAmountSub(i);
    }
    else {
        document.getElementById(`count${i}`).innerHTML ="";
        myDishes[i].count -= 1;
        document.getElementById(`count${i}`).innerHTML = myDishes[i].count;
        amountDish(i);
        sumAmountSub(i);
    }
}

function amountDish(i) {
    myDishes[i].amount = myDishes[i].price * myDishes[i].count;
    let amountSum = myDishes[i].amount;
    document.getElementById(`amountDish${i}`).innerHTML = amountSum.toFixed(2);
} 

function deleteEntry(i) {
        myDishes[i].count = 0;
        myDishes[i].amount = 0;
        document.getElementById(`basket_dishesPro${i}`).remove();
        sumAmountSub(i);
}

function renderSum(i) {
    return document.getElementById(`sum_container`).innerHTML +=
    `<p id="zwischensumme"></p>`
}

function sumAmountAdd(i) {
    let sum = 0;
    for(let index = 0; index < myDishes.length; index++) {
        sum += myDishes[index].amount;
        document.getElementById(`zwischensumme`).innerHTML = sum.toFixed(2) + "€";
    }
}

function sumAmountSub(i) {
    let sum = 0;
    for(let index = 0; index < myDishes.length; index++) {
        sum += myDishes[index].amount;
        document.getElementById(`zwischensumme`).innerHTML = sum.toFixed(2) + "€";
    }
}

function toggleOverlay(i, event){
    let overlayRef = document.getElementById(`overlay`);
    overlayRef.classList.toggle(`d_none`);
    onclickOrder(event);
    deleteBasketAfterOrder(i);
}

function dialogStopClosing(event) {
    event.stopPropagation();
}

function onclickOrder(event) {
    document.getElementById(`overlay`). innerHTML = 
    `<div id="dialogBox" onclick="dialogStopClosing(event)">
        <div id="xButton">   
            <button onclick="toggleOverlay(event)" id="xButtonConfig"></button>
        </div>
        <div id="dialogBoxOrdered">
            <p>Deine Bestellung ist jetzt auf dem Weg!</p>
        </div>  
    </div> `
}

function deleteBasketAfterOrder() {
    for (let i = 0; i < myDishes.length; i++) {
        myDishes[i].count = 0;
        myDishes[i].amount = 0;
        myDishes[i].sum = 0;
    }
    document.getElementById(`main_basket`).innerHTML ="";
    document.getElementById(`zwischensumme`).innerHTML ="";
}