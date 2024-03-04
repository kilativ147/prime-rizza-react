import s from './AboutMap.module.scss'
import imgLogo from '../../../../img/Logo.png'
import imgEmail from '../../../../img/svg/FooterMail.svg'
import imgAddress from '../../../../img/svg/FooterAddress.svg'
import imgPhone from '../../../../img/svg/FooterPhone.svg'
import imgTime from '../../../../img/svg/HeaderTime.svg'
import { useContext } from 'react'
import ProductsContext from '../../../../context/ProductsContext'

const AboutMap = () => {
const {contacts} = useContext(ProductsContext)

	return (
		<section className={s.map}>
			<a href={contacts.map} target='_blank'></a>
			<div className={s.map__container}>
				<div className={s.map__content}>
					<div className={s.map__logo}>
						<img src={imgLogo} alt='Logo' />
					</div>
					<address className={s.map__contacts_flex}>
						<div className={s.map__contact}>
							<div>
								<img src={imgAddress} alt='address' />
							</div>
							<a href={contacts.map} target='_blank'>{contacts.address}</a>
						</div>
						<div className={s.map__contact}>
							<div>
								<img src={imgEmail} alt='email' />
							</div>
							<a href={contacts.mailTo}>{contacts.email}</a>
						</div>
						<div className={s.map__contact}>
							<div>
								<img src={imgPhone} alt='phone' />
							</div>
							<a href={contacts.tel}>{contacts.phone}</a>
						</div>
						<div className={s.map__contact}>
							<div>
								<img src={imgTime} alt='time' />
							</div>
							<p>{contacts.time}</p>
						</div>
					</address>
				</div>
			</div>
		</section>
	)
}

export default AboutMap
