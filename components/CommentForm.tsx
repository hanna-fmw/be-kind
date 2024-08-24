'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import classmates from '@/data/classmates.json'

export default function CommentForm() {
	const [classmate, setClassmate] = useState(getRandomClassmate())
	const [comment, setComment] = useState('')
	const router = useRouter()

	function getRandomClassmate() {
		return classmates[Math.floor(Math.random() * classmates.length)]
	}

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		// TODO: Save comment to API or local storage
		console.log('Submitted:', { classmate, comment })
		setComment('')
		setClassmate(getRandomClassmate())
	}

	return (
		<form onSubmit={handleSubmit} className='w-full max-w-md'>
			<h2 className='text-2xl font-bold mb-4'>Comment about: {classmate}</h2>
			<textarea
				className='w-full p-2 border border-gray-300 rounded-md mb-4'
				rows={4}
				value={comment}
				onChange={(e) => setComment(e.target.value)}
				placeholder='Enter something kind about your classmate...'
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
					onClick={() => setClassmate(getRandomClassmate())}
					className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
					Next Classmate
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
