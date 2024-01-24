import s from './MediaContainer.module.css'

import ImgFB from '../../../../img/svg/FooterFB.svg'
import ImgInst from '../../../../img/svg/FooterInst.svg'
import ImgGmail from '../../../../img/svg/FooterMail.svg'
import MediaItem from './MediaItem'

const MediaContainer = () => {
	const items = [
		{
			title: 'Facebook',
			img: ImgFB,
			link: 'http://facebook.com',
			subtitle:
				'Ми в Facebook, підписуйтесь і слідкуйте за новинками. Також щотиждня в Prime проходять цікаві розіграші',
		},
		{
			title: 'Instagram',
			img: ImgInst,
			link: 'http://instagram.com',
			subtitle:
				'Слідкуйте за сторінкою в інстаграмі і получайте не тільки смакове але і візуальне задоволення',
		},
		{
			title: 'Gmail',
			img: ImgGmail,
			link: 'mailto:kilativ147@gmail.com',
			subtitle: 'Пишіть нам на емейл , побажання стосовно роботи , та партнерства',
		},
	]

	const MediaItems = () => {
		return items.map((item) => (
			<MediaItem title={item.title} img={item.img} link={item.link} subtitle={item.subtitle} />
		))
	}

	return (
		<div className={s.about__media}>
			<MediaItems />
		</div>
	)
}

export default MediaContainer
