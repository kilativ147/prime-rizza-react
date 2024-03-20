import s from './MediaItem.module.scss'

const MediaItem = ({ title, link, subtitle }) => {
	const classVar = {
		'Facebook': `${s.item__img} ${s.item__img_fb}`,
		'Instagram': `${s.item__img} ${s.item__img_inst}`,
		'Email': `${s.item__img} ${s.item__img_email}`,
	}
	return (
		<a href={link} className={s.item} target='_blank'>
			<div className={s.item__content}>
				<div className={classVar[title]}></div>
				<h4>{title}</h4>
				<p>{subtitle}</p>
			</div>
		</a>
	)
}

export default MediaItem
