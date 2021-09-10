// * React Hooks
import React from 'react';

// * Hooks and libraries
import { useHistory } from 'react-router-dom';
import { useLang } from '../../hooks/useLang';
import { useSectionShow } from '../../hooks/useSectionShow';

export const Error404 = () => {
    const [ t ] = useLang();
    const sectionShow = useSectionShow();

    const { replace } = useHistory();
    const handleReplace = () => replace('/home');

    return (
        // ======= Error404 Section =======
        <section className={ sectionShow ? sectionShow : '' }>
            <div className="container">

                <div className="error-container">
                    <div className="header">
                        <h1>404</h1>
                    </div>{/* /.header */}
                    <h2>Not Found</h2>
                    <p>{ t('errors.not-found-text') }</p>
                    <button
                        className="mt-1 button"
                        onClick={ handleReplace }
                    >
                        { t('header.back-home') }
                    </button>
                </div>{/* /.error-header */}

            </div>{/* /.container */}
        </section>/* End Error404 Section */
    );
}