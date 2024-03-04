import s from './Form.module.scss'
import ArrowImg from '../../img/svg/Form ArrowRight.svg'
import React, { useState } from 'react'
import callbackFunc from './CallbackFunc'

const Form = ({ setLoader }) => {
	const [userName, setUserName] = useState('')
	const [userPhone, setUserPhone] = useState('')
	const [userEmail, setUserEmail] = useState('')

	const handleSubmit = async (e) => {
		e.preventDefault()
		setLoader(true)
		const send = callbackFunc(
			userName,
			setUserName,
			userPhone,
			setUserPhone,
			userEmail,
			setUserEmail,
		)
		if (send !== false) {
			setUserName('')
			setUserPhone('')
			setUserEmail('')
			console.log('redirect')
			setTimeout(() => {
				setLoader(false)
			}, 500)
			alert('Ваш запит надіслано')
		} else console.log('error')
	}

	return (
		<article className={s.main__form}>
			<form action='#' className={s.form} onSubmit={handleSubmit}>
				<p className={s.form__title}>Заповніть форму і ми одразу зв'яжемось з Вами!</p>
				<div className={s.form__fields}>
					<input
						className={s.form__field}
						name='user_name'
						type='text'
						value={userName}
						onChange={(e) => {
							setUserName(e.target.value)
						}}
						placeholder="Ваше ім'я"
						required
					/>
					<input
						className={s.form__field}
						name='user_phone'
						type='tel'
						value={userPhone}
						onChange={(e) => {
							setUserPhone(e.target.value)
						}}
						placeholder='Номер телефону'
						required
					/>
					<input
						className={s.form__field}
						name='user_email'
						type='email'
						value={userEmail}
						onChange={(e) => {
							setUserEmail(e.target.value)
						}}
						placeholder='E-mail'
						required
					/>
					<button className={s.form__submit} type='submit' value='Send'>
						<span>Чекаю дзвінка!</span>
						<div>
							<img src={ArrowImg} alt='' />
						</div>
					</button>
				</div>
			</form>
		</article>
	)
}

export default Form
