import s from './PromotionalItem.module.scss'
import { useInView } from 'react-intersection-observer'

const PromotionalItem = ({ img, title, text, textWarning, isLoaded }) => {
	const [ref, inView] = useInView({
		triggerOnce: false, // Change this to true if you want the animation to occur only once
		rootMargin: '-100px 0px', // This will trigger the animation 50px before the element comes into view
	})

	const dynamicStyle = isLoaded  ?  (inView ? `${s.item} ${s._visible}` : s.item) : s.item
	return (
		<article ref={ref} className={dynamicStyle}>
			<div className={s.item__image}>
				<img src={img} alt={title} />
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
