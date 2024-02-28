import { useEffect } from 'react'
import s from './Delivery.module.css'
import DeliveryList from './components/DeliveryList'
import PaymentList from './components/PaymentList'

const Delivery = () => {
	useEffect(() => {
		document.title = 'Prime Pizza ⋅ Доставка'
	}, [])
	return (
		<div className={s.delivery}>
			<section className='delivery__container'>
				<div className={s.delivery__content}>
					<DeliveryList />
					<PaymentList />
				</div>
			</section>
		</div>
	)
}

export default Delivery
