import s from './CartItem.module.scss'
import { useContext } from 'react'
import ProductsContext from '../../../../../context/ProductsContext'

import { CiSquarePlus, CiSquareMinus } from 'react-icons/ci'
import { RxCross2 } from 'react-icons/rx'

const CartItem = ({ id, img, title, count, price }) => {
	const { cartList, changeCartList } = useContext(ProductsContext)
	img = `/img/products/compressed/${img}`

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
		<li className={s.item}>
			<div className={s.img}>
				<img src={img} alt={title} />
			</div>
			<p className={s.title}>{title}</p>
			<button role='button' aria-label='Зменшити кількість на 1' type='button' className={s.button} onClick={onMinusHandle}>
				<CiSquareMinus />
			</button>
			<p className={s.count}>{count}</p>
			<button role='button' aria-label='Збільшити кількість на 1' type='button' className={s.button} onClick={onPlusHandle}>
				<CiSquarePlus />
			</button>
			<p className={s.summ}>{sum}</p>
			<span className={s.currency}> грн.</span>
			<button role='button' aria-label='Видалити товар з корзини' type='button' className={s.button} onClick={onDeleteHandle}>
				<RxCross2 />
			</button>
		</li>
	)
}

export default CartItem
