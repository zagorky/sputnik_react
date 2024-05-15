import './FAQ_alt.css'
import { faq } from '../../data'
import Button_faq from '../Button/Button_faq'
import { useState } from 'react'



function FAQ_alt () {
    const [content, setContent] = useState('Нажми на кнопку')
    
    function handleClick(type) {
        setContent(type)
    }

    return (
        <section className="faq">
        <h2 className="head-faq">Вопрос-ответ</h2>
            <div className="faq-container"> 
                <Button_faq onClick={() => handleClick("a1")}>Дизайн точно уникальный? Кто придумывает?</Button_faq>
                <Button_faq onClick={() => handleClick("a2")}>Как ухаживать за сумками?</Button_faq>
                <Button_faq onClick={() => handleClick("a3")}>Я могу вернуть заказ, если он просто не подойдет?</Button_faq>
                <Button_faq onClick={() => handleClick("a4")}>Вы работаете с корпоративными клиентами?</Button_faq>
            </div>

            <div className="faq-body">
                    <p className="faq-text">{faq[content]}</p>
            </div>

        </section>
    )  
}

export default FAQ_alt