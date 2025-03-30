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