import './FAQ.css'
import { faq } from '../../data'



function FAQ (props) {
    return (
        <section class="faq">
        <h2 class="head-faq">Вопрос-ответ</h2>
            <input type="radio" name="q1" id="q1" class="radio" />
            <label for="q1" class="accordion">{faq[0].q}</label>
            <div class="panel">
                <p class="acc-text">{faq[0].a}</p>
            </div>
            <hr class="divider" />
            <input type="radio" name="q2" id="q2" class="radio" />
            <label for="q2" class="accordion">{faq[1].q}</label>
            <div class="panel">
                <p class="acc-text">{faq[1].a}</p>
            </div>
            <hr class="divider" />    
            <input type="radio" name="q3" id="q3" class="radio" />
            <label for="q3" class="accordion">{faq[2].q}</label>
            <div class="panel">
                <p class="acc-text">{faq[2].a}</p>
            </div>
            <hr class="divider" />
        
            <input type="radio" name="q4" id="q4" class="radio" />
            <label for="q4" class="accordion">{faq[3].q}</label>
            <div class="panel">
                <p class="acc-text">{faq[3].a}</p>
            </div>
            <hr class="divider" />
    </section>
    )  
}

export default FAQ