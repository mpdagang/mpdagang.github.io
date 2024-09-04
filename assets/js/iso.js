document.addEventListener("DOMContentLoaded", function() {
    let topView = document.getElementById("view-top");
    topView.addEventListener("click", function(){
        let cube = document.getElementById("test-scene");
        cube.classList.toggle("un-iso");
    });
});
