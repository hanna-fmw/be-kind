'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import friends from '@/data/friends.json'

export default function CommentForm() {
	const [friend, setFriend] = useState(getRandomFriend())
	const [comment, setComment] = useState('')
	const router = useRouter()

	function getRandomFriend() {
		return friends[Math.floor(Math.random() * friends.length)]
	}

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		// TODO: Save comment to API or local storage
		console.log('Submitted:', { friend, comment })
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
