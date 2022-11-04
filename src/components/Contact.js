import '../assets/css/Contact.css';
import { useForm, ValidationError  } from '@formspree/react';

export default function Contact() {

    const [state, handleSubmit] = useForm('mrgdyvol');
    if (state.succeeded) {
      return <div className='formSend container'><p>Спасибо за ваш вопрос. В ближайшее время с вами свяжется менеджер.</p></div>;
    }

    return(
        <>

            <div className="container">
                <div className='about-header contact-header'>
                    <h2>СВЯЗАТЬСЯ С НАМИ</h2>
                </div>

                <div className='block-contact'>
                    <div className='contact'>
                        <p>ДЛЯ СВЯЗИ</p>
                        <a className='link-contact' href="tel:88006006344">+8 (800) 600-63-44</a>
                        <a className='link-contact' href="mailto:coffee@point.ru">coffee@point.ru</a>
                    </div>

                    <div className='contact'>
                        <p>АДРЕС ОФИСА</p>
                        <p>г. Москва, Шмитовский проезд, дом 40</p>
                    </div>
                
                    <div className='contact'>
                        <p>СОТРУДНИЧЕСТВО</p>
                        <a className='link-contact' href="tel:88007005544">+8 (800) 700-55-44</a>
                    </div>
                </div>

                <div className='block-form'>

                    <div className='form-header'>
                        <h4>НАПИШИТЕ НАМ</h4>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className='field'>
                            <input type="text" required placeholder='Ваше имя' />
                        </div>

                        <div className='field'>
                            <input type="email" required name="email" placeholder='E-mail' />
                        </div>

                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                        
                        <div className='field'>
                            <textarea id="message" required name="message" placeholder='Ваш вопрос' />
                        </div>

                        <button type="submit" className='form-btn' disabled={state.submitting}>Отправить</button>
                    </form>
                </div>
            </div>

        </>
    )
}