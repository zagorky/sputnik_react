import './FAQ.css'
import { faq } from '../../data'



function FAQ (props) {
    return (
        <section className="faq">
        <h2 className="head-faq">Вопрос-ответ</h2>
        <div className="acor-container"> 

            <input type="radio" name="acor" id="acor1" className="radio" checked="checked" />
            <label for="acor1" className="accordion">{faq[0].q}</label>
            <div className="acor-body">
                <p className="acc-text">{faq[0].a}</p>
            </div>
            <hr className="divider" />
            
            <input type="radio" name="acor" id="acor2" className="radio"  />
            <label for="acor2" className="accordion">{faq[1].q}</label>
            <div className="acor-body">
                <p className="acc-text">{faq[1].a}</p>
            </div>
            <hr className="divider" />    
            <input type="radio" name="acor" id="acor3" className="radio" />
            <label for="acor3" className="accordion">{faq[2].q}</label>
            <div className="acor-body">
                <p className="acc-text">{faq[2].a}</p>
            </div>
            <hr className="divider" />
        
            <input type="radio" name="acor" id="acor4" className="radio" />
            <label for="acor4" class="accordion">{faq[3].q}</label>
            <div className="acor-body">
                <p className="acc-text">{faq[3].a}</p>
            </div>
            <hr className="divider" />
            </div>
    </section>
    )  
}

export default FAQ