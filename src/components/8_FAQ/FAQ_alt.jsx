import './FAQ_alt.css'
import { faq } from '../../data'
import Button_faq from '../Button/Button_faq'
import { useState } from 'react'



function FAQ_alt () {
    const [contentType, setContentType] = useState(null)
    
    function handleClick(type) {
        setContentType(type)
    }

let tabContent = null;

if (contentType){
    tabContent = <p className="faq-text">{faq[contentType]}</p> }
else {
    <p className="faq-text">"Нажми на кнопку"</p>
}

    return (
        <section className="faq">
        <h2 className="head-faq">Вопрос-ответ</h2>
            <div className="faq-container"> 
                <Button_faq isActive={contentType === "a1" } onClick={() => handleClick("a1")}>Дизайн точно уникальный? Кто придумывает?</Button_faq>
                <Button_faq isActive={contentType === "a2" } onClick={() => handleClick("a2")}>Как ухаживать за сумками?</Button_faq>
                <Button_faq isActive={contentType === "a3" } onClick={() => handleClick("a3")}>Я могу вернуть заказ, если он просто не подойдет?</Button_faq>
                <Button_faq isActive={contentType === "a4" } onClick={() => handleClick("a4")}>Вы работаете с корпоративными клиентами?</Button_faq>
            </div>

            <div className="faq-body">
                {tabContent}
            </div>

        </section>
    )  
}

export default FAQ_alt