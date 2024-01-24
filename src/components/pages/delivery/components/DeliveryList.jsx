import s from '../Delivery.module.css'
import img20Min from '../../../../img/svg/20m.svg'
import img40Min from '../../../../img/svg/40m.svg'
import img60Min from '../../../../img/svg/60m.svg'
import DeliveryItem from './DeliveryItem'

const DeliveryList = () => {
	const items = [
		{
			img: img20Min,
			title: '20хв',
			text: 'У "зелену зону" - від 20 хвилин',
			description: 'Безкоштовна доставка від 3 піц',
			color: 'linear-gradient(92.06deg, #2EC674 3.15%, #9DE73E 96.53%)',
		},
		{
			img: img40Min,
			title: '40хв',
			text: 'У "жовту зону" - від 40 хвилин',
			description: 'Безкоштовна доставка від 4 піц',
			color: 'linear-gradient(92.06deg, #2EC674 3.15%, #9DE73E 96.53%)',
		},
		{
			img: img60Min,
			title: '60хв',
			text: 'У "червону зону" - від 60 хвилин',
			description: 'Безкоштовна доставка від 5 піц',
			color: 'linear-gradient(92.06deg, #2EC674 3.15%, #9DE73E 96.53%)',
		},
	]

	const DeliveryItems = () => {
		return items.map((item) => (
			<DeliveryItem
				img={item.img}
				title={item.title}
				text={item.text}
				description={item.description}
			/>
		))
	}

	return (
		<article className={s.delivery__rules}>
			<h2>
				<strong>Правила доставки</strong>
			</h2>
			<div className={s.delivery__rules_flex}>
				<DeliveryItems />
			</div>
		</article>
	)
}

export default DeliveryList
