import type { Languages, VariablesCSS } from '../types'

import { useState, CSSProperties } from 'react'

import { COLORS, CONTENT, PROPERTIES_COLORS } from '../const'
import { getFriendlyName } from '../utils/getFriendlyName'

import { SettingIcon } from './Icons'

import '../styles/Footer.css'

interface FooterProps {
	changeColors: ({
		property,
		color,
	}: {
		property: VariablesCSS
		color: CSSProperties['color']
	}) => void
	changeLanguage: (language: Languages) => void
	colors: {
		[key in VariablesCSS]: CSSProperties['color']
	}
	language: Languages
}

function Footer({ changeColors, changeLanguage, colors, language }: FooterProps) {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const handleLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
		changeLanguage(e.target.value as Languages)
	}

	return (
		<footer>
			<SettingIcon onClick={() => setIsOpen(!isOpen)} />

			{isOpen && (
				<form className='custom-page'>
					<h4>{CONTENT[language].Footer.SubTitle1}</h4>
					{Object.entries(COLORS).map(([key]) => (
						<label key={key}>
							{getFriendlyName({ property: key })}

							<div>
								<input
									name={key}
									type='color'
									value={colors[key! as VariablesCSS] ?? 'white'}
									onChange={e => {
										const { value } = e.target
										const name = e.target.name as VariablesCSS

										changeColors({
											property: name,
											color: value,
										})
									}}
								/>
							</div>
						</label>
					))}

					<h4>{CONTENT[language].Footer.SubTitle2}</h4>
					{Object.keys(PROPERTIES_COLORS).map(key => {
						if (key === '--percentage') return

						return (
							<label key={key}>
								{getFriendlyName({ property: key })}
								<div>
									<input
										name={key}
										type='color'
										value={colors[key! as VariablesCSS] ?? 'white'}
										onChange={e => {
											const { value } = e.target
											const name = e.target.name as VariablesCSS

											changeColors({
												property: name,
												color: value,
											})
										}}
									/>
								</div>
							</label>
						)
					})}

					<label>
						{CONTENT[language].Footer.languages.content}
						<select onChange={handleLanguage}>
							<option value={CONTENT[language].Footer.languages.language1.acc}>
								{CONTENT[language].Footer.languages.language1.trad}
							</option>
							<option value={CONTENT[language].Footer.languages.language2.acc}>
								{CONTENT[language].Footer.languages.language2.trad}
							</option>
						</select>
					</label>
				</form>
			)}
		</footer>
	)
}

export default Footer
