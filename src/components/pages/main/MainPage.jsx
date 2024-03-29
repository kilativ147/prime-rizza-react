import s from './MainPage.module.scss'
import { useEffect, useState, useContext } from 'react'
import ProductsContext from '../../../context/ProductsContext'
import CartIcon from './components/cart/CartIcon'
import CartList from './components/cart/CartList'
import Hero from './components/Hero'
import Products from './components/Products'
import Galery from './components/Galery'

const MainPage = () => {
	//@ Show or not the WISHLIST
	const [showList, setShowList] = useState(false)
	const { changeCartList } = useContext(ProductsContext)

	const changeVisibility = (state = true) => {
		setShowList(state)
	}

	//@ Change page's TITLE and load DATA from LOCAL STORAGE
	useEffect(() => {
		document.title = 'Prime Pizza ⋅ Головна'

		if (localStorage.getItem('cartList') != undefined) {
			const localStorageList = JSON.parse(localStorage.getItem('cartList'))
			changeCartList(localStorageList)
		}
	}, [])

	return (
		<div className={s.index}>
			<CartIcon changeVisibility={changeVisibility} />
			<CartList showList={showList} changeVisibility={changeVisibility} />
			<Hero />
			<section className={s.main__container}>
				<Products />
				<Galery />
			</section>
		</div>
	)
}

export default MainPage
