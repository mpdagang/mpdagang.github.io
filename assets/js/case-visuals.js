document.addEventListener("DOMContentLoaded", function() {
    let toCubeBtn = document.getElementById("to-cube");
    toCubeBtn.addEventListener("click", function(){
        let vSection = document.getElementById("section-01");
        vSection.classList.toggle("to-cube");
    });
   const kyubiBtnList = document.getElementById("kyb-btn-wrapper");
   kyubiBtnList.addEventListener("click", function (e) {
        let toRemove = e.target.dataset.rmClass.split(',');
        let kyubiContainer = document.getElementById("kyb-c-container");
        kyubiContainer.classList.remove(...toRemove);
        kyubiContainer.classList.toggle(e.target.dataset.adClass);
   });
});
