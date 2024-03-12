import s from './Footer.module.scss'
import { NavLink } from 'react-router-dom'
import imgLogo from '../../img/Logo.webp'
import imgInst from '../../img/svg/FooterInst.svg'
import imgFb from '../../img/svg/FooterFB.svg'
import imgAddress from '../../img/svg/FooterAddress.svg'
import imgMail from '../../img/svg/FooterMail.svg'
import imgTel from '../../img/svg/FooterPhone.svg'
import { useContext } from 'react'
import ProductsContext from '../../context/ProductsContext'

const Footer = () => {
	const { contacts } = useContext(ProductsContext)
	return (
		<footer className={s.footer}>
			<div className={s.footer__container}>
				<div className={s.footer__top}>
					<NavLink to={'/'}>
						<img src={imgLogo} alt='Instagram' />
					</NavLink>
					<nav className={s.footer__nav}>
						<NavLink to={'/promotional'}>Акції</NavLink>
						<NavLink to={'/delivery'}>Доставка</NavLink>
						<NavLink to={'/about'}>Про нас</NavLink>
					</nav>
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
						<a href={contacts.mailTo}>
							<img src={imgMail} alt='mail' />
							<span>{contacts.email}</span>
						</a>
						<a href={contacts.tel}>
							<img src={imgTel} alt='' />
							<span>{contacts.phone}</span>
						</a>
					</address>
				</div>
			</div>
		</footer>
	)
}

export default Footer
