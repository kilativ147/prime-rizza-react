import s from '../Delivery.module.css'

const DeliveryItem = ({ img, title, text, description, color, isPay }) => {
	// Use the CSS module class if available
	const generateDynamicClassName = (styles, className) => styles[className] || ''
	const dynamicClassNameTitle = generateDynamicClassName(s, 'rule__text_' + color)
	const dynamicClassNameImg = generateDynamicClassName(s, 'rule__top_payimg')

	// convinient way
	const titleClass = `${s.rule__top_text} ${dynamicClassNameTitle}`
	const imgClass = isPay ? `${s.rule__top_img} ${dynamicClassNameImg}` : `${s.rule__top_img}`

	return (
		<div className={s.delivery__rule}>
			<div className={s.rule__top}>
				<div className={s.rule__top_back} />
				<div className={imgClass}>
					<img src={img} alt={title} />
				</div>
				<p className={titleClass}>{title}</p>
			</div>
			<p className={s.rule__title}>{text}</p>
			<p className={s.rule__subtitle}>{description}</p>
		</div>
	)
}

export default DeliveryItem
