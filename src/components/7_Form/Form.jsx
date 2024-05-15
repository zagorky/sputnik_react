import './Form.css'


function Form () {
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
    <button className="subscribe-form-button" type="submit">Отправить</button>
  </div>
</form>
</section>
)
}

export default Form