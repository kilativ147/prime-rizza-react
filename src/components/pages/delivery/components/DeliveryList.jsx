import s from './List.module.scss'
import img20Min from '../../../../img/svg/delivery20.svg'
import img40Min from '../../../../img/svg/delivery40.svg'
import img60Min from '../../../../img/svg/delivery60.svg'
import Item from './Item'

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

	const DeliveryItems = items.map((item, index) => <Item key={index} {...item}/>)

	return (
		<article className={s.article}>
			<h2>Правила доставки</h2>
			<div className={s.list}>{DeliveryItems}</div>
		</article>
	)
}

export default DeliveryList
