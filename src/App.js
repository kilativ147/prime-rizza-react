import './App.scss'

import { Routes, Route, useLocation } from 'react-router-dom'
import { lazy, useEffect, useState } from 'react'

import Layout from './components/layout/Layout'
import Loader from './components/loader/Loader'
import ProductsList from './components/pages/main/components/ProductsList'
const MainPage = lazy(() => import('./components/pages/main/MainPage'))
const Order = lazy(() => import('./components/pages/order/Order'))
const Promotional = lazy(() => import('./components/pages/promotional/Promotional'))
const Delivery = lazy(() => import('./components/pages/delivery/Delivery'))
const About = lazy(() => import('./components/pages/about/About'))

const App = () => {
	const [isLoading, setIsLoading] = useState(true)
	// isLoading ? document.body.classList.add('_loading') : document.body.classList.remove('_loading')

	// const location = useLocation()
	// useEffect(() => {
	// 	const handleLoad = () => {
	// 		setIsLoading(false)
	// 		console.log('change page');

	// 	}
	// 	window.addEventListener('load', handleLoad)
	// 	return () => window.removeEventListener('load', handleLoad) // Прибираємо обробник події при розміщенні компонента
	// }, [location.pathname])

	return (
		<div className='wraper'>
			{/* {isLoading && <Loader />} */}
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='/' element={<MainPage />}>
						<Route path='/' element={<ProductsList list={'pizza'} />} />
						<Route path='pizza' element={<ProductsList list={'pizza'} />} />
						<Route path='salad' element={<ProductsList list={'salad'} />} />
						<Route path='drinks' element={<ProductsList list={'drinks'} />} />
						<Route path='other' element={<ProductsList list={'other'} />} />
					</Route>
					<Route path='/order' element={<Order setIsLoading={setIsLoading} />} />
					<Route
						path='/promotional'
						element={<Promotional setIsLoading={setIsLoading} isLoading={isLoading} />}
					/>
					<Route path='/delivery' element={<Delivery setIsLoading={setIsLoading} />} />
					<Route path='/about' element={<About setIsLoading={setIsLoading} />} />
				</Route>
			</Routes>
		</div>
	)
}

export default App
