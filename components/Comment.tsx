'use client'

export default function Comment({ comment }: { comment: any }) {
	const style = {
		top: `${Math.random() * 80}%`,
		left: `${Math.random() * 80}%`,
		transform: `rotate(${Math.random() * 10 - 5}deg)`,
	}

	return (
		<div className={`absolute p-4 ${comment.color} shadow-md rounded-md w-48`} style={style}>
			<h3 className='font-bold'>{comment.name}</h3>
			<p>{comment.text}</p>
		</div>
	)
}
