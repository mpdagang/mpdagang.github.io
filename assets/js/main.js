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
    if (hPanelExit != null) {
        hPanelExit.addEventListener("click", function(){
            let panel = document.getElementById("test");
            panel.classList.toggle("move");
            let hPanel = document.getElementById("h-panel");
            hPanel.classList.toggle("reveal");
        });
    }


    let gtShowBtn = document.getElementById("gt-show-btn");
    if(gtShowBtn != null){
        gtShowBtn.addEventListener("click", function(e) {
            e.preventDefault();
    
            let letters = document.getElementsByClassName("gt-anm");
            for(let i = 0; i < letters.length; i++){
                letters[i].classList.add("is-move");
            }
    
            let pigs = document.getElementsByClassName("gt-pig");
            for(let i = 0; i < pigs.length; i++){
                pigs[i].classList.add("hellow");
            }      
        });
    }

    let pnrDel = document.getElementById("pnr-del");
    let pnrForward = document.getElementById("pnr-forward");
    if(pnrForward != null){
        pnrForward.addEventListener("click", function(e) {
            e.preventDefault();

            pnrDel.classList.add("pnr-move");
        });
    }
    let pnrBackward = document.getElementById("pnr-backward");
    if(pnrBackward != null){
        pnrBackward.addEventListener("click", function(e) {
            e.preventDefault();
            
            pnrDel.classList.remove("pnr-move");
        });
    }

    let fpsCover = document.getElementById("fps-cover");
    if(fpsCover != null){
        fpsCover.classList.add("ready-fps");
    }
});
