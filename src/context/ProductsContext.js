import { createContext, useState } from 'react'
import store from '../store/store'
import productsListJson from '../store/productsList.json'

const ProductsContext = createContext()
function Provider({ children }) {
	const [cartList, setCartList] = useState({})
	const productsList = []
	
	for (const category in productsListJson) {
		if (productsListJson.hasOwnProperty(category)) {
			// Додаємо всі товари з поточної категорії до загального масиву
			productsList.push(...productsListJson[category])
		}
	}

	const changeCartList = (list) => {
		localStorage.setItem('cartList', JSON.stringify(list))
		setCartList(list)
	}

	const valueToShare = {
		contacts: store.contacts,
		productsList,
		pizzaList: productsListJson.pizza,
		saladList: productsListJson.salad,
		drinksList: productsListJson.drinks,
		otherList: productsListJson.other,
		cartList,
		changeCartList,
		promotionals: store.promotionals,
		about: store.about,
	}
	return <ProductsContext.Provider value={valueToShare}>{children}</ProductsContext.Provider>
}

export { Provider }
export default ProductsContext
