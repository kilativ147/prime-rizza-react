import s from './MediaContainer.module.scss'
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
				'Ми в Facebook! Підписуйтесь і слідкуйте за новинками. Щотиждня в Prime проходять цікаві розіграші',
		},
		{
			title: 'Instagram',
			img: ImgInst,
			link: 'http://instagram.com',
			subtitle:
				'Слідкуйте за нами в інстаграмі! Отримуйте не тільки смакове але і візуальне задоволення',
		},
		{
			title: 'Email',
			img: ImgGmail,
			link: 'mailto:kilativ147@gmail.com',
			subtitle: 'Маєте побажання, пропозицію, скаргу? Напишіть нам на електронну пошту.',
		},
	]

	const MediaItems = items.map((item, index) => <MediaItem key={index} {...item} />)

	return <div className={s.about__media}>{MediaItems}</div>
}

export default MediaContainer
