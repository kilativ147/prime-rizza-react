import s from './About.module.scss'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useEffect } from 'react'
import MediaContainer from './components/MediaContainer'
import AboutContent from './components/AboutContent'

const About = () => {
	useEffect(() => {
		document.title = 'Prime Pizza ⋅ Про нас'
	}, [])
	return (
		<section className={s.about}>
			<article className={s.about__hero}>
				<div className={s.about__hero_background}>
					<LazyLoadImage
						src='/img/about/Hero.webp'
						placeholderSrc='/img/about/Hero-small.webp'
						effect='blur'
						alt={'Hero image'}
					/>
				</div>
				<MediaContainer />
			</article>
			<AboutContent />
		</section>
	)
}

export default About
