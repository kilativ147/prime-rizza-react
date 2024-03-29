import axios from 'axios'

const callbackFunc = async (userName, userPhone, userEmail) => {
	const serviceId = 'service_5smz8zb'
	const templateId = 'template_dpm1qfh'
	const publicKey = 'P2RJ1J1xECbk9Ml93'

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
		`<a role='link' aria-label='Посидання на сайт проекту' href="prime-pizza.netlify.app"  target="_blank" style='${styles.contactStyle}'>PrimePizza</a>`,
		`<a role='link' aria-label='Посидання на GitHub репозиторій' href="https://github.com/kilativ147"  target="_blank" style='${styles.contactStyle}'>Github</a>`,
		`<a role='link' aria-label='Посидання на LinkedIn' href="https://www.linkedin.com/in/vitalii-yushchuk/"  target="_blank" style='${styles.contactStyle}'>LinkedIn</a>`,
	]
	const ownerContacts = contactsLinks.join(' | ')
	const ps = `<p style="${styles.ps}">Повідомлення має інформаційний характер. Сайт слугує елементом портфоліо та не надає ніяких послуг.</p>`

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
		await axios.post('https://api.emailjs.com/api/v1.0/email/send', data)
		return true
	} catch (error) {
		return false
	}
}
export default callbackFunc
