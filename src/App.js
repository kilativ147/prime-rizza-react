import './App.scss'
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ScrollToTop from './hooks/ScrollToTop'
import ProductsList from './components/pages/main/components/ProductsList'

import Loader from './components/loader/Loader'
import Header from './components/header/Header'
import MainPage from './components/pages/main/MainPage'
import Order from './components/pages/order/Order'
import Promotional from './components/pages/promotional/Promotional'
import Delivery from './components/pages/delivery/Delivery'
import About from './components/pages/about/About'
import Form from './components/form/Form'
import Footer from './components/footer/Footer'

const App = () => {
	const [loader, setLoader] = useState(true)
	loader
		? (document.body.style.overflow = 'hidden')
		: document.body.style.removeProperty('overflow')
		
	useEffect(() => {
		const handleLoad = () => {
			setLoader(false)
		}
		window.addEventListener('load', handleLoad)
		return () => window.removeEventListener('load', handleLoad) // Прибираємо обробник події при розміщенні компонента
	}, [])

	return (
		<div className='wraper'>
				{loader && <Loader loader={loader} />}
				<Header />
				<main className='main'>
					<ScrollToTop />
					<Routes>
						<Route path='/' element={<MainPage />}>
							<Route path='/' element={<ProductsList list={'pizza'} />} />
							<Route path='pizza' element={<ProductsList list={'pizza'} />} />
							<Route path='salad' element={<ProductsList list={'salad'} />} />
							<Route path='drinks' element={<ProductsList list={'drinks'} />} />
							<Route path='other' element={<ProductsList list={'other'} />} />
						</Route>
						<Route path='/order' element={<Order setLoader={setLoader} />} />
						<Route path='/promotional' element={<Promotional />} />
						<Route path='/delivery' element={<Delivery />} />
						<Route path='/about' element={<About />} />
					</Routes>
				</main>
				<Form/>
				<Footer />
			</div>
	)
}

export default App
