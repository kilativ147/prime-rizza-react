import s from './Promotional.module.scss'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { useContext, useEffect } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import PromotionalItem from './PromotionalItem'
import ProductsContext from '../../../context/ProductsContext'

const Promotional = () => {
	const { promotionals } = useContext(ProductsContext)
	useEffect(() => {
		document.title = 'Prime Pizza ⋅ Акції'
	}, [])

	const PromotionalList = promotionals.map((item, index) => (
		<PromotionalItem key={index} {...item} />
	))

	return (
		<section className={s.promotional}>
			<div className={s.promotional__container}>
				<div className={s.promotional__hero}>
					<div className={s.promotional__hero_img}>
						<LazyLoadImage
							src='/img/promotional/Hero.webp'
							placeholderSrc='/img/promotional/Hero-small.webp'
							effect='blur'
							alt={'Hero section'}
						/>
					</div>
					<h2>
						Ніщо так не доповнює смачну піцу, як <span>АКЦІЇ</span>
					</h2>
				</div>
				{PromotionalList}
			</div>
		</section>
	)
}

export default Promotional
