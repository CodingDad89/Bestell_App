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