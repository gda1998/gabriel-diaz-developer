// * React Hooks
import React, { useRef } from 'react';

// * Hooks and libraries
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';
import { useLang } from '../../../hooks/useLang';
import { useForm } from '../../../hooks/useForm';

// * Helpers
import select from '../../../helpers/select';
import swalToast from '../../../helpers/swalToast';

export const FormContact = () => {

    // UseLang
    const [ t ] = useLang();

    // recaptchaRef
    const recaptchaRef = useRef();

    // UseForm
    const [ form, handleInputChange, reset, validateForm ] = useForm({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const { name, email, subject, message } = form;

    // Form
    const handleSubmit = async(e) => {
        e.preventDefault();

        // Validate Form
        const formElements = select('#formContact input, #formContact textarea', true);
        if ( !validateForm(formElements) ){
            // Reset Recaptcha
            recaptchaRef.current.reset();
            return false;
        }
        // Validate Recaptcha
        const token = await recaptchaRef.current.executeAsync();
        if ( typeof token !== 'string' ) {
            recaptchaRef.current.reset();
            swalToast('error', t('errors.recaptcha-token-invalid'), 'bottom-end');
            return false;
        }

        // Send Email
        emailjs.sendForm('service_ue20u7k', 'template_udquiaf', e.target, 'user_5mpFv6mmg2y2NuNaoHL0w')
        .then(() => {
            reset();
            // Reset Recaptcha
            recaptchaRef.current.reset();
            swalToast('success', t('messages.email-sent-text'), 'bottom-end');
        }, 
        (error) => swalToast('error', error.text, 'bottom-end') );
    }

    return (
        <form 
            id="formContact" 
            className="php-email-form mt-4 row g-3"
            onSubmit={ handleSubmit }
        >
            <div className="col-md-6">
                <input 
                    className="form-control" 
                    required
                    type="text" 
                    name="name" 
                    placeholder={ t('form.your-name') }
                    value={ name } 
                    onChange={ handleInputChange }
                    pattern="[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*"
                    title={ t('form.only-alphabetic') }
                />
                <div className="invalid-feedback">
                    { t('form.field-requied') }
                </div>{/* /.invalid-feedback */}
            </div>{/* /.col-md-6 */}
            <div className="col-md-6">
                <input 
                    className="form-control" 
                    required
                    type="email" 
                    name="email" 
                    placeholder={ t('form.your-email') }
                    value={ email } 
                    onChange={ handleInputChange }
                    pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}"
                    title="ej. example@email.com"    
                />
                <div className="invalid-feedback">
                    { t('form.field-requied') }
                </div>{/* /.invalid-feedback */}
            </div>{/* /.col-md-6 */}
            <div className="col-md-12">
                <input 
                    className="form-control" 
                    required
                    type="text" 
                    name="subject" 
                    placeholder={ t('form.subject') }
                    value={ subject } 
                    onChange={ handleInputChange }
                />
                <div className="invalid-feedback">
                    { t('form.field-requied') }
                </div>{/* /.invalid-feedback */}
            </div>{/* /.col-md-12 */}
            <div className="col-md-12">
                <textarea
                    className="form-control"
                    required
                    name="message"
                    placeholder={ t('form.message') }
                    rows="5"
                    value={ message }
                    onChange={ handleInputChange }
                />
                <div className="invalid-feedback">
                    { t('form.field-requied') }
                </div>{/* /.invalid-feedback */}
            </div>{/* /.col-md-12 */}
            <div className="text-center">
                <button 
                    type="submit" 
                    className="button"
                >
                    { t('form.send') }
                </button>
            </div>{/* /.text-center */}
            
            <ReCAPTCHA
                onErrored={ () => console.error( 'Error Catpcha.' ) }
                ref={ recaptchaRef }
                theme="dark"
                sitekey="6LehFckaAAAAANu-UZkwlX_cYNHoko69VdVDMl0q"
                size="invisible"
            />
        </form>
    );
}