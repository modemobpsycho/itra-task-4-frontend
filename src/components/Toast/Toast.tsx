import useModalStore from '../../stores/modalStore'

export default function Toast() {
	const { message } = useModalStore(state => state)
	return (
		<div className='toast-container position-fixed bottom-0 end-0 p-3'>
			<div
				id='myToast'
				className='toast'
				role='alert'
				aria-live='assertive'
				aria-atomic='true'
			>
				<div className='toast-header'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='16'
						height='16'
						fill='currentColor'
						className='bi bi-bell-fill me-2'
						viewBox='0 0 16 16'
					>
						<path d='M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z' />
					</svg>
					<strong className='me-auto'>Notification</strong>
					<button
						type='button'
						className='btn-close'
						data-bs-dismiss='toast'
						aria-label='Close'
					></button>
				</div>
				<div className='toast-body'>{message}</div>
			</div>
		</div>
	)
}
