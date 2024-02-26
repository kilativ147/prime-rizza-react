import s from './Footer.module.scss'
import { NavLink } from 'react-router-dom'
import imgLogo from '../../img/Logo.png'
import imgInst from '../../img/svg/FooterInst.svg'
import imgFb from '../../img/svg/FooterFB.svg'
import imgAddress from '../../img/svg/FooterAddress.svg'
import imgMail from '../../img/svg/FooterMail.svg'
import imgTel from '../../img/svg/FooterPhone.svg'

const Footer = () => {
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
						<a href='http://instagram.com' target='_blank'>
							<img src={imgInst} alt='Instagram' />
						</a>
						<a href='http://facebook.com' target='_blank'>
							<img src={imgFb} alt='Facebook' />
						</a>
					</div>
				</div>
				<div className={s.footer__bottom}>
					<p className={s.footer__rights}>© 2023 Всі права захищені</p>
					<address className={s.footer__address}>
						<a href='#'>
							<img src={imgAddress} alt='street' />
							<span> вул. Єврейська площа 3</span>
						</a>
						<a href='mailto:primepizza@gmail.com'>
							<img src={imgMail} alt='mail' />
							<span> primepizza@gmail.com</span>
						</a>
						<a href='tel:0670090209'>
							<img src={imgTel} alt='' />
							<span> +38 (067) 009 02 09</span>
						</a>
					</address>
				</div>
			</div>
		</footer>
	)
}

export default Footer
