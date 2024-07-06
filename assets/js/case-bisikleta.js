window.addEventListener('load', () => {

    /**
     * 1. add listener to button
     * 2. create action collect lang items
     * 3. toggle class to show hide en or tl
     */

    let switchLang = document.getElementById('lang-btn');
    if( switchLang != null) {
        switchLang.addEventListener('click', function() {
            let enContent = document.getElementsByClassName("en");
            let tlContent = document.getElementsByClassName("tl");
            for(let i = 0; i < enContent.length; i++){
                enContent[i].classList.toggle('show');
                tlContent[i].classList.toggle('show');
            }

            this.classList.toggle('selected-en');
            this.classList.toggle('selected-tl');
        });
    }
});