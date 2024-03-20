import s from './Item.module.scss'

const DeliveryItem = ({ title, text, description, color, isPay }) => {
	const imgClass = `${s.item__top_img} ${s[`item__top_img_${title.toLowerCase()}`]}`
	const titleClass = `${s.item__top_text} ${s[color]}`

	return (
		<div className={s.item}>
			<div className={s.item__top}>
				<div className={s.item__top_back} />
				<div className={imgClass}></div>
				<p className={titleClass}>{!isPay ? `${title}хв` : title}</p>
			</div>
			<p className={s.item__text}>{text}</p>
			<p className={s.item__description}>{description}</p>
		</div>
	)
}

export default DeliveryItem
