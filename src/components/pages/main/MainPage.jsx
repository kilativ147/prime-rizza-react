import s from './MainPage.module.css'
import Galery from './components/Galery'
import Greatings from './components/Greatings'
import Products from './components/Products'
import Form from '../../form/Form'

const MainPage = () => {
return (
	<div className={s.index}>
		<Greatings/>
		<section className='main__container'>	
			{/* <Products/> */}
      {/* <Galery/> */}
		</section>
		<Form/>
	</div>
)
}

export default MainPage