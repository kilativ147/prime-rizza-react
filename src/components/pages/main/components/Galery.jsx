//import s from './Galery.module.css'

const Galery = () => {
  return (
		<article className='gallery animation-bottom'>
			<div className='gallery__content'>
				<div className='gallety__back'>
					<div className='gallery__back-flex'>
						<div className='gallery__back-img'>
							<img src='img/page_index/gallery_INST_5.png' alt='gallery5' />
						</div>
						<div className='gallery__back-img'>
							<img src='img/page_index/gallery_INST_6.png' alt='gallery6' />
						</div>
						<div className='gallery__back-img'>
							<img src='img/page_index/gallery_INST_1.png' alt='gallery1' />
						</div>
						<div className='gallery__back-img'>
							<img src='img/page_index/gallery_INST_2.png' alt='gallery2' />
						</div>
						<div className='gallery__back-img'>
							<img src='img/page_index/gallery_INST_3.png' alt='gallery3' />
						</div>
						<div className='gallery__back-img'>
							<img src='img/page_index/gallery_INST_4.png' alt='gallery4' />
						</div>
						<div className='gallery__back-img'>
							<img src='img/page_index/gallery_INST_5.png' alt='gallery5' />
						</div>
						<div className='gallery__back-img'>
							<img src='img/page_index/gallery_INST_6.png' alt='gallery6' />
						</div>
						<div className='gallery__back-img'>
							<img src='img/page_index/gallery_INST_1.png' alt='gallery1' />
						</div>
						<div className='gallery__back-img'>
							<img src='img/page_index/gallery_INST_2.png' alt='gallery2' />
						</div>
					</div>
				</div>
				<div className='gallery__label label'>
					<div className='label__border'>
						<div className='label__content'>
							<div>
								<img src='img/icons/Instagram_White.svg' alt='' />
							</div>
							<a href='http://instagram.com'>@primepizza.if</a>
						</div>
					</div>
				</div>
			</div>
		</article>
	)
}

export default Galery