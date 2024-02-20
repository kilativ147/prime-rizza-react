import { createContext } from 'react'
import productList from '../store/productsList.json'



const ProductsContext = createContext()
function Provider({ children }) {
		const pizzaList = productList.pizza
		const saladList = productList.salad
		const drinksList = productList.drinks
		const otherList = productList.other

	const valueToShare = {
		pizzaList,
		saladList,
		drinksList,
		otherList,
	}
	return <ProductsContext.Provider value={valueToShare}>{children}</ProductsContext.Provider>
}

export { Provider }
export default ProductsContext
