import s from './Delivery.module.css'
import Form from '../../form/Form'
import DeliveryList from './components/DeliveryList'
import PaymentList from './components/PaymentList'

const Delivery = () => {
	return (
		<div
			style={{
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
			}}
		>
			<section className='delivery__container'>
				<div className={s.delivery__content}>
					<DeliveryList />
					<PaymentList/>
				</div>
			</section>
			<Form />
		</div>
	)
}

export default Delivery
