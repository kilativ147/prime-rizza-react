import s from './Product.module.scss'
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
			<button type='button' className={s.item__buy} onClick={handleClick}></button>
		</div>
	)
}

export default Product






