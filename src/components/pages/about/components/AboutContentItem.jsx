import s from './AboutContentItem.module.css'

const AboutContentItem = ({ img, title, text }) => {
	return (
		<div className={s.item}>
			<div className={s.item__img}>
				<img src={img} alt='pizza' />
			</div>
			<div className={s.item__text}>
				<h3>{title}</h3>
				<p>{text}</p>
			</div>
		</div>
	)
}

export default AboutContentItem
