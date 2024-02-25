import s from './Form.module.scss'
import ArrowImg from '../../img/svg/Form ArrowRight.svg'
import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import axios from 'axios'

const Form = () => {
	const [userName, setUserName] = useState('')
	const [userPhone, setUserPhone] = useState('')
	const [userEmail, setUserEmail] = useState('')

	const styles = {
		mailMessage:
			'padding: 10px 10px 10px 15px;    margin: 15px 0;    border-left: 4px solid rgb(250, 210, 100);    font-style: italic;    font-size: 1rem;  line-height: 1.1;',
		contactStyle: `padding: 5px 10px; color: #000; font-weight: 600; text-decoration: none; border-bottom: 1px solid rgb(250, 210, 100)`,
		ps: `margin: 20px 0; padding: 5px 0; border-top: 1px solid #ff0000; font-size: 1.2rem;  color: red; text-align: center;`,
	}

	const ownerName = 'Prime Pizza'
	const title = `Вітаємо, ${userName}`
	const mailMessage = `<p style="${styles.mailMessage}">Ми отримали Ваш запит на зворотній зв'язок за номером <b>${userPhone}</b>, очікуйте на дзвінок найближчим часом!</p>`
	const subtitle = `З повагою, ${ownerName}`
	const contactsLinks = [
		`<a href="prime-pizza.netlify.app" style='${styles.contactStyle}'>PrimePizza</a>`,
		`<a href="https://github.com/kilativ147" style='${styles.contactStyle}'>Github</a>`,
		`<a href="https://www.linkedin.com/in/vitalii-yushchuk/" style='${styles.contactStyle}'>LinkedIn</a>`,
	]
	const ownerContacts = contactsLinks.join(' | ')
	const ps = `<p style="${styles.ps}">Повідомлення має інформаційний характер. Сайт слугує елементом портфоліо та не надає ніяких послуг.</p>`

	const handleSubmit = async (e) => {
		e.preventDefault()
		const serviceId = 'service_5smz8zb'
		const templateId = 'template_dpm1qfh'
		const publicKey = 'P2RJ1J1xECbk9Ml93'

		const data = {
			service_id: serviceId,
			template_id: templateId,
			user_id: publicKey,
			template_params: {
				customer_name: userName,
				customer_phone: userPhone,
				customer_email: userEmail,
				from_name: ownerName,
				title,
				message: mailMessage,
				subtitle,
				from_contacts: ownerContacts,
				ps,
			},
		}

		try {
			const res = await axios.post('https://api.emailjs.com/api/v1.0/email/send', data)
			setUserName('')
			setUserPhone('')
			setUserEmail('')
			alert('Відправлено', res.data)
		} catch (error) {
			alert('Помилка!', error)
		}
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
						type='number'
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