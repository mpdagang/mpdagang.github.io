document.addEventListener("DOMContentLoaded", function() {

    let cardList = document.getElementsByClassName("p-card");

    for(let i = 0; i < cardList.length; i++){
        cardList[i].addEventListener("click", function(){
            let panel = document.getElementById("test");
            panel.classList.toggle("move");
            let hPanel = document.getElementById("h-panel");
            hPanel.classList.toggle("reveal");
        });
    }
    
    let hPanelExit = document.getElementById("h-panel-exit");
    hPanelExit.addEventListener("click", function(){
        let panel = document.getElementById("test");
        panel.classList.toggle("move");
        let hPanel = document.getElementById("h-panel");
        hPanel.classList.toggle("reveal");
    });
});