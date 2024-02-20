import s from './MainPage.module.css'
import CartIcon from '../../cart/CartIcon'
import Greatings from './components/Greatings'
import Products from './components/Products'
import Galery from './components/Galery'
import Form from '../../form/Form'


const MainPage = () => {
return (
	<div className={s.index}>
		<CartIcon/>
		<Greatings/>
		<section className='main__container'>
			<Products />
			<Galery/>
		</section>
		<Form />
	</div>
)
}

export default MainPage