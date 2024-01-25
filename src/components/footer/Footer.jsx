import s from './Footer.module.css'
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
				<div className={s.footer__content}>
					<NavLink to={'/'}>
						<img src={imgLogo} alt='Instagram' />
					</NavLink>
					<nav className={s.footer__nav}>
						<NavLink to={'/promotional'}>Акції</NavLink>
						<NavLink to={'/delivery'}>Доставка</NavLink>
						<NavLink to={'/about'}>Про нас</NavLink>
					</nav>
					<div className={s.footer__media}>
						<a href='instagram.com'>
							<img src={imgInst} alt='Instagram' />
						</a>
						<a href='facebook.com'>
							<img src={imgFb} alt='Facebook' />
						</a>
					</div>
				</div>
				<div className={s.footer__bottom}>
					<div className={s.footer__rights}>
						<p>© 2023 Всі права захищені</p>
					</div>
					<address className={s.footer__address}>
						<div>
							<img src={imgAddress} alt='street' />
							<p>вул. Єврейська площа 3</p>
						</div>
						<div>
							<img src={imgMail} alt='mail' />
							<a href='mailto:primepizza@gmail.com'>primepizza@gmail.com</a>
						</div>
						<div>
							<img src={imgTel} alt='' />
							<a href='tel:0670090209'>+38 (067) 009 02 09</a>
						</div>
					</address>
				</div>
			</div>
		</footer>
	)
}

export default Footer
