import QRCode from '@/components/QRCode'
import CommentWall from '@/components/CommentWall'

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<h1 className='text-4xl font-bold mb-8'>Scan to Comment</h1>

			<QRCode
				value={`${process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : process.env.NEXT_PUBLIC_BASE_URL}/comment`}
			/>

			<h2 className='text-2xl font-bold mt-8 mb-4'>All Comments</h2>
			<CommentWall />
		</main>
	)
}
