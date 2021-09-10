// * React Hooks
import React from 'react';

// * Hooks and libraries
import { useLang } from '../../../hooks/useLang';

export const ModalFooter = React.memo( () => {
    const [ t ] = useLang();
    return (
        <div className="modal-footer">
            <button type="button" className="btn btn-sm btn-danger" data-bs-dismiss="modal">{ t('portfolio.close') }</button>
        </div>/* /.modal-footer */
    );
})