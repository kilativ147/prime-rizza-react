// import s from './Promotional.module.scss'
import { useEffect } from 'react'
import PromotionalItem from './PromotionalItem'
import img1Plus1 from '../../../img/pages/promotional/Offer1+1.png'
import imgMinus15 from '../../../img/pages/promotional/Offer-15.png'
import imgCoffee from '../../../img/pages/promotional/OfferCoffee.png'
import imgCola from '../../../img/pages/promotional/OfferCola.png'

const Promotional = () => {
	useEffect(() => {
		document.title = 'Prime Pizza ⋅ Акції'
}, [])
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

	const PromotionalList = items.map((item, index) => <PromotionalItem key={index} {...item} />)

	return (
		<section
			className='promotional__container'
			style={{
				padding: '70px 20px',
			}}
		>
			{PromotionalList}
		</section>
	)
}

export default Promotional
