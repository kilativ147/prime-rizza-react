import s from './CartList.module.scss'
import CartItem from './CartItem'
import { useContext, useEffect, useState, useRef } from 'react'
import ProductsContext from '../../context/ProductsContext'

const CartList = ({ changeVisibility, showList, cartRef }) => {
	const { productsList, cartList, changeCartList } = useContext(ProductsContext)
	const [sum, setSum] = useState(0)
	const listRef = useRef(null)

	//@ Change the SUM of all products in wish list
	useEffect(() => {
		// Go through all the elements of the object
		const newSum = Object.keys(cartList)
			.map((itemId) => {
				// Find our element in global json list
				const item = productsList.find((item) => item.id === itemId)
				// if we find it => add the (count * prise) to array
				return item ? item.price * cartList[itemId] : null
			})
			// Get the SUM of all element
			.reduce((a, b) => a + b, 0)

		setSum(newSum)
	}, [cartList])

	//@ Build the array of items in wish list
	const cartItems = Object.keys(cartList).map((productId) => {
		//find element of wishlist in global JSON file
		const item = productsList.find((item) => item.id === productId)
		// if its match => create component
		return item ? (
			<CartItem
				key={item.id}
				id={item.id}
				title={item.title}
				img={item.image}
				count={cartList[productId]}
				price={item.price}
			/>
		) : null
	})

	//@ hide WISHLIST by click OUTSIDE
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (listRef.current && listRef.current.contains(event.target)) {
				changeVisibility(false)
			}
		}
		document.addEventListener('click', handleClickOutside)
		return () => {
			document.removeEventListener('click', handleClickOutside)
		}
	}, [showList])

	document.body.style.overflow = showList ? 'hidden' : 'auto'
	const classVisibility = showList ? `${s.basket} ${s._activeBasket}` : s.basket
	const classVisibilityA = showList ? `${s.outside} ${s._visible}` : s.outside

	return (
		<aside className={classVisibilityA} ref={listRef}>
			<div className={classVisibility}>
				<button type='button' className={s.basket__close} onClick={() => changeVisibility(false)} />
				<form action='' className={s.basket__form}>
					<h4>Ваше замовлення</h4>
					<div className={s.basket__list_content}>
						<ul className={s.basket__list}>{cartItems}</ul>
					</div>
					<div className={s.basket__summ}>
						сума: <span>{sum}</span> грн.
					</div>
					<button className={s.basket__post}>Підтвердити замовлення</button>
				</form>
			</div>
		</aside>
	)
}

export default CartList
