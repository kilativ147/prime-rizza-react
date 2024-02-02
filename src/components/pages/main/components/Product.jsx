import s from './Product.module.scss'

const Product = ({id, title, image:img, description, price}) => {

	return (
		<div className={s.item}>
			<div className={s.item__image}>
				<img src={img} alt={title} />
			</div>
			<h3>{title}</h3>
			<p>{description}</p>
			<p className={s.item__price}>
				<span>{price} грн.</span>
			</p>
			<button type='button' className={s.item__buy}></button>
		</div>
	)
}

export default Product