import s from './Contacts.module.scss'
import { useContext } from 'react'
import ProductsContext from '../../../../context/ProductsContext'

import imgSchedule from '../../../../img/svg/clock.svg'
import imgTel from '../../../../img/svg/phone.svg'

const Contacts = () => {
	const {contacts} = useContext(ProductsContext)
  return (
		<address className={s.header__adress}>
			<div className={s.header__worktime}>
				<img src={imgSchedule} alt='Робочий час' />
				<p>{contacts.time}</p>
			</div>
			<div className={s.header__phone}>
				<img src={imgTel} alt='Телефон' />
				<a href={`tel:+38${contacts.phone}`}>{`+38 (${contacts.phone.slice(
					0,
					3,
				)}) ${contacts.phone.slice(3, 6)}-${contacts.phone.slice(6, 8)}-${contacts.phone.slice(
					8,
				)}`}</a>
			</div>
		</address>
	)
}

export default Contacts