import './Button_faq.css'

export default function Button_faq ({children, onClick}) {
    return (
        <button 
        className="faq-question active" 
        onClick={onClick}>
        {children}
        </button>
    )
}