import './Button_submit.css'

export default function Button_submit ({children, onClick}) {
    
    return(
        <button 
        className="subscribe-form-button" 
        type="submit"
        onClick={onClick}>
        {children}
        </button>
    )
}