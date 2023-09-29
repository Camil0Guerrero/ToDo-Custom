interface IconProps {
	width?: string
	height?: string
	fill?: string
	stroke?: string
	strokeWidth?: string
	onClick?: () => void
}

export const EditTaskIcon = ({ width, height, fill, stroke, strokeWidth, onClick }: IconProps) => {
	return (
		<svg
			fill={fill ?? 'none'}
			height={height ?? '24px'}
			viewBox='0 0 24 24'
			width={width ?? '24px'}
			xmlns='http://www.w3.org/2000/svg'
			onClick={onClick}
		>
			<g id='SVGRepo_bgCarrier' strokeWidth='0' />
			<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' />
			<g id='SVGRepo_iconCarrier'>
				<path
					d='M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H9M15 5H17C18.1046 5 19 5.89543 19 7V9'
					stroke={stroke ?? '#fff'}
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={strokeWidth ?? '2'}
				/>
				<path
					d='M14.902 20.3343L12.7153 20.7716L13.1526 18.585C13.1914 18.3914 13.2865 18.2136 13.4261 18.074L17.5 14L19.5 12L21.4869 13.9869L19.4869 15.9869L15.413 20.0608C15.2734 20.2004 15.0956 20.2956 14.902 20.3343Z'
					stroke={stroke ?? '#fff'}
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={strokeWidth ?? '2'}
				/>
				<path
					d='M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z'
					stroke={stroke ?? '#fff'}
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={strokeWidth ?? '2'}
				/>
			</g>
		</svg>
	)
}

export const AddTaskIcon = ({ width, height, fill, stroke, strokeWidth, onClick }: IconProps) => (
	<svg
		fill={fill ?? '#000'}
		height={height ?? '150px'}
		stroke={stroke ?? '#000'}
		strokeWidth={strokeWidth ?? '0.01024'}
		version='1.1'
		viewBox='0 0 1024.00 1024.00'
		width={width ?? '150px'}
		xmlns='http://www.w3.org/2000/svg'
		onClick={onClick}
	>
		<g id='SVGRepo_bgCarrier' strokeWidth='0' />
		<g
			id='SVGRepo_tracerCarrier'
			stroke='#CCCCCC'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth='2.048'
		/>
		<g id='SVGRepo_iconCarrier'>
			<path
				d='M512 1024C229.7 1024 0 794.3 0 512S229.7 0 512 0s512 229.7 512 512-229.7 512-512 512z m0-938.7C276.7 85.3 85.3 276.7 85.3 512S276.7 938.7 512 938.7 938.7 747.3 938.7 512 747.3 85.3 512 85.3z'
				fill='#3688FF'
			/>
			<path
				d='M682.7 554.7H341.3c-23.6 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7h341.3c23.6 0 42.7 19.1 42.7 42.7s-19.1 42.7-42.6 42.7z'
				fill='#fff'
			/>
			<path
				d='M512 725.3c-23.6 0-42.7-19.1-42.7-42.7V341.3c0-23.6 19.1-42.7 42.7-42.7s42.7 19.1 42.7 42.7v341.3c0 23.6-19.1 42.7-42.7 42.7z'
				fill='#fff'
			/>
		</g>
	</svg>
)
