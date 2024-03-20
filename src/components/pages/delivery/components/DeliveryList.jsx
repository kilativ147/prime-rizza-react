import s from './List.module.scss'
import Item from './Item'

const DeliveryList = () => {
	const items = [
		{
			title: '20',
			text: 'У "зелену зону" - від 20 хвилин',
			description: 'Безкоштовна доставка від 3 піц',
			color: 'green',
		},
		{
			title: '40',
			text: 'У "жовту зону" - від 40 хвилин',
			description: 'Безкоштовна доставка від 4 піц',
			color: 'yellow',
		},
		{
			title: '60',
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
