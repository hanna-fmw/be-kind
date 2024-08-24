'use client'

import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { useRouter } from 'next/navigation'

const friends = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'] // Add more names as needed

function getRandomColor() {
	const colors = ['bg-red-200', 'bg-blue-200', 'bg-green-200', 'bg-yellow-200', 'bg-purple-200']
	return colors[Math.floor(Math.random() * colors.length)]
}

export default function CommentForm() {
	const router = useRouter()
	const [friend, setFriend] = useState(getRandomFriend())
	const [comment, setComment] = useState('')

	function getRandomFriend() {
		return friends[Math.floor(Math.random() * friends.length)]
	}

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		const { data, error } = await supabase
			.from('comments')
			.insert({ name: friend, text: comment, color: getRandomColor() })

		if (error) console.error('Error inserting comment:', error)
		else console.log('Comment added:', data)

		setComment('')
		setFriend(getRandomFriend())
	}

	return (
		<form onSubmit={handleSubmit} className='w-full max-w-md'>
			<h2 className='text-2xl font-bold mb-4'>Comment about: {friend}</h2>
			<textarea
				className='w-full p-2 border border-gray-300 rounded-md mb-4'
				rows={4}
				value={comment}
				onChange={(e) => setComment(e.target.value)}
				placeholder='Enter something kind about your friend...'
				required
			/>
			<div className='flex justify-between'>
				<button
					type='submit'
					className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
					Submit
				</button>
				<button
					type='button'
					onClick={() => setFriend(getRandomFriend())}
					className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
					Next Friend
				</button>
				<button
					type='button'
					onClick={() => router.push('/')}
					className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'>
					View All Comments
				</button>
			</div>
		</form>
	)
}
