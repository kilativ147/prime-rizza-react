import s from './MainPage.module.css'
import { useEffect, useState, useContext } from 'react'
import ProductsContext from '../../../context/ProductsContext'
import CartIcon from '../../cart/CartIcon'
import CartList from './../../cart/CartList'
import Greatings from './components/Greatings'
import Products from './components/Products'
import Galery from './components/Galery'
import Form from '../../form/Form'

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
			<CartList showList={showList} changeVisibility={changeVisibility}/>
			<Greatings />
			<section className='main__container'>
				<Products />
				<Galery />
			</section>
			<Form />
		</div>
	)
}

export default MainPage
