import Image from 'next/image'

export default function QRCode() {
	return (
		<div className='mb-8'>
			<Image src='/qr-code.png' alt='QR Code' width={200} height={200} />
			<p className='text-center mt-2'>Scan to add a comment</p>
		</div>
	)
}
