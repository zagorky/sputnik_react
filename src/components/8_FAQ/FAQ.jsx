import './FAQ.css'
import { faq } from '../../data'



function FAQ (props) {
    return (
        <section className="faq">
        <h2 className="head-faq">Вопрос-ответ</h2>
        <div className="acor-container"> 

            <input type="radio" name="acor" id="acor1" className="radio" checked="checked" />
            <label for="acor1" className="accordion">Дизайн точно уникальный? Кто придумывает?</label>
            <div className="acor-body">
                <p className="acc-text">{faq.a1}</p>
            </div>
            <hr className="divider" />
            
            <input type="radio" name="acor" id="acor2" className="radio"  />
            <label for="acor2" className="accordion">Как ухаживать за сумками?</label>
            <div className="acor-body">
                <p className="acc-text">{faq.a2}</p>
            </div>
            <hr className="divider" />    
            <input type="radio" name="acor" id="acor3" className="radio" />
            <label for="acor3" className="accordion">Я могу вернуть заказ, если он просто не подойдет?</label>
            <div className="acor-body">
                <p className="acc-text">{faq.a3}</p>
            </div>
            <hr className="divider" />
        
            <input type="radio" name="acor" id="acor4" className="radio" />
            <label for="acor4" class="accordion">Вы работаете с корпоративными клиентами?</label>
            <div className="acor-body">
                <p className="acc-text">{faq.a4}</p>
            </div>
            <hr className="divider" />
            </div>
    </section>
    )  
}

export default FAQ