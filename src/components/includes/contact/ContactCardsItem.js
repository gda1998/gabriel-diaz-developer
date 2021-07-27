import React from 'react'
import PropTypes from 'prop-types'
import { useLang } from '../../../hooks/useLang'
import { SocialLinks } from '../home/SocialLinks';

export const ContactCardsItem = ({ className, icon, title, text, fontSize }) => {
    const [ t ] = useLang();

    return (
        <div className={ `${className} d-flex align-items-stretch` }>
            <div className="info-box">
                <i className={ icon }></i>
                <h3>{ t(title) }</h3>
                {
                    // Si existe la propiedad text, colocamos un parrafo, si no, ponemos los links de las redes sociales
                    text 
                    ? 
                        <p 
                            style={{ fontSize: fontSize }}
                        >
                            {/* Si text tiene 'contact.', traducimos el texto, si no, lo ponemos tal cual */}
                            { text.includes('contact.') ? t(text) : text }
                        </p>
                    : 
                        <SocialLinks displayBlock={{ display: 'block' }} />
                }
            </div>
        </div>
    )
}

ContactCardsItem.propTypes = {
    className: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
}

ContactCardsItem.defaultProps = {
    fontSize : 'auto'
}