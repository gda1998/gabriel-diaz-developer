import { buttons } from '../tourOptions';

const tourDataEs = {
    defaultTour : {
        contact: [
            {
                attachTo: { element: '#formContact', on: 'top' },
                buttons: [ buttons[1] ],
                text: 'Puedes usar este formulario para enviarme un correo electrónico.',
            }
        ]
    },
    computerTour : {
        home: [
            {
                advanceOn: { selector: '.btn-handle-toogle', event: 'click' },
                attachTo: { element: '.btn-handle-toogle', on: 'bottom' },
                text: 'Utiliza este botón para cambiar el idioma de la página web.'
            },
        ],
        portfolio: [
            {
                attachTo: { element: '#portfolio-flters', on: 'bottom' },
                buttons: buttons,
                text: 'Da click en cualquiera de los filtros para obtener los proyectos de esa clasificación.'
            },
            {
                advanceOn: { selector: '.portfolio-wrap', event: 'mouseover' },
                attachTo: { element: '.portfolio-wrap', on: 'bottom' },
                buttons: buttons,
                text: 'Posiciona tu ratón al centro de la imagen del proyecto.',
            },
            {
                advanceOn: { selector: '.btn-portfolio', event: 'click' },
                attachTo: { element: '.btn-portfolio', on: 'bottom' },
                buttons: [ 
                    buttons[0],
                    {
                        action() {
                            document.querySelector('.btn-portfolio').click();
                        },
                        classes: 'button button-small',
                        text: '<i class="bi bi-caret-right-fill"></i>'
                    }
                ],
                text: 'Da click en este botón para ver los detalles del proyecto.',
            },
            {
                advanceOn: { selector: '.arrow-left', event: 'click' },
                attachTo: { element: '.arrow-left', on: 'right' },
                beforeShowPromise: () => {
                    return new Promise(resolve => {
                        document.querySelector('.btnRemoveOverlay').click();
                        resolve();
                    });
                },
                buttons: [ buttons[1] ],
                text: 'Usa este botón para ver el portafolio anterior a este.',
            },
            {
                advanceOn: { selector: '.arrow-right', event: 'click' },
                attachTo: { element: '.arrow-right', on: 'left' },
                buttons: buttons,
                text: 'Usa este botón para ver el portafolio siguiente a este.',
            },
            {
                advanceOn: { selector: '.carousel-control-prev', event: 'click' },
                attachTo: { element: '.carousel-control-prev', on: 'right' },
                buttons: buttons,
                text: 'Click en esta parte para ver la imagen anterior.',
            },
            {
                advanceOn: { selector: '.carousel-control-next', event: 'click' },
                attachTo: { element: '.carousel-control-next', on: 'left' },
                buttons: buttons,
                text: 'Click en esta parte para ver la imagen siguiente.',
            }
        ]
    },
    phoneTour : {
        home: [
            {
                advanceOn: { selector: '.mobile-nav-toggle', event: 'click' },
                attachTo: { element: '.mobile-nav-toggle', on: 'bottom' },
                text: 'Da click en el menú hamburguesa.'
            },
            {
                advanceOn: { selector: '.btn-handle-toogle', event: 'click' },
                attachTo: { element: '.btn-handle-toogle' }, 
                text: 'Utiliza este botón para cambiar el idioma de la página web.'
            }
        ],
        portfolio: [
            {
                attachTo: { element: '#portfolio-flters', on: 'bottom' },
                buttons: buttons,
                text: 'Da click en cualquiera de los filtros para obtener los proyectos de esa clasificación.'
            },
            {
                advanceOn: { selector: '.btn-portfolio', event: 'click' },
                attachTo: { element: '.portfolio-wrap', on: 'top' },
                buttons: [ 
                    buttons[0],
                    {
                        action() {
                            document.querySelector('.btn-portfolio').click();
                        },
                        classes: 'button button-small',
                        text: '<i class="bi bi-caret-right-fill"></i>'
                    }
                ],
                text: 'Toca la imagen y después toca el ícono de cadena para ver los detalles de los proyectos.',
            },
            {
                advanceOn: { selector: '.modal-body', event: 'click' },
                attachTo: { element: '.modal-body' },
                beforeShowPromise: () => {
                    return new Promise(resolve => {
                        document.querySelector('.btnRemoveOverlay').click();
                        resolve();
                    });
                },
                buttons:[ buttons[1] ],
                classes: 'sherpherdTo75Percent',
                text: 'Da click en los botones extremos de la ventana, o si no están visibles los botones, da click en los extremos de la ventana para cambiar de proyecto.',
            },
            {
                advanceOn: { selector: '.carousel-control-prev', event: 'click' },
                attachTo: { element: '.carousel-control-prev', on: 'right' },
                buttons: buttons,
                classes: 'sherpherdTo75Percent',
                text: 'Click en esta parte para ver la imagen anterior.',
            },
            {
                advanceOn: { selector: '.carousel-control-next', event: 'click' },
                attachTo: { element: '.carousel-control-next', on: 'left' },
                buttons: buttons,
                classes: 'sherpherdTo75Percent',
                text: 'Click en esta parte para ver la imagen siguiente.',
            }
        ]
    }
}

export default tourDataEs;