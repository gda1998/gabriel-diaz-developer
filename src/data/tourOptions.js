export const buttons = [
    {
        action() {
            return this.back();
        },
        classes: 'button button-small',
        text: '<i class="bi bi-caret-left-fill"></i>'
    },
    {
        action() {
            return this.next();
        },
        classes: 'button button-small',
        text: '<i class="bi bi-caret-right-fill"></i>'
    }
];

const tourOptions = {
    defaultStepOptions: {
        arrow: false,
        cancelIcon: {
            enabled: true
        },
        classes: 'react-tour',
        highlightClass: 'highlight',
        modalOverlayOpeningPadding: 10,
        when: {
            show() {
                // Creamos el elemento span y h4
                const h4 = document.createElement('h4');
                const spanBadge = document.createElement('span');

                // Agregamos las clases y el texto del spanBadge
                spanBadge.classList.add('position-absolute', 'top-100', 'start-50', 'translate-middle', 'badge', 'rounded-pill', 'bg-success');
                spanBadge.innerText = `${this.tour.steps.indexOf(this.tour.currentStep) + 1}/${this.tour.steps.length}`;

                // Creamos los elementos que hace referencia al Tour
                const currentStepElement = this.tour.currentStep.el;
                const header = currentStepElement.querySelector('.shepherd-header');

                // Agregamos el span a la ventana modal
                h4.insertAdjacentElement('afterBegin', spanBadge);
                header.insertBefore(h4, currentStepElement.querySelector('.shepherd-cancel-icon') );
            }
        },
    },
    exitOnEsc: false,
    keyboardNavigation: false
    // useModalOverlay: true,
};

export default tourOptions;