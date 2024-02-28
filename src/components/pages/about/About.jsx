import { useEffect } from 'react'
import s from './About.module.css'
import GreatingsImage from '../../../img/pages/about/Background.png'
import MediaContainer from './components/MediaContainer'
import AboutContent from './components/AboutContent'

const About = () => {
	useEffect(() => {
		document.title = 'Prime Pizza ⋅ Про нас'
	}, [])
	return (
		<div
			style={{
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
			}}
		>
			<section className={s.about}>
				<article className={s.about__greatings}>
					<div className={s.about__backimage}>
						<img src={GreatingsImage} alt='Prime Pizza Image' />
					</div>
					<MediaContainer />
				</article>
				<AboutContent />
			</section>
		</div>
	)
}

export default About
