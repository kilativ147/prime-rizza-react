import s from './AboutContent.module.scss'
import Item from './Item'
import AboutMap from './AboutMap'
import { useContext } from 'react'
import ProductsContext from '../../../../context/ProductsContext'

const AboutContent = () => {
	const {about} = useContext(ProductsContext)
	const ContentItems = about.map((item, index) => <Item key={index} index={index} {...item} />)

	return (
		<section className={s.about__content}>
			<article className={s.about__container}>
				<div className={s.about__content_flex}>{ContentItems}</div>
			</article>
		
			<AboutMap />
		</section>
	)
}

export default AboutContent
