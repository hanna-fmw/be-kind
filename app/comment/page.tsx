import CommentForm from '../../components/CommentForm'

export default function CommentPage() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<h1 className='text-4xl font-bold mb-8'>Add a Comment</h1>
			<CommentForm />
		</main>
	)
}
