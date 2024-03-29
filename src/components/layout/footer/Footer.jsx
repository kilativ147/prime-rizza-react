import s from './Footer.module.scss'

import { useContext } from 'react'

import ProductsContext from '../../../context/ProductsContext'
import Logo from '../logo/Logo'
import NavBar from '../navbar/NavBar'

const Footer = () => {
	const { contacts } = useContext(ProductsContext)
	return (
		<footer className={s.footer}>
			<div className={s.footer__container}>
				<div className={s.footer__top}>
					<Logo classComponent='footer' />
					<NavBar classComponent='footer' />
					<div className={s.footer__media}>
						<a
							role='link'
							aria-label='Посидання на сторінку в Instagram'
							href={contacts.inst}
							target='_blank'
							className={s.footer__media_inst}
						></a>
						<a
							role='link'
							aria-label='Посидання на сторінку в Facebook'
							href={contacts.fb}
							target='_blank'
							className={s.footer__media_fb}
						></a>
					</div>
				</div>
				<div className={s.footer__bottom}>
					<p className={s.footer__rights}>© 2023 Всі права захищені</p>
					<address className={s.footer__contacts}>
						<a
							role='link'
							aria-label='Посилання на адресу в Google Maps'
							href={contacts.map}
							target='_blank'
							className={s.footer__contacts_address}
						>
							{contacts.address}
						</a>
						<a
							role='link'
							aria-label='Посилання на відправку листа по електронній пошті'
							href={`mailto:${contacts.email}`}
							className={s.footer__contacts_email}
						>
							{contacts.email}
						</a>
						<a
							role='link'
							aria-label='Посидання на телефонний дзвінок'
							href={`tel:+38${contacts.phone}`}
							className={s.footer__contacts_phone}
						>
							{`+38 (${contacts.phone.slice(0, 3)})
							${contacts.phone.slice(3, 6)}-${contacts.phone.slice(6, 8)}-${contacts.phone.slice(8)}`}
						</a>
					</address>
				</div>
			</div>
		</footer>
	)
}

export default Footer
