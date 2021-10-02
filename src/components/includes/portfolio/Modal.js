// * React Hooks
import React, { useContext, useState, useEffect } from 'react';

// * Hooks and libraries
import { PortfolioContext } from '../../../hooks/PortfolioContext';
import Glightbox from 'glightbox';

// * Components
import { ModalHeader } from './ModalHeader';
import { ImgCarousel } from './ImgCarousel';
import { PortfolioInfo } from './PortfolioInfo';
import { UsedTools } from './UsedTools';
import { ButtonsChangePortfolio } from './ButtonsChangePortfolio';

// * Styles
import '../../../css/modal-portfolio.css';

export const Modal = () => {
    /* Obtenemos las funciones getPrevPortfolio del hook useImageFiltering
    y el useState setCurrentPortfolio de componente Portfolio  */
    const {
        getPrevPortfolio,
        getNextPortfolio,
        currentPortfolio,
        setCurrentPortfolio
    } = useContext(PortfolioContext);

    // Obtenemos los datos del portafolio que se muestra en turno
    const { id } = currentPortfolio;

    // Este useState se utiliza cuando se abre y se cierra una ventana GlightBox
    const [GlightBoxIsOpen, setGlightBoxIsOpen] = useState(false);

    // Este useState se usa cuando las flechas de cambio de imageCarousel tiene el focus
    const [isKeyBoardDisable, setKeyBoardDisable] = useState(false);
    
    /**
     * Este metodo sirve para obtener el proximo portafolio a visualizar
     * 
     * @param  {String} side 'Right' para obtener el siguiente portafolio, 'Left' para obtener el anterior
     */
    const changeCurrentPortfolio = (side) => {
        // Obtenemos el siguiente portafolio y lo asignamos al currentPortfolio
        const portfolio = side === 'Right' ? getNextPortfolio(id) : getPrevPortfolio(id);
        setCurrentPortfolio(portfolio);

        // Eliminamos y agregamos clases de animacion de cambio de portafolio
        document.querySelector('.modal-body').classList.remove('animate__animated', 'animate__fadeInRight', 'animate__fadeInLeft');
        setTimeout(() => {
            document.querySelector('.modal-body').classList.add('animate__animated', `animate__fadeIn${side}`);
        }, 10);
    }

    /**
     * Este metodo sirve para cambiar de portafolio y la pantalla de sea de un dispositivo menor o igual a 600px
     * 
     * @param  {Event} e El evento del Click
     */
    const handleClickOnModal = (e) => {
        /* Si el ancho de la pantalla es menor o igual a 600px, significa que se han ocultado los botones de cambio
        de portafolio y se quiere desplazar a otro portafolio  */
        if (window.innerWidth <= 600) {
            // Obtenemos la longitud padding que hay en cada extremo del modal
            const marginModal = window.innerWidth / 8;

            // Si la posicion del click entra en el margen 0 a 1/8 de la pantalla a la izq, entonces obtenemos el portafolio anterior
            if (e.clientX >= 0 && e.clientX <= marginModal && !isKeyBoardDisable)
                changeCurrentPortfolio('Left');
            /* Si la posicion del click entra en el margen a 1/8 de la pantalla a longitud_pantalla
            entonces obtenemos el siguiente portafolio */
            if (e.clientX >= window.innerWidth - marginModal && e.clientX <= window.innerWidth && !isKeyBoardDisable)
                changeCurrentPortfolio('Right');
        }
    }
    
    /**
     * Este metodo se utiliza para cambiar de portafolio, usando las teclas de navegacion
     * 
     * @param  {Event} e El Evento del keyDown
     */
    const handleKeyDown = (e) => {
        // Guardamos el codigo ASCII de la tecla presionada en key
        const key = window.event ? e.which : e.keyCode;

        /* Si no esta abierta una ventana de GlightBox y si el uso del teclado esta habilitado, 
        entonces podemos hacer el cambio de portafolio */
        if (!GlightBoxIsOpen && !isKeyBoardDisable) {
            // Si la tecla presionada es la flecha izq, obtenemos el portafolio anterior
            key === 37 && changeCurrentPortfolio('Left');

            // Si la tecla presionada es la flecha derecha, obtenemos el siguiente portafolio
            key === 39 && changeCurrentPortfolio('Right');
        }
    }

    // Glightbox functions
    useEffect(() => {
        // Indicamos la clase a asignar la instancia
        const lightbox = Glightbox({
            selector: '.portfolio-lightbox',
            loop: true
        });

        // Cuando se abra una ventana de GlightBox, indicamos en su useState, que dicha ventana esta abierta
        lightbox.on('open', () => setGlightBoxIsOpen(true) );

        // Cuando se cierre la ventana, asignamos al useState como false, para indicar que ha sido cerrada la misma
        lightbox.on('close', () => setGlightBoxIsOpen(false) );

        return () => lightbox.destroy();

    }, [currentPortfolio]);

    // Bootstrap functions
    useEffect(() => {
        /* Este metodo es para cerrar la ventana modal con el ESC, siempre y cuando una ventana
        GlightBox no este abierta */
        const closeModal = () => !GlightBoxIsOpen && document.querySelector('.close').click();

        /* Obtenemos la ventana modal y asignamos el metodo en el evento hidePrevented.bs.modal.
        hidePrevented.bs.modal se ejecuta cuando se intentar cerrar un modal con el escape y este modal sea estatico */
        const modal = document.getElementById('exampleModal');
        modal.addEventListener('hidePrevented.bs.modal', closeModal);

        return () => modal.removeEventListener('hidePrevented.bs.modal', closeModal);
    }, [GlightBoxIsOpen]);

    return (
        /* Modal */
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
            data-bs-backdrop="static" data-bs-keyboard="false"
            onKeyDown={ handleKeyDown }
        >
            <div className="modal-dialog modal-dialog-centered modal-fullscreen">
                <div className="modal-content modal-portfolio">
                    <ModalHeader />
                    <div className="modal-body" onClick= { handleClickOnModal }>

                        <div className="modal-body-container">
                            <div className="container">
                                <div className="row">
                                    <ImgCarousel setKeyBoardDisable={ setKeyBoardDisable } />
                                    <PortfolioInfo />
                                    <UsedTools />
                                </div>{/* /.row */}
                            </div>{/* /.container */}
                            <ButtonsChangePortfolio changeCurrentPortfolio={ changeCurrentPortfolio } />
                        </div>{/* /.modal-container */}

                    </div>{/* /.modal-body */}
                </div>{/* /.modal-content */}
            </div>{/* /.modal-dialog */}
        </div>/* /.modal .fade */
    );
}