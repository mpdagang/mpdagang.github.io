document.addEventListener("DOMContentLoaded", function() {
    let topView = document.getElementById("view-top");
    topView.addEventListener("click", function(){
        let cube = document.getElementById("test-scene");
        cube.classList.remove("view-front");
        cube.classList.toggle("view-top");
    });
    let frontView = document.getElementById("view-front");
    frontView.addEventListener("click", function(){
        let cube = document.getElementById("test-scene");
        cube.classList.remove("view-top");
        cube.classList.toggle("view-front");
    });

    let revealBtn = document.getElementById("reveal");
    revealBtn.addEventListener("click", function(){
        let cube = document.getElementById("main-cube");
        cube.classList.toggle("hide");
    });
});
