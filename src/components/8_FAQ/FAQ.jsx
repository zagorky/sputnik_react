import './FAQ.css'
import { faq } from '../../data'



function FAQ (props) {
    return (
        <section class="faq">
        <h2 class="head-faq">Вопрос-ответ</h2>
        <div class="acor-container"> 

            <input type="radio" name="acor" id="acor1" class="radio" checked="checked" />
            <label for="acor1" class="accordion">{faq[0].q}</label>
            <div class="acor-body">
                <p class="acc-text">{faq[0].a}</p>
            </div>
            <hr class="divider" />
            
            <input type="radio" name="acor" id="acor2" class="radio"  />
            <label for="acor2" class="accordion">{faq[1].q}</label>
            <div class="acor-body">
                <p class="acc-text">{faq[1].a}</p>
            </div>
            <hr class="divider" />    
            <input type="radio" name="acor" id="acor3" class="radio" />
            <label for="acor3" class="accordion">{faq[2].q}</label>
            <div class="acor-body">
                <p class="acc-text">{faq[2].a}</p>
            </div>
            <hr class="divider" />
        
            <input type="radio" name="acor" id="acor4" class="radio" />
            <label for="acor4" class="accordion">{faq[3].q}</label>
            <div class="acor-body">
                <p class="acc-text">{faq[3].a}</p>
            </div>
            <hr class="divider" />
            </div>
    </section>
    )  
}

export default FAQ