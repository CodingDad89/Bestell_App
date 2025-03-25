function renderDishes(i) {
    for (let i = 0; i < myDishes.length; i++) {
        document.getElementById(`my_dishes`).innerHTML += 
        ` 
            <div id="plus${i}" class="dishes_css">
                <div id="plus_div${i}" class="plus_div" onclick="onclickDish(${i})">
                    <img src="assets/img/plus.png" alt="" id="plus_button">
                </div id="dishes${i}">
                <h3 id="name${i}">${myDishes[i].name}</h3>
                <p id="desc${i}">${myDishes[i].description}</p>
                <p id="price${i}">${myDishes[i].price}</p>
            </div>`
  } 
  
}



function renderBasket(j) {
    for (let j = 0; j < basketArr.length; j++) {
        document.getElementById(`main_basket`).innerHTML += 
        `<div id="basket_dishesPro${j}">
            <h3 id="name${j}">${basketArr[j].name}</h3>
            <div id="dishes_basket${j}" class="dishes_basket">
                <img src="assets/img/order_minus.png" alt="" class="symbols_basket" onclick="dishMinus(${j})">
                <p id="count${j}">${basketArr[j].count}</p>
                <img src="assets/img/order_plus.png" alt="" class="symbols_basket" onclick="dishPlus(${j})">
                <p id="amountDish${j}">${basketArr[j].amount}</p>
                <img src="assets/img/delete.png" alt="" class="symbols_basket">
            </div>
        </div> `
  } 
  
}

function onclickDish(i, j) {
    
    if(basketArr.includes(myDishes[i])) {
        basketArr[j].count += 1;
        document.getElementById(`main_basket`).innerHTML = "";
        renderBasket(j);
        }
    else {
        basketArr.push(myDishes[i]);
        basketArr.count = 1;
        amountDish();
        document.getElementById(`main_basket`).innerHTML = "";
        renderBasket(); 
    }
    
}

function dishPlus(j, i) {
    basketArr[j].count += 1;
    document.getElementById(`count${j}`).innerHTML = basketArr[j].count;
    amountDish(j);
    document.getElementById(`main_basket`).innerHTML = "";
    renderBasket(i, j)
}

function dishMinus(j) {
    if(basketArr[j].count <= 1) {
        basketArr.splice(j, 1);
    }
    else {
        basketArr[j].count -= 1;
        amountDish(j)
        document.getElementById(`count${j}`).innerHTML = basketArr[j].count; 
        renderBasket(i, j)
    }
}

function amountDish(j) {
    let amountDishes = basketArr[j].price * basketArr[j].count + "€";
    basketArr[j].amount = amountDishes;
}



