import s from './About.module.scss'
import { useEffect } from 'react'
import HeroImg from '../../../img/pages/about/Background.png'
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
					<img src={HeroImg} alt='Background Image' />
				</div>
				<MediaContainer />
			</article>
			<AboutContent />
		</section>
	)
}

export default About
