//import s from './CartList.module.css'

const CartList = () => {
  return (
		<aside className='basket'>
			<button type='button' className='basket__close' />
			<form action='' className='basket__form'>
				<h4>Ваше замовлення</h4>
				<div className='basket__list-content'>
					<ul className='basket__list'>
						
            <li>
							<div>
								<img src='' alt='' />
							</div>
							<p className='item__name'>Страва</p>
							<button type='button' className='basket__item-button -minus'>
								-
							</button>
							<p className='item__count'>1</p>
							<button type='button' className='basket__item-button -plus'>
								+
							</button>
							<p className='item__summ'>99</p>
							<span> грн.</span>
							<button type='button' className='basket__item-button -delete'>
								×
							</button>
						</li>
            
					</ul>
				</div>
				<div className='basket__summ'>
					сума: <span>99</span> грн.
				</div>
				<button className='basket__post'>Підтвердити замовлення</button>
			</form>
		</aside>
	)
}

export default CartList