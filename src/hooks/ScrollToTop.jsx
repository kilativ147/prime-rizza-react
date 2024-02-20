import React, { useEffect } from 'react'
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

	return null
}

export default ScrollToTop
