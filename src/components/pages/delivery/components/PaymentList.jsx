//import s from './PaymentList.module.css'

const PaymentList = () => {
	return (
		<article className='delivery__pays'>
			<h2>
				<strong>Правила оплати</strong>
			</h2>
			<div className='delivery__pays-flex animation-show'>
				<div className='delivery__pay'>
					<div className='pay__top'>
						<div className='pay__top-back' />
						<div className='rule__top-img'>
							<img src='img/delivery/money_cash.svg' alt='cash' />
						</div>
					</div>
					<p>
						<b>Готівка</b>
					</p>
					<p>вкажіть розрахунок без решти</p>
				</div>
				<div className='delivery__pay'>
					<div className='pay__top'>
						<div className='pay__top-back' />
						<div className='rule__top-img'>
							<img src='img/delivery/money_card.svg' alt='cash' />
						</div>
					</div>
					<p>
						<b>Карта</b>
					</p>
					<p>Розрахунки картою проводяться через термінал який кур'єр буде мати з собою</p>
				</div>
			</div>
		</article>
	)
}

export default PaymentList
