import s from './AboutMap.module.scss'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'

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
				<div className={s.map__logo}></div>
				<address className={s.map__contacts_flex}>
					<a className={`${s.map__contact} ${s.map__contact_address}`} href={contacts.map} target='_blank'>
						{contacts.address}
					</a>
					<a className={`${s.map__contact} ${s.map__contact_email}`} href={`emailto:${contacts.email}`}>
						{contacts.email}
					</a>
					<a className={`${s.map__contact} ${s.map__contact_phone}`} href={`tel:+38${contacts.phone}`}>
						{numberView}
					</a>
					<p className={`${s.map__contact} ${s.map__contact_clock}`}>{contacts.time}</p>
				</address>
			</div>
		</section>
	)
}

export default AboutMap
