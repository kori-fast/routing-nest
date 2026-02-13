'use client'

import NewsList from '@/components/news-list'
import { useEffect, useState } from 'react'

export default function NewsPage() {
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)
	const [news, setNews] = useState([])

	useEffect(() => {
		async function fetchNews() {
			setIsLoading(true)
			const response = await fetch('http://localhost:8080/news')

			if (!response.ok) {
				setIsLoading(false)
				setError('Failed to fetch news')
			}

			setIsLoading(false)

			const news = await response.json()

			setNews(news)
		}

		fetchNews()
	}, [])

	if (isLoading) {
		return <p>Loading...</p>
	}

	if (error) {
		return <p>{error}</p>
	}

	let newsContent

	if (news.length) {
		newsContent = <NewsList news={news} />
	}

	return (
		<>
			<header>
				<h1>News Page</h1>
			</header>
			{newsContent}
		</>
	)
}
