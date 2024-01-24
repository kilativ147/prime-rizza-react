import s from '../Delivery.module.css'

const DeliveryItem = ({ img, title, text, description, color }) => {
	return (
		<div className={s.delivery__rule}>
			<div className={s.rule__top}>
				<div className={s.rule__top_back} />
				<div className={s.rule__top_img}>
					<img src={img} alt={title} />
				</div>
				<p
					className={s.rule__top_text}
					style={{
						// background: color
					}}
				>
					{title}
				</p>
			</div>
			<p>
				<b>{text}</b>
			</p>
			<p>{description}</p>
		</div>
	)
}

export default DeliveryItem
