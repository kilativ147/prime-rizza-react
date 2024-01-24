import './Variables.css'
import { Routes, Route } from 'react-router-dom'
import s from './App.module.css'
import Header from './components/header/Header'
import MainPage from './components/pages/main/MainPage'
import Promotional from './components/pages/promotional/Promotional'
import Delivery from './components/pages/delivery/Delivery'
import About from './components/pages/about/About'
import Footer from './components/footer/Footer'

const App = () => {
	return (
		<div className={s.wraper}>
			<Header />
			<main class={s.main}>
				<Routes>
					<Route path='/' element={<MainPage />} />
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
