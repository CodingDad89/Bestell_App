function renderRespBasketTemplate(i) {
    return document.getElementById(`basket_resp`).innerHTML +=
    `<div id="basket_dishesProResp${i}" class="main_delete resp_box">
        <h3 id="nameResp${i}">${myDishes[i].name}</h3>
        <div id="dishes_basketResp${i}" class="dishes_basket">
        <img src="assets/img/order_minus.png" alt="" class="symbols_basket" onclick="dishMinus(${i})">
        <p id="countResp${i}">${myDishes[i].count}</p>
        <img src="assets/img/order_plus.png" alt="" class="symbols_basket" onclick="dishPlus(${i})">
        <p id="amountDishResp${i}">${myDishes[i].amount}</p><p>€</p>
        <img src="assets/img/delete.png" alt="" class="symbols_basket" onclick="deleteEntryResp(${i})">
        </div>
</div> `
}

function renderDishesTemplate(i) {
    return         ` 
    <div id="plus${i}" class="dishes_css">
        <div id="plus_div${i}" class="plus_div" onclick="onclickDish(${i})">
            <img src="assets/img/plus.png" alt="" id="plus_button">
        </div>
        <div id="dishes${i}">
            <h3 id="name${i}">${myDishes[i].name}</h3>
            <p id="desc${i}" class="desc_css">${myDishes[i].description}</p>
            <p id="price${i}">${myDishes[i].price} €</p>
        </div>`

}

function renderBasketTemplate(i) {
    return document.getElementById(`main_basket`).innerHTML +=
    `<div id="basket_dishesPro${i}" class="main_delete">
        <h3 id="name${i}">${myDishes[i].name}</h3>
        <div id="dishes_basket${i}" class="dishes_basket">
        <img src="assets/img/order_minus.png" alt="" class="symbols_basket" onclick="dishMinus(${i})">
        <p id="count${i}">${myDishes[i].count}</p>
        <img src="assets/img/order_plus.png" alt="" class="symbols_basket" onclick="dishPlus(${i})">
        <p id="amountDish${i}">${myDishes[i].amount}</p><p>€</p>
        <img src="assets/img/delete.png" alt="" class="symbols_basket" onclick="deleteEntry(${i})">
    </div>
</div> `
}

function onclickOrderTemplate(event) {
    return  document.getElementById(`overlay`). innerHTML = 
    `<div id="dialogBox" onclick="dialogStopClosing(event)">
        <div id="xButton">   
            <img src="assets/img/delete.png" alt="" onclick="toggleOverlay(event)" id="xButtonConfig">
        </div>
        <div id="dialogBoxOrdered">
            <p>Deine Bestellung ist jetzt auf dem Weg!</p>
        </div>  
    </div> `
}