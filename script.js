function renderDishes(i) {
    for (let i = 0; i < myDishes.length; i++) {
        document.getElementById(`my_dishes`).innerHTML += renderDishesTemplate(i); 
  } 
}

function renderBasketNew(i) {
    renderBasketTemplate(i);
    renderRespBasketTemplate(i);
   
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
        toggleOrderButton();
        }
    else {
        document.getElementById(`count${i}`).innerHTML ="";
        document.getElementById(`countResp${i}`).innerHTML ="";
        myDishes[i].count += 1;
        document.getElementById(`count${i}`).innerHTML = myDishes[i].count;
        document.getElementById(`countResp${i}`).innerHTML = myDishes[i].count;
        amountDish(i);
        sumAmountAdd(i);
    }
}

function dishPlus(i) {
    document.getElementById(`count${i}`).innerHTML ="";
    document.getElementById(`countResp${i}`).innerHTML ="";
    myDishes[i].count += 1;
    document.getElementById(`count${i}`).innerHTML = myDishes[i].count;
    document.getElementById(`countResp${i}`).innerHTML = myDishes[i].count;
    amountDish(i);
    sumAmountAdd(i);
}

function dishMinus(i) {
    if(myDishes[i].count <= 1) {
        deleteEntry(i);
        deleteEntryResp(i);
        toggleOrderButton();
        sumAmountSub(i);
    }
    else {
        document.getElementById(`count${i}`).innerHTML ="";
        document.getElementById(`countResp${i}`).innerHTML ="";
        myDishes[i].count -= 1;
        document.getElementById(`count${i}`).innerHTML = myDishes[i].count;
        document.getElementById(`countResp${i}`).innerHTML = myDishes[i].count;
        amountDish(i);
        sumAmountSub(i);
    }
}

function amountDish(i) {
    myDishes[i].amount = myDishes[i].price * myDishes[i].count;
    let amountSum = myDishes[i].amount;
    document.getElementById(`amountDish${i}`).innerHTML = amountSum.toFixed(2);
    document.getElementById(`amountDishResp${i}`).innerHTML = amountSum.toFixed(2);
} 

function deleteEntry(i) {
    if(document.getElementById(`main_basket`).innerHTML == "") {
        myDishes[i].count = 0;
        myDishes[i].amount = 0;
        document.getElementById(`basket_dishesPro${i}`).remove();
        sumAmountSub(i);
        toggleOrderButton();
    } else {
        myDishes[i].count = 0;
        myDishes[i].amount = 0;
        document.getElementById(`basket_dishesPro${i}`).remove();
        sumAmountSub(i);
    }
}

function deleteEntryResp(i) {
    if(document.getElementById(`basket_resp`).innerHTML == "") {
        myDishes[i].count = 0;
        myDishes[i].amount = 0;
        document.getElementById(`basket_dishesProResp${i}`).remove();
        sumAmountSub(i);
        toggleOrderButton();
    } else {
        myDishes[i].count = 0;
        myDishes[i].amount = 0;
        document.getElementById(`basket_dishesProResp${i}`).remove();
        sumAmountSub(i);
    }
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
    toggleOrderButton();
}

function dialogStopClosing(event) {
    event.stopPropagation();
}

function onclickOrder(event) {
    onclickOrderTemplate(event);
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

function toggleOrderButton() {
    if(document.getElementById(`main_basket`).innerText != "") {
        let orderButton = document.getElementById(`order_button`);
    orderButton.classList.remove(`d_none`);
    } else {
         let orderButton = document.getElementById(`order_button`);
    orderButton.classList.add(`d_none`);    
    }
}

function basketOverlay() {
    let basketOverlayVar = document.getElementsByClassName(`basket`);
    basketOverlayVar.classList.toggle(`d_none`);
}

function onclickBasketShow(){
    let basketShow = document.getElementById(`basket_resp_main`);
    basketShow.classList.toggle(`d_none`);
}