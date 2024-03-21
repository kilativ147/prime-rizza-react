import s from './NotFound.module.scss'
import imgNot from '../../../img/pages/notFound/404.webp'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const NotFound = () => {
	return (
		<section className={s.notfound}>
			<div className={s.notfound__img}></div>
			<p className={s.notfound__title}>Упс! Сторінку не знайдено...</p>
		</section>
	)
}

export default NotFound
