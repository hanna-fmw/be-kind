'use client'

import { useState, useEffect } from 'react'
import Comment from '@/components/Comment'

type Comment = {
	id: number
	name: string
	text: string
	color: string
}

export default function CommentWall() {
	const [comments, setComments] = useState<Comment[]>([])

	useEffect(() => {
		// Fetch comments from API or local storage
		// For now, we'll use dummy data
		setComments([
			{ id: 1, name: 'Alice', text: 'Alice is always helpful!', color: 'bg-yellow-200' },
			{ id: 2, name: 'Bob', text: 'Bob has a great sense of humor!', color: 'bg-green-200' },
		])
	}, [])

	return (
		<div className='relative w-full h-[600px] border border-gray-300 rounded-lg overflow-hidden'>
			{comments.map((comment) => (
				<Comment key={comment.id} comment={comment} />
			))}
		</div>
	)
}
