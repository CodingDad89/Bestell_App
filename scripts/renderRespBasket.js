function renderRespBasketTemplate(i) {
    return document.getElementById(`basket_resp`).innerHTML +=
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