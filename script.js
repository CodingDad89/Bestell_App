function renderDishes(i) {
    for (let i = 0; i < myDishes.length; i++) {
        document.getElementById(`my_dishes`).innerHTML += 
        ` 
            <div id="plus${i}" class="dishes_css">
                <div id="plus_div${i}" class="plus_div">
                    <img src="assets/img/plus.png" alt="" id="plus_button">
                </div id="dishes${i}">
                <h3 id="name${i}">${myDishes[i].name}</h3>
                <p id="desc${i}">${myDishes[i].description}</p>
                <p id="price${i}">${myDishes[i].price}</p>
            </div>`
  } 
}

function onclickPushDishes(i) {
    if()

}