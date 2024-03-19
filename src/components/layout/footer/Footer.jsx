import s from './Footer.module.scss'

import { useContext } from 'react'

import ProductsContext from '../../../context/ProductsContext'
import Logo from '../logo/Logo'
import NavBar from '../navbar/NavBar'

import imgInst from '../../../img/svg/inst.svg'
import imgFb from '../../../img/svg/fb.svg'
import imgAddress from '../../../img/svg/address.svg'
import imgMail from '../../../img/svg/email.svg'
import imgTel from '../../../img/svg/phone.svg'

const Footer = () => {
	const { contacts } = useContext(ProductsContext)
	return (
		<footer className={s.footer}>
			<div className={s.footer__container}>
				<div className={s.footer__top}>
					<Logo classComponent='footer'/>
					<NavBar classComponent='footer'/>
					<div className={s.footer__media}>
						<a href={contacts.inst} target='_blank'>
							<img src={imgInst} alt='Instagram' />
						</a>
						<a href={contacts.fb} target='_blank'>
							<img src={imgFb} alt='Facebook' />
						</a>
					</div>
				</div>
				<div className={s.footer__bottom}>
					<p className={s.footer__rights}>© 2023 Всі права захищені</p>
					<address className={s.footer__address}>
						<a href={contacts.map} target='_blank'>
							<img src={imgAddress} alt='street' />
							<span>{contacts.address}</span>
						</a>
						<a href={`emailto:${contacts.email}`}>
							<img src={imgMail} alt='mail' />
							<span>{contacts.email}</span>
						</a>

						<a href={`tel:+38${contacts.phone}`}>
							<img src={imgTel} alt='' />
							<span>
								{`+38 (${contacts.phone.slice(0, 3)}) ${contacts.phone.slice(
									3,
									6,
								)}-${contacts.phone.slice(6, 8)}-${contacts.phone.slice(8)}`}
							</span>
						</a>
					</address>
				</div>
			</div>
		</footer>
	)
}

export default Footer
