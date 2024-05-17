import Button_faq from '../Button/Button_faq'
import "./TabSection.css"

export default function TabSection({active, onChange}) {
    return (
        <section className='tab-section' style={{marginBottom: '1rem'}}>
            <Button_faq isActive={active === 'main'} onClick={() => onChange('main')}>Главная</Button_faq>
            <Button_faq isActive={active === 'feedback'} onClick={() => onChange('feedback')}>Обратная связь</Button_faq>

        </section>
    )
}