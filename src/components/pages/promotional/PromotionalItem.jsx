import s from './PromotionalItem.module.css'

const PromotionalItem = ({ img, title, text, textWarning }) => {
	return (
		<article className={s.promotional__content}>
			<div className={s.promotional__image}>
				<img src={img} alt={title} />
			</div>
			<div className={s.promotional__text}>
				<h3>
					<b>{title}</b>
				</h3>
				<p>{text}</p>
				<span>{textWarning}</span>
			</div>
		</article>
	)
}

export default PromotionalItem
