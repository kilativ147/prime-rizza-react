import { useContext, useEffect } from 'react'
import s from './CartList.module.scss'
import ProductsContext from '../../context/ProductsContext'

const CartItem = ({ id, img, title, count, price }) => {
	const { cartList, changeCartList } = useContext(ProductsContext)

	const onPlusHandle = () => {
		let oldList = { ...cartList }
		if (oldList[id] != undefined) {
			oldList[id]++
		} else {
			oldList[id] = 1
		}
		changeCartList(oldList)
	}
	const onMinusHandle = () => {
		let oldList = { ...cartList }
		if (oldList[id] != undefined) {
			oldList[id]--

			if (oldList[id] <= 0) delete oldList[id]
		}

		changeCartList(oldList)
	}

	const onDeleteHandle = () => {
    let oldList = { ...cartList }
		delete oldList[id]
		changeCartList(oldList)
	}

	const sum = price * count

	return (
		<li>
			<div>
				<img src={img} alt={title} />
			</div>
			<p className={s.title}>{title}</p>
			<button
				type='button'
				className={s.basket__item_button + ' ' + s.minus}
				onClick={onMinusHandle}
			>
				-
			</button>
			<p className={s.count}>{count}</p>
			<button type='button' className={s.basket__item_button + ' ' + s.plus} onClick={onPlusHandle}>
				+
			</button>
			<p className={s.summ}>{sum}</p>
			<span> грн.</span>
			<button
				type='button'
				className={s.basket__item_button + ' ' + s.delete}
				onClick={onDeleteHandle}
			>
				&#215;
			</button>
		</li>
	)
}

export default CartItem
