import axios from 'axios'
import { useContext } from 'react'
import ProductsContext from '../context/ProductsContext'

const orderFunc = async (
	cartList,
	productsList,
	userName,
	userPhone,
	userEmail,
	userAddress,
	userPayment,
	userComment,
	sum,
) => {
	const styles = {
		title: `style="border: 1px solid #000;  padding: 8px; background: rgb(250,210,50)"`,
		itemLeft: `style="border: 1px solid #000; padding: 8px; text-align: left"`,
		itemCenter: `style="border: 1px solid #000; padding: 8px;"`,
		itemTdRight: `style="border: 1px solid #000; padding: 8px; text-align: right"`,
		table: `style="padding: 10px 10px 10px 15px; margin: 15px 0; font-size: 1rem; line-height: 1.1; border-collapse: collapse;"`,
		contactStyle: `style="padding: 5px 10px; color: #000; font-weight: 600; text-decoration: none; border-bottom: 1px solid rgb(250, 210, 100)"`,
		ps: `style="margin: 20px 0; padding: 5px 0; border-top: 1px solid #ff0000; font-size: 1.2rem;  color: red; text-align: center;"`,
	}
	const tableTop = `<tr>
    <th ${styles.title}>№</th>
    <th ${styles.title}>Назва</th>
    <th ${styles.title}>Кількість</th>
  </tr>`
	const tableItems = Object.keys(cartList).map((itemId, index) => {
		const item = productsList.find((item) => item.id === itemId)
		return item
			? `<tr><td ${styles.itemLeft}>${index + 1}</td><td ${styles.itemCenter}>${
					item.title
			  }</td><td ${styles.itemTdRight}>${cartList[itemId]} шт.</td></tr>`
			: null
	})

	const tableBottom = `<tr><td></td><td style="text-align: right ">Сума:</td><td style="text-align: center">${sum} грн</td></tr>`
	const table = `${tableTop} ${tableItems.join('')} ${tableBottom}`

	const serviceId = 'service_5smz8zb'
	const templateId = 'template_eo2xhgc'
	const publicKey = 'P2RJ1J1xECbk9Ml93'

	const ownerName = 'Prime Pizza'
	//% TITLE
	const title = `Вітаємо, ${userName}`

	//% MESSAGE
	const pay = userPayment === 'card' ? 'Онлайн' : 'Готівкою'
	const comm = userComment ? `Коментар до замовлення: <i>${userComment}</i>` : ''

	const mailMessage = `<p>Нещодавно Ви оформили замовлення в <b>${ownerName}</b></p><table ${styles.table}>${table}</table><p>Контактний номер: ${userPhone}</p><p>Форма оплати: <b>${pay}</b></p><p>Доставка за адресою: <b>${userAddress}</b></p><p>${comm}</p><p style='font-size: 1.1rem'>Це Ваш електронний чек, дякуємо що обрали нас. Смачного!</p>`

	//% SUBTITLE
	const subtitle = `З повагою, <b>${ownerName}</b>`
	//% CONTACTS
	const contactsLinks = [
		`<a href="prime-pizza.netlify.app"  target="_blank" ${styles.contactStyle}>PrimePizza</a>`,
		`<a href="https://github.com/kilativ147"  target="_blank" ${styles.contactStyle}>Github</a>`,
		`<a href="https://www.linkedin.com/in/vitalii-yushchuk/"  target="_blank" ${styles.contactStyle}>LinkedIn</a>`,
	]
	const ownerContacts = contactsLinks.join(' | ')
	const ps = `<p ${styles.ps}>Повідомлення має інформаційний характер. Сайт слугує елементом портфоліо та не надає ніяких послуг.</p>`

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
		alert('Помилка!', error)
		return false
	}
}
export default orderFunc
