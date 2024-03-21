import { useContext, useState, useEffect } from 'react'
import s from './Order.module.scss'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import ProductsContext from '../../../context/ProductsContext'
import TableItem from './TableItem'
import orderFunc from '../../../functions/orderFunc'
import { NavLink, useNavigate } from 'react-router-dom'

const Order = ({ setIsLoading }) => {
	const [userName, setUserName] = useState('')
	const [userPhone, setUserPhone] = useState('')
	const [userEmail, setUserEmail] = useState('')
	const [userAddress, setUserAddress] = useState('')
	const [userPayment, setUserPayment] = useState('')
	const [userComment, setUserComment] = useState('')
	const navigate = useNavigate()
	const { cartList, productsList, changeCartList } = useContext(ProductsContext)

	const orderList = Object.keys(cartList).map((itemKey, index) => {
		const item = productsList.find((i) => i.id === itemKey)
		return item ? (
			<TableItem
				key={itemKey}
				order={++index}
				title={item.title}
				count={cartList[itemKey]}
				price={item.price}
			/>
		) : null
	})
	const sum = Object.keys(cartList)
		.map((itemKey) => {
			const item = productsList.find((i) => i.id === itemKey)
			return item ? item.price * cartList[itemKey] : null
		})
		.reduce((a, b) => a + b, 0)

	const handleSubmit = async (e) => {
		e.preventDefault()
		setIsLoading(true)
		const send = await orderFunc(
			cartList,
			productsList,
			userName,
			userPhone,
			userEmail,
			userAddress,
			userPayment,
			userComment,
			sum,
		)
		if (send !== false) {
			localStorage.removeItem('cartList')
			changeCartList({})
			setUserName('')
			setUserPhone('')
			setUserEmail('')
			setUserAddress('')
			setUserPayment('')
			setUserComment('')
			console.log('redirect')

			setTimeout(() => {
				setIsLoading(false)
				navigate('/', { replace: true })
			}, 500)
			alert('Ваше замовлення надіслано')
		} else console.log('error')
	}

	useEffect(() => {
		document.title = 'Prime Pizza ⋅ Замовлення'
		document.body.style.removeProperty('overflow')

		if (localStorage.getItem('cartList') != undefined) {
			const localStorageList = JSON.parse(localStorage.getItem('cartList'))
			changeCartList(localStorageList)
		}
	}, [])

	return (
		<section className={s.order + ' __container'}>
			<NavLink role='link' aria-label='Посидання на головну сторінку' to='/' className={s.order__back}>
				<span>
					<FaLongArrowAltLeft />
				</span>{' '}
				На головну
			</NavLink>
			<div className={s.card}>
				<p className={s.title}>Ваше замовлення:</p>
				<div className={s.table}>
					{orderList}
					<p className={s.table__sum}>
						Сума замовлення: <b>{sum} грн.</b>
					</p>
				</div>
				<form action='#' onSubmit={handleSubmit} className={s.form}>
					<input
						type='text'
						value={userName}
						onChange={(e) => setUserName(e.target.value)}
						placeholder="Ім'я"
						required
					/>
					<input
						type='tel'
						value={userPhone}
						onChange={(e) => setUserPhone(e.target.value)}
						placeholder='Телефон'
						required
					/>
					<input
						type='email'
						value={userEmail}
						onChange={(e) => setUserEmail(e.target.value)}
						placeholder='E-mail'
						required
					/>
					<input
						type='text'
						value={userAddress}
						onChange={(e) => setUserAddress(e.target.value)}
						placeholder='Адреса'
						required
					/>

					<div className={s.radio}>
						<p>Оплата:</p>
						<label htmlFor='payment-cash' className={s.radio__label}>
							<input
								id='payment-cash'
								name='payment'
								type='radio'
								value='cash'
								onChange={(e) => setUserPayment(e.target.value)}
								required
							/>
							<span>Готівкою при отриманні</span>
						</label>

						<label htmlFor='payment-card' className={s.radio__label}>
							<input
								id='payment-card'
								name='payment'
								type='radio'
								value='card'
								onChange={(e) => setUserPayment(e.target.value)}
								required
							/>
							<span>Онлайн банківською картою</span>
						</label>
					</div>
					<textarea
						rows='3'
						value={userComment}
						onChange={(e) => setUserComment(e.target.value)}
						placeholder='Коментар до замовлення...'
					></textarea>

					<button
						role='button'
						aria-label='Підтвердження замовлення'
						type='submit'
						value='Send'
						className={s.button}
					>
						Підтвердження замовлення
					</button>
				</form>
			</div>
		</section>
	)
}

export default Order
