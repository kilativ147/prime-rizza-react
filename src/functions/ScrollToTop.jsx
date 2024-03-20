// import , { useEffect } from 'react'
// import { useLocation } from 'react-router-dom'

// const ScrollToTop = () => {
// 	const { pathname } = useLocation()

// 	useEffect(() => {
// 		// Перевіряємо чи поточний шлях не належить до вказаних маршрутів
// 		if (!['/pizza', '/salad', '/drinks', '/other'].includes(pathname)) {
// 			// Якщо поточний шлях не належить до вказаних маршрутів, прокручуємо сторінку вгору
// 			window.scrollTo({ top: 0, behavior: 'smooth' })
// 		}
// 	}, [pathname])

// 	return null
// }

// export default ScrollToTop
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
	const { pathname } = useLocation()

	useEffect(() => {
		// Перевіряємо чи поточний шлях не належить до вказаних маршрутів
		if (!['/pizza', '/salad', '/drinks', '/other'].includes(pathname)) {
			// Якщо поточний шлях не належить до вказаних маршрутів, прокручуємо сторінку вгору
			window.scrollTo({ top: 0, behavior: 'smooth' })
		}
	}, [pathname])

	useEffect(() => {
		// Додаємо слухач події перед виходом зі сторінки
		const handleBeforeUnload = () => {
			window.scrollTo({ top: 0, behavior: 'auto' }) // Прокручуємо сторінку вгору
		}

		window.addEventListener('beforeunload', handleBeforeUnload)

		return () => {
			// Прибираємо слухач події перед виходом зі сторінки при знищенні компонента
			window.removeEventListener('beforeunload', handleBeforeUnload)
		}
	}, [])

	return null
}

export default ScrollToTop
