import './Button_faq.css'

export default function Button_faq ({children, onClick, isActive}) {
    return (
        <button 
        className={isActive ? "faq-question active" : "faq-question"} 
        onClick={onClick}>
        {children}
        </button>
    )
}