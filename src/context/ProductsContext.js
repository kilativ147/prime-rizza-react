import { createContext, useState } from 'react'
import productsListJson from '../store/productsList.json'

const ProductsContext = createContext()
function Provider({ children }) {
	
	const productsList = []
	for (const category in productsListJson) {
		if (productsListJson.hasOwnProperty(category)) {
			// Додаємо всі товари з поточної категорії до загального масиву
			productsList.push(...productsListJson[category])
		}
	}
	const pizzaList = productsListJson.pizza
	const saladList = productsListJson.salad
	const drinksList = productsListJson.drinks
	const otherList = productsListJson.other

	const [cartList, setCartList] = useState({})

	const changeCartList = (list) => {
		localStorage.setItem('cartList', JSON.stringify(list))
		
		setCartList(list)
	}

	const valueToShare = {
		productsList,
		pizzaList,
		saladList,
		drinksList,
		otherList,
		cartList,
		changeCartList,
	}
	return <ProductsContext.Provider value={valueToShare}>{children}</ProductsContext.Provider>
}

export { Provider }
export default ProductsContext
