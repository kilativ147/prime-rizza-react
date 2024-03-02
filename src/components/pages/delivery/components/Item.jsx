import s from './Item.module.scss'

const DeliveryItem = ({ img, title, text, description, color, isPay }) => {
	// Use the CSS module class if available
	const generateDynamicClassName = (styles, className) => styles[className] || ''
	const dynamicClassNameImg = generateDynamicClassName(s, 'item__top_payimg')
	const dynamicClassNameTitle = generateDynamicClassName(s, 'item__text_' + color)

	// convinient way
	const imgClass = isPay ? `${s.item__top_img} ${dynamicClassNameImg}` : `${s.item__top_img}`
	const titleClass = `${s.item__top_text} ${dynamicClassNameTitle}`

	return (
		<div className={s.item}>
			<div className={s.item__top}>
				<div className={s.item__top_back} />
				<div className={imgClass}>
					<img src={img} alt={title} />
				</div>
				<p className={titleClass}>{title}</p>
			</div>
			<p className={s.item__text}>{text}</p>
			<p className={s.item__description}>{description}</p>
		</div>
	)
}

export default DeliveryItem
