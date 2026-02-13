'use client'
import { DUMMY_NEWS } from '@/dummy-news'
import { useRouter } from 'next/navigation'

export default function InterceptedImagePage({ params }) {
	const router = useRouter()
	const newsImage = DUMMY_NEWS.find(news => news.slug === params.slug)

	if (!newsImage) {
		notFound()
	}

	return (
		<>
			<div
				className='modal-backdrop'
				onClick={router.back}
			/>
			<dialog
				className='modal'
				open
			>
				<div className='fullscreen-image'>
					<img
						src={`/images/news/${newsImage.image}`}
						alt={newsImage.title}
					/>
				</div>
			</dialog>
		</>
	)
}
