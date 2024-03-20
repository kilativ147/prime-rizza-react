import s from './Product.module.scss'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useContext } from 'react'
import ProductsContext from '../../../../context/ProductsContext'

const Product = ({ id, title, image: img, description, price }) => {
	const { cartList,changeCartList } = useContext(ProductsContext)
	
	const handleClick = () => {
		let oldList = {...cartList}
		if (oldList[id] != undefined) {
			oldList[id]++
		} else {
			oldList[id] = 1
		}
		changeCartList(oldList)
	}
	img = `/img/products/${img}`

	return (
		<li className={s.item}>
			<div className={s.item__image}>
				<LazyLoadImage
					src={img}
					placeholderSrc='/img/mainPage/HeroPizza-small.webp'
					effect='blur'
					alt={title}
				/>
			</div>
			<h3>{title}</h3>
			<p>{description}</p>
			<p className={s.item__price}>
				<span>{price} грн.</span>
			</p>
			<button type='button' className={s.item__buy} onClick={handleClick}></button>
		</li>
	)
}

export default Product






