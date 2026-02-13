import { DUMMY_NEWS } from '@/dummy-news'

export default function NewsImagePage({ params }) {
	const newsImage = DUMMY_NEWS.find(news => news.slug === params.slug)

	if (!newsImage) {
		notFound()
	}

	return (
		<div className='fullscreen-image'>
			<img
				src={`/images/news/${newsImage.image}`}
				alt={newsImage.title}
			/>
		</div>
	)
}
