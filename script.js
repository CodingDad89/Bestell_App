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

function renderBasketNew(i) {
    return    document.getElementById(`main_basket`).innerHTML +=      
    `<div id="basket_dishesPro${i}">
        <h3 id="name${i}">${myDishes[i].name}</h3>
        <div id="dishes_basket${i}" class="dishes_basket">
            <img src="assets/img/order_minus.png" alt="" class="symbols_basket" onclick="dishMinus(${i})">
            <p id="count${i}">${myDishes[i].count}</p>
            <img src="assets/img/order_plus.png" alt="" class="symbols_basket" onclick="dishPlus(${i})">
            <p id="amountDish${i}">${myDishes[i].amount}</p>
            <img src="assets/img/delete.png" alt="" class="symbols_basket" onclick="deleteEntry(${i})">
        </div>
    </div>
`
}

function renderSum(sum) {
    return document.getElementById(`sum_container`).innerHTML =
    `<p id="zwischensumme">${sum}</p>`
}



function onclickDish(i) {
    
    if(myDishes[i].count == 0) {
        myDishes[i].count += 1;
        renderBasketNew(i);
        amountDish(i);
        renderSum(i);
        }
    else {
        document.getElementById(`count${i}`).innerHTML ="";
        myDishes[i].count += 1;
        document.getElementById(`count${i}`).innerHTML = myDishes[i].count;
        amountDish(i);
        renderSum(i);
    }
}


function dishPlus(i) {
    document.getElementById(`count${i}`).innerHTML ="";
    myDishes[i].count += 1;
    document.getElementById(`count${i}`).innerHTML = myDishes[i].count;
    amountDish(i)
}

function dishMinus(i) {
    if(myDishes[i].count <= 1) {
        deleteEntry(i) ;
    }
    else {
        document.getElementById(`count${i}`).innerHTML ="";
        myDishes[i].count -= 1;
        document.getElementById(`count${i}`).innerHTML = myDishes[i].count;
        amountDish(i);
    }
}

function amountDish(i) {
    myDishes[i].amount = myDishes[i].price * myDishes[i].count + "€";
    let amountSum = myDishes[i].amount;
    document.getElementById(`amountDish${i}`).innerHTML = amountSum;
} 

function deleteEntry(i) {
    myDishes[i].count = 0;
    document.getElementById(`basket_dishesPro${i}`).remove();
}





