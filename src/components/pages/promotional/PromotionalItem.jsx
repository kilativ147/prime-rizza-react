import { useState } from 'react'
import s from './PromotionalItem.module.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const PromotionalItem = ({ img, title, text, textWarning }) => {	
	const [dynamicStyle, setDynamicStyle] = useState(s.item)

	return (
		<article className={dynamicStyle}>
			<div className={s.item__image}>
				<LazyLoadImage
					src={img}
					alt={title}
					onLoad={() => setDynamicStyle(`${s.item} ${s._visible}`)}
				/>
			</div>
			<div className={s.item__text}>
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
