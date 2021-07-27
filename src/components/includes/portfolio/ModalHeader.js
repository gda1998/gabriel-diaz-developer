import React from 'react';
import { useLang } from '../../../hooks/useLang';

export const ModalHeader = React.memo( () => {
    const [ t ] = useLang();
    return (
        <div className="modal-header">
            <h2 className="modal-title portfolio-title" id="exampleModalLabel">
                { t('portfolio.project-details') }
            </h2>
            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>/* /.modal-header */
    );
})