import s from './Promotional.module.scss'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { useEffect } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import PromotionalItem from './PromotionalItem'
import imgHero from '../../../img/pages/promotional/Hero.webp'
import imgHeroS from '../../../img/pages/promotional/Hero-small.webp'
import img1Plus1 from '../../../img/pages/promotional/Offer1+1.webp'
import imgMinus15 from '../../../img/pages/promotional/Offer-15.webp'
import imgCoffee from '../../../img/pages/promotional/OfferCoffee.webp'
import imgCola from '../../../img/pages/promotional/OfferCola.webp'

const Promotional = () => {
	useEffect(() => {
		document.title = 'Prime Pizza ⋅ Акції'
	}, [])

	//! TRANSLATE THIS TO STORE    !!!!!!

	const items = [
		{
			img: img1Plus1,
			title: '1 + 1 = 3',
			text: 'Акційна пропозиція! Замов 2 будь-які піци та отримай третю у подарунок!',
			textWarning: 'Увага, акції не сумуються!',
		},
		{
			img: imgCola,
			title: '1 + 1 = Кола(0,5л.)',
			text: 'Акційна пропозиція! Замов 2 будь-які піци та отримай колу 0,5 л. подарунок!',
			textWarning: 'Увага, акції не сумуються!',
		},
		{
			img: imgMinus15,
			title: '-15% на самовиніс',
			text: 'Акційна пропозиція! Отримай знижку 15% на усе замовлениия якщо забереш його самостійно!',
			textWarning: 'Увага, акції не сумуються!',
		},
		{
			img: imgCoffee,
			title: '-20% на ранкову каву',
			text: 'Акційна пропозиція! Отримай знижку 20% на ранкову каву!',
			textWarning: 'Увага, акції не сумуються!',
		},
	]

	console.log(isLoading, Date.now())

	const PromotionalList = items.map((item, index) => <PromotionalItem key={index} {...item} />)

	return (
		<section className={s.promotional}>
			<div className={s.promotional__container}>
				<div className={s.promotional__hero}>
					<div className={s.promotional__hero_img}>
						<LazyLoadImage
							src={imgHero}
							placeholderSrc={imgHeroS}
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
