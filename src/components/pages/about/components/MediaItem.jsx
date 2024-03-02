import s from './MediaItem.module.scss'

const MediaItem = ({ title, img, link, subtitle }) => {
	return (
		<a href={link} className={s.item} target='_blank'>
			<div className={s.item__content}>
				<div className={s.item__img}>
					<img src={img} alt={title} />
				</div>
				<h4>{title}</h4>
				<p>{subtitle}</p>
			</div>
		</a>
	)
}

export default MediaItem
