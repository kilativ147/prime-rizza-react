import { useInView } from 'react-intersection-observer'
import { useRef, useState } from 'react'
import s from './Item.module.scss'

// import { useScrollSpy} from 'react-scroll'

const Item = ({ img, title, text, index }) => {
const [ref, inView] = useInView({
	triggerOnce: true, // Change this to true if you want the animation to occur only once
	rootMargin: '-150px 0px', // This will trigger the animation 50px before the element comes into view
})
const dynamicStyle = inView ? `${s.item} ${s._visible}` : s.item
const classImgSide = index % 2 === 0 ? `${s.item__img_l}` : `${s.item__img_r}`
const classTextSide = index % 2 === 0 ? `${s.item__text_l}` : `${s.item__text_r}`
	return (
		<div ref={ref} className={dynamicStyle}>
			<div className={classImgSide}>
				<img src={img} alt='pizza' />
			</div>
			<div className={classTextSide}>
				<h3>{title}</h3>
				<p>{text}</p>
			</div>
		</div>
	)
}

export default Item
