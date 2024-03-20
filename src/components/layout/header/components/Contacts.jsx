import s from './Contacts.module.scss'
import { useContext } from 'react'
import ProductsContext from '../../../../context/ProductsContext'


const Contacts = () => {
	const { contacts } = useContext(ProductsContext)
	return (
		<address className={s.header__adress}>
			<p className={s.header__worktime}>{contacts.time}</p>
			<a href={`tel:+38${contacts.phone}`} className={s.header__phone}>
				{`+38 (${contacts.phone.slice(0, 3)})
				${contacts.phone.slice(3, 6)}-${contacts.phone.slice(6, 8)}-${contacts.phone.slice(8)}`}
			</a>
		</address>
	)
}

export default Contacts
