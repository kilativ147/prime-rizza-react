import s from './Item.module.scss'
import { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Item = ({ img, title, text, index }) => {
	const [dynamicStyle, setDynamicStyle] = useState(s.item)

	const classImgSide = index % 2 === 0 ? `${s.item__img_l}` : `${s.item__img_r}`
	const classTextSide = index % 2 === 0 ? `${s.item__text_r}` : `${s.item__text_l}`

	return (
		<div className={dynamicStyle}>
			<div className={classImgSide}>
				<LazyLoadImage
					src={img}
					alt={title}
					onLoad={() => setDynamicStyle(`${s.item} ${s._visible}`)}
				/>
			</div>
			<div className={classTextSide}>
				<h3>{title}</h3>
				<p>{text}</p>
			</div>
		</div>
	)
}

export default Item
