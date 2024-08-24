'use client'

import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'
import Comment from '@/components/Comment'

type Comment = {
	id: number
	name: string
	text: string
	color: string
	created_at: string
}

export default function CommentWall() {
	const [comments, setComments] = useState<Comment[]>([])

	useEffect(() => {
		fetchComments()

		const subscription = supabase
			.channel('public:comments')
			.on(
				'postgres_changes',
				{ event: 'INSERT', schema: 'public', table: 'comments' },
				(payload) => {
					setComments((prevComments) => [...prevComments, payload.new as Comment])
				}
			)
			.subscribe()

		return () => {
			subscription.unsubscribe()
		}
	}, [])

	async function fetchComments() {
		const { data, error } = await supabase
			.from('comments')
			.select('*')
			.order('created_at', { ascending: false })

		if (error) console.error('Error fetching comments:', error)
		else setComments(data || [])
	}

	return (
		<div className='relative w-full h-[600px] border border-gray-300 rounded-lg overflow-hidden'>
			{comments.map((comment) => (
				<Comment key={comment.id} comment={comment} />
			))}
		</div>
	)
}
