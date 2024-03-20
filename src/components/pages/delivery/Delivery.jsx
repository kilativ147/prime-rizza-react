import s from './Delivery.module.scss'
import { useEffect } from 'react'
import DeliveryList from './components/DeliveryList'
import PaymentList from './components/PaymentList'

const Delivery = () => {
	useEffect(() => {
		document.title = 'Prime Pizza ⋅ Доставка'
	}, [])
	return (
		<div className={s.delivery}>
			<section className={s.delivery__container}>
				<div className={s.delivery__content}>
					<DeliveryList />
					<PaymentList />
				</div>
			</section>
		</div>
	)
}

export default Delivery
