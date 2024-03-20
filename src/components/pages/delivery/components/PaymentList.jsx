import s from './List.module.scss'
import Item from './Item'

const PaymentList = () => {
	const items = [
		{
			title: 'Cash',
			text: 'Готівкою',
			description: 'вкажіть розрахунок без решти',
			color: 'yellow',
		},
		{
			title: 'Card',
			text: 'Картою',
			description: "Розрахунки картою проводяться через термінал який кур'єр буде мати з собою",
			color: 'yellow',
		},
	]

	const DeliveryItems = items.map((item, index) => <Item key={index} {...item} isPay />)

	return (
		<article className={s.article}>
			<h2>Правила оплати</h2>
			<div className={s.list}>{DeliveryItems}</div>
		</article>
	)
}

export default PaymentList
