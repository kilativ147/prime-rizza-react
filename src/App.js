import './App.css'
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './hooks/ScrollToTop'
import ProductsList from './components/pages/main/components/ProductsList'

import Header from './components/header/Header'
import MainPage from './components/pages/main/MainPage'
import Order from './components/pages/order/Order'
import Promotional from './components/pages/promotional/Promotional'
import Delivery from './components/pages/delivery/Delivery'
import About from './components/pages/about/About'
import Footer from './components/footer/Footer'

const App = () => {
	return (
		<div className='wraper'>
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
					<Route path='/order' element={<Order />} />
					<Route path='/promotional' element={<Promotional />} />
					<Route path='/delivery' element={<Delivery />} />
					<Route path='/about' element={<About />} />
				</Routes>
			</main>
			{/*!  ЗРОБИТИ ВІДПРАВКУ ФОРМИ*/}
			<Footer />
		</div>
	)
}

export default App
