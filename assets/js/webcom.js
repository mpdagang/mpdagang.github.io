// Custom Web Components Library

class SpookyButton extends HTMLElement {
    constructor() {
        super();
    }
    
    connectedCallback() {
        this.addEventListener('click', this.scream);
    }
    
    scream(){
        alert('Aagh!');
    }
}

customElements.define('spooky-button', SpookyButton);