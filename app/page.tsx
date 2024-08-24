import Link from 'next/link'
import CommentWall from '@/components/CommentWall'
import QRCode from '@/components/QRCode'

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<h1 className='text-4xl font-bold mb-8'>All Comments</h1>
			<QRCode />
			<CommentWall />
			<Link
				href='/comment'
				className='mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
				Add a Comment
			</Link>
		</main>
	)
}
