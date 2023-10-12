interface IconProps {
	width?: string
	height?: string
	fill?: string
	stroke?: string
	strokeWidth?: string
	onClick?: () => void
}

export const EditTaskIcon = ({ width, height, fill, stroke, strokeWidth, onClick }: IconProps) => (
	<svg
		fill={fill ?? 'none'}
		height={height ?? '24px'}
		style={onClick ? { cursor: 'pointer' } : {}}
		viewBox='0 0 24 24'
		width={width ?? '24px'}
		onClick={onClick}
	>
		<g id='SVGRepo_bgCarrier' strokeWidth='0' />
		<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' />
		<g id='SVGRepo_iconCarrier'>
			<path
				className='strokeInvert'
				d='M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H9M15 5H17C18.1046 5 19 5.89543 19 7V9'
				stroke={stroke ?? '#fff'}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={strokeWidth ?? '2'}
			/>
			<path
				className='strokeInvert'
				d='M14.902 20.3343L12.7153 20.7716L13.1526 18.585C13.1914 18.3914 13.2865 18.2136 13.4261 18.074L17.5 14L19.5 12L21.4869 13.9869L19.4869 15.9869L15.413 20.0608C15.2734 20.2004 15.0956 20.2956 14.902 20.3343Z'
				stroke={stroke ?? '#fff'}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={strokeWidth ?? '2'}
			/>
			<path
				className='strokeInvert'
				d='M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z'
				stroke={stroke ?? '#fff'}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={strokeWidth ?? '2'}
			/>
		</g>
	</svg>
)

export const AddTaskIcon = ({ width, height, fill, stroke, strokeWidth, onClick }: IconProps) => (
	<svg
		height={height ?? '150px'}
		style={onClick ? { cursor: 'pointer' } : {}}
		version='1.1'
		viewBox='0 0 1024.00 1024.00'
		width={width ?? '150px'}
		onClick={onClick}
	>
		<g id='SVGRepo_bgCarrier' strokeWidth='0' />
		<g
			id='SVGRepo_tracerCarrier'
			stroke='#CCCCCC'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={strokeWidth ?? '2.048'}
		/>
		<g id='SVGRepo_iconCarrier'>
			<path
				d='M512 1024C229.7 1024 0 794.3 0 512S229.7 0 512 0s512 229.7 512 512-229.7 512-512 512z m0-938.7C276.7 85.3 85.3 276.7 85.3 512S276.7 938.7 512 938.7 938.7 747.3 938.7 512 747.3 85.3 512 85.3z'
				fill={fill ?? '#3688FF'}
			/>
			<path
				className='fillInvert'
				d='M682.7 554.7H341.3c-23.6 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7h341.3c23.6 0 42.7 19.1 42.7 42.7s-19.1 42.7-42.6 42.7z'
				fill={stroke ?? '#fff'}
			/>
			<path
				className='fillInvert'
				d='M512 725.3c-23.6 0-42.7-19.1-42.7-42.7V341.3c0-23.6 19.1-42.7 42.7-42.7s42.7 19.1 42.7 42.7v341.3c0 23.6-19.1 42.7-42.7 42.7z'
				fill={stroke ?? '#fff'}
			/>
		</g>
	</svg>
)

export const SettingIcon = ({ width, height, fill, stroke, strokeWidth, onClick }: IconProps) => (
	<svg
		fill={fill ?? 'none'}
		height={height ?? '24'}
		style={onClick ? { cursor: 'pointer' } : {}}
		viewBox='0 0 24 24'
		width={width ?? '24'}
		onClick={onClick}
	>
		<g id='SVGRepo_bgCarrier' strokeWidth='0' />
		<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' />
		<g id='SVGRepo_iconCarrier'>
			<path
				className='strokeInvert'
				d='M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z'
				stroke={stroke ?? '#fff'}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeMiterlimit='10'
				strokeWidth={strokeWidth ?? '1.5'}
			/>
			<path
				className='strokeInvert'
				d='M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z'
				stroke={stroke ?? '#fff'}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeMiterlimit='10'
				strokeWidth={strokeWidth ?? '1.5'}
			/>
		</g>
	</svg>
)
