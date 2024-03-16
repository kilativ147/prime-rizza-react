import s from './AboutMap.module.scss'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import imgLogo from '../../../../img/Logo.webp'
import imgEmail from '../../../../img/svg/FooterMail.svg'
import imgAddress from '../../../../img/svg/FooterAddress.svg'
import imgPhone from '../../../../img/svg/FooterPhone.svg'
import imgTime from '../../../../img/svg/HeaderTime.svg'
import { useContext } from 'react'
import ProductsContext from '../../../../context/ProductsContext'

const AboutMap = () => {
	const { contacts } = useContext(ProductsContext)
	const numberView = `+38 (${contacts.phone.slice(0, 3)}) ${contacts.phone.slice(
		3,
		6,
	)}-${contacts.phone.slice(6, 8)}-${contacts.phone.slice(8)}`

	return (
		<section className={s.map}>
			<a href={contacts.map} target='_blank'>
				<LazyLoadImage
					src='/img/about/Map.webp'
					placeholderSrc='/img/about/Map-small.webp'
					effect='blur'
					alt={'Map'}
				/>
			</a>
			<div className={s.map__content}>
				<div className={s.map__logo}>
					<img src={imgLogo} alt='Logo' />
				</div>
				<address className={s.map__contacts_flex}>
					<a className={s.map__contact} href={contacts.map} target='_blank'>
						<img src={imgAddress} alt='address' />
						<span>{contacts.address}</span>
					</a>
					<a className={s.map__contact} href={`emailto:${contacts.email}`}>
						<img src={imgEmail} alt='email' />
						<span>{contacts.email}</span>
					</a>
					<a className={s.map__contact} href={`tel:+38${contacts.phone}`}>
						<img src={imgPhone} alt='phone' />
						<span>{numberView}</span>
					</a>
					<p className={s.map__contact}>
						<img src={imgTime} alt='time' />
						<span>{contacts.time}</span>
					</p>
				</address>
			</div>
		</section>
	)
}

export default AboutMap
