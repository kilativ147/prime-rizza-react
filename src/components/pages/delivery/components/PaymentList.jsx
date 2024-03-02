import s from './List.module.scss'
import imgCash from '../../../../img/svg/MoneyCash.svg'
import imgCard from '../../../../img/svg/MoneyCard.svg'

import Item from './Item'

const PaymentList = () => {
	const items = [
		{
			img: imgCash,
			text: 'Готівка',
			description: 'вкажіть розрахунок без решти',
		},
		{
			img: imgCard,
			text: 'Карта',
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
