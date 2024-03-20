import Header from './header/Header'
import Form from './form/Form'
import Footer from './footer/Footer'
import { Outlet } from 'react-router-dom'
import ScrollToTop from './../../functions/ScrollToTop'
import { Suspense } from 'react'

const Layout = () => {
	return (
		<>
			<Header />
			<ScrollToTop />
			<main className='main'>
				{/* Suspense for lazy load pages, its decrement time of loadimg page
				 and size of file for first downloading page*/}
				<Suspense>
					<Outlet />
				</Suspense>
			</main>
			<Form />
			<Footer />
		</>
	)
}

export default Layout
