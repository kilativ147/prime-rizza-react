import s from './Galery.module.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import img1 from '../../../../img/pages//main/GalleryInst1.webp'
import img2 from '../../../../img/pages//main/GalleryInst2.webp'
import img3 from '../../../../img/pages//main/GalleryInst3.webp'
import img4 from '../../../../img/pages//main/GalleryInst4.webp'
import img5 from '../../../../img/pages//main/GalleryInst5.webp'
import img6 from '../../../../img/pages//main/GalleryInst6.webp'
import imgS from '../../../../img/pages//main/Gallery-small.webp'
import imgInst from '../../../../img/svg/InstagramWhite.svg'
import { useContext } from 'react'
import ProductsContext from '../../../../context/ProductsContext'

const Galery = () => {
	const {contacts} = useContext(ProductsContext)
	const items = [img1, img2, img3, img4, img5, img6, img1, img2, img3, img4, img5, img6]

	const imgList = items.map((item, index) => (
		<div key={index} className={s.gallery__back_img}>
			<LazyLoadImage src={item} placeholderSrc={imgS} effect='blur' alt={'Hero image'} />
		</div>
	))

	return (
		<article className={s.gallery}>
			<div className={s.gallery__content}>
				<div className={s.gallery__back}>
					<div className={s.gallery__back_flex}>{imgList}</div>
				</div>
				<a href={contacts.inst} target='_blank' className={s.label}>
					<span>
						<img src={imgInst} alt='' />
						@primepizza
					</span>
				</a>
			</div>
		</article>
	)
}

export default Galery
