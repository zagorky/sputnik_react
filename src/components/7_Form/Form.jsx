import './Form.css'
import Button_submit from '../Button/Button_submit'


function Form () {
  function handleClick() {
    alert('Отправили!')
}
 return (
<section className="subscribe">
<form className="subscribe-form">
  <div className="subscribe-form-header">
    <h3 className="subscribe-form-header-title">Подпишись!</h3>
    <div className="subscribe-form-header-subtitle">Информация о жизни бренда и новых коллекциях</div>
  </div>
  <div className="subscribe-form-body">
    <label for="user-email" className="visually-hidden">Email</label>
    <input className="subscribe-form-input" id="user-email" placeholder="Ваш email" />
    <Button_submit onClick={handleClick}>Отправить</Button_submit>
  </div>
</form>
</section>
)
}

export default Form