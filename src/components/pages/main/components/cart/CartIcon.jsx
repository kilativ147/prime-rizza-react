import { useContext, useEffect, useState } from 'react'
import s from './CartIcon.module.scss'
import { IoIosCart } from 'react-icons/io'
import ProductsContext from '../../../../../context/ProductsContext'

const CartIcon = ({ changeVisibility }) => {
	const { cartList } = useContext(ProductsContext)
	const [count, setCount] = useState(0) // Початкове значення count буде 0

	useEffect(() => {
		const num = Object.keys(cartList).length
		if (num <= 0) changeVisibility(false)
		setCount(num)
	}, [cartList])

	const classVisibility = count > 0 ? `${s.cart} ${s._active}` : `${s.cart}`

	return (
		<button
			role='button'
			aria-label='Відкрити список товарів у корзині'
			type='burron'
			className={classVisibility}
			onClick={() => changeVisibility(true)}
			style={{ userSelect: 'none' }}
		>
			{/* <div className={s.cart__icon}> */}
				<IoIosCart />
			{/* </div> */}
			<div className={s.cart__count}>{count}</div>
		</button>
	)
}

export default CartIcon
