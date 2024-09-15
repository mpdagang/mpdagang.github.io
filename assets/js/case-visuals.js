document.addEventListener("DOMContentLoaded", function() {
    let toCubeBtn = document.getElementById("to-cube");
    toCubeBtn.addEventListener("click", function(){
        let vSection = document.getElementById("section-01");
        vSection.classList.toggle("to-cube");
    });
});
