import s from '../Delivery.module.css'
import imgCash from '../../../../img/svg/MoneyCash.svg'
import imgCard from '../../../../img/svg/MoneyCard.svg'

import DeliveryItem from './DeliveryItem'

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
			description: 'Розрахунки картою проводяться через термінал який кур\'єр буде мати з собою',
			color: 'yellow',
		}
	]

	const DeliveryItems = () => {
		return items.map((item) => (
			<DeliveryItem
				img={item.img}
				text={item.text}
				description={item.description}
				isPay
			/>
		))
	}

	return (
		<article className={s.delivery__rules}>
			<h2>
				Правила оплати
			</h2>
			<div className={s.delivery__rules_flex}>
				<DeliveryItems />
			</div>
		</article>
	)
}

export default PaymentList
