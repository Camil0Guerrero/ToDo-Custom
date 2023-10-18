import '../styles/Confirm.css'

interface ConfirmProps {
	title: string
	successText: string
	cancelText: string
	success: () => void
	cancel: () => void
}

function Confirm({ title, successText, cancelText, success, cancel }: ConfirmProps) {
	return (
		<>
			<p>{title}</p>
			<button className='btn btn-success' onClick={success}>
				{successText}
			</button>
			<button className='btn btn-cancel' onClick={cancel}>
				{cancelText}
			</button>
		</>
	)
}

export default Confirm
