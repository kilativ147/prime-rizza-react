//import s from './ProductsList.module.css'
import { useContext } from 'react'
import ProductsContext from '../../../../context/ProductsContext'
import Product from './Product'

const ProductsList = ({ list }) => {
	const { pizzaList, saladList, drinksList, otherList } = useContext(ProductsContext)

	const PizzaItems = pizzaList.map((item) => <Product key={item.id} {...item} />)
	const SaladItems = saladList.map((item) => <Product key={item.id} {...item} />)
	const DrinksItems = drinksList.map((item) => <Product key={item.id} {...item} />)
	const OtherItems = otherList.map((item) => <Product key={item.id} {...item} />)

	switch (list) {
		case 'pizza':
			return <>{PizzaItems}</>
		case 'salad':
			return <>{SaladItems}</>
		case 'drinks':
			return <>{DrinksItems}</>
		case 'other':
			return <>{OtherItems}</>
		default:
			return <>{PizzaItems}</>
	}
}

export default ProductsList
