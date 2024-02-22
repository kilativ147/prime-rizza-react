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
			color: 'green',
		},
		{
			img: img40Min,
			title: '40хв',
			text: 'У "жовту зону" - від 40 хвилин',
			description: 'Безкоштовна доставка від 4 піц',
			color: 'yellow',
		},
		{
			img: img60Min,
			title: 'red',
			text: 'У "червону зону" - від 60 хвилин',
			description: 'Безкоштовна доставка від 5 піц',
			color: 'red',
		},
	]

	const DeliveryItems = items.map((item, index) => <DeliveryItem key={index} {...item} />)

	return (
		<article className={s.delivery__rules}>
			<h2>Правила доставки</h2>
			<div className={s.delivery__rules_flex}>{DeliveryItems}</div>
		</article>
	)
}

export default DeliveryList
