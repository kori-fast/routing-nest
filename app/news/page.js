import { DUMMY_NEWS } from '@/dummy-news'
import Link from 'next/link'

export default function NewsPage() {
	return (
		<>
			<header>
				<h1>News Page</h1>
			</header>
			<ul className='news-list'>
				{DUMMY_NEWS.map(news => (
					<li key={news.id}>
						<Link href={`/news/${news.slug}`}>
							<img
								src={`/images/news/${news.image}`}
								alt={news.title}
							/>
							<span>{news.title}</span>
						</Link>
					</li>
				))}
			</ul>
		</>
	)
}
