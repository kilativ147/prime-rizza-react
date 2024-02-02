import s from './Contacts.module.css'
import imgSchedule from '../../../img/svg/HeaderTime.svg'
import imgTel from '../../../img/svg/HeaderPhone.svg'

const Contacts = () => {
  return (
		<address className={s.header__adress}>
			<div className={s.header__worktime}>
				<img src={imgSchedule} alt="Робочий час"/>
				<p>Кожного дня 10:00 - 22:00</p>
			</div>
			<div className={s.header__phone}>
				<img src={imgTel} alt="Телефон"/>
				<a href='tel:0670090209'>+38 (067) 009 02 09</a>
			</div>
		</address>
	)
}

export default Contacts