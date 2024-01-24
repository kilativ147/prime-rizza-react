//import s from './Contacts.module.css'

const Contacts = () => {
  return (
		<address class='header__adress'>
			<div class='header__worktime'>
				{/* <img src="img/icons/header_time.svg" alt="Робочий час"/> */}
				<p>Кожного дня 10:00 - 22:00</p>
			</div>
			<div class='header__phone'>
				{/* <img src="img/icons/header_phone.svg" alt="Телефон"/> */}
				<a href='tel:0670090209'>+38 (067) 009 02 09</a>
			</div>
		</address>
	)
}

export default Contacts