import { buttons } from '../tourOptions';

const tourDataEn = {
    defaultTour : {
        contact: [
            {
                attachTo: { element: '#formContact', on: 'top' },
                buttons: [ buttons[1] ],
                text: 'You can use this form to send me an email.',
            }
        ]
    },
    computerTour : {
        home: [
            {
                advanceOn: { selector: '.btn-handle-toogle', event: 'click' },
                attachTo: { element: '.btn-handle-toogle', on: 'bottom' },
                text: 'Use this button to change the language of the web page.'
            },
        ],
        portfolio: [
            {
                attachTo: { element: '#portfolio-flters', on: 'bottom' },
                buttons: buttons,
                text: 'Click on any of the filters to get the projects of that classification.',
            },
            {
                advanceOn: { selector: '.portfolio-wrap', event: 'mouseover' },
                attachTo: { element: '.portfolio-wrap', on: 'bottom' },
                buttons: buttons,
                text: 'Place your mouse in the center of the project image.',
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
                text: 'Click on this button to see the project details.',
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
                text: 'Use this button to change to the previous project',
            },
            {
                advanceOn: { selector: '.arrow-right', event: 'click' },
                attachTo: { element: '.arrow-right', on: 'left' },
                buttons: buttons,
                text: 'Use this button to change to the next project.',
            },
            {
                advanceOn: { selector: '.carousel-control-prev', event: 'click' },
                attachTo: { element: '.carousel-control-prev', on: 'right' },
                buttons: buttons,
                text: 'Click on this part to see the previous image',
            },
            {
                advanceOn: { selector: '.carousel-control-next', event: 'click' },
                attachTo: { element: '.carousel-control-next', on: 'left' },
                buttons: buttons,
                text: 'Click on this part to see the next image.',
            }
        ]
    },
    phoneTour : {
        home: [
            {
                advanceOn: { selector: '.mobile-nav-toggle', event: 'click' },
                attachTo: {
                    element: '.mobile-nav-toggle',
                    on: 'bottom'
                },
                text: 'Click on hamburger menu.'
            },
            {
                advanceOn: { selector: '.btn-handle-toogle', event: 'click' },
                attachTo: {
                    element: '.btn-handle-toogle'
                },
                text: 'Use this button to change the language of the web page.'
            }
        ],
        portfolio: [
            {
                attachTo: { element: '#portfolio-flters', on: 'bottom' },
                buttons: buttons,
                text: 'Click on any of the filters to get the projects of that classification.'
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
                text: 'Touch the pictura and then touch the chain icon to view the project details.',
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
                text: 'Click on the buttons at the every side of the window, or if the buttons aren\'t visible, click on every side of the window to change of project.',
            },
            {
                advanceOn: { selector: '.carousel-control-prev', event: 'click' },
                attachTo: { element: '.carousel-control-prev', on: 'right' },
                buttons: buttons,
                classes: 'sherpherdTo75Percent',
                text: 'Click on this part to see the previous image.',
            },
            {
                advanceOn: { selector: '.carousel-control-next', event: 'click' },
                attachTo: { element: '.carousel-control-next', on: 'left' },
                buttons: buttons,
                classes: 'sherpherdTo75Percent',
                text: 'Click on this part to see the next image.',
            }
        ]
    }
}

export default tourDataEn;