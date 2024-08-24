import QRCode from 'react-qr-code'

interface QRCodeProps {
	value: string
}

export default function QRCodeComponent({ value }: QRCodeProps) {
	return <QRCode value={value} />
}
