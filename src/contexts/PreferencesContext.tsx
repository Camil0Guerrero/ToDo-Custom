import { CSSProperties, createContext, useState } from 'react'

import { Languages, ProviderProps, VariablesCSS } from '../types.d'
import { COLORS, PROPERTIES_COLORS } from '../const'

const updateLocalStorage = ({
	title,
	value,
}: {
	title: string
	value: Languages | { [key in VariablesCSS]: CSSProperties['color'] }
}) => {
	localStorage.setItem(title, JSON.stringify(value))
}

const getLocalStorage = () => {
	return (
		JSON.parse(localStorage.getItem('colors')!) ??
		({
			...COLORS,
			...PROPERTIES_COLORS,
		} as {
			[key in VariablesCSS]: CSSProperties['color']
		})
	)
}

const PreferencesContext = createContext({
	colors: {} as { [key in VariablesCSS]: CSSProperties['color'] },
	language: 'es' as Languages,
	changeColors: ({
		property,
		color,
	}: {
		property: VariablesCSS
		color: CSSProperties['color']
	}) => {
		// eslint-disable-next-line no-console
		console.log({ property, color })
	},
	changeLanguage: (language: Languages) => {
		// eslint-disable-next-line no-console
		console.log({ language })
	},
})

export const PreferencesProvider: React.FC<ProviderProps> = ({ children }) => {
	const [colors, setColors] = useState<{
		[key in VariablesCSS]: CSSProperties['color']
	}>(getLocalStorage())

	const [language, setLanguage] = useState<Languages>(
		JSON.parse(localStorage.getItem('language')!) ?? 'es'
	)

	const changeColors = ({
		property,
		color,
	}: {
		property: VariablesCSS
		color: CSSProperties['color']
	}) => {
		const newColors = {
			...colors,
			[property]: color,
		}

		updateLocalStorage({
			title: 'colors',
			value: newColors,
		})

		setColors(newColors)
	}

	const changeLanguage = (language: Languages) => {
		updateLocalStorage({
			title: 'language',
			value: language,
		})
		setLanguage(language)
	}

	const data = {
		colors,
		language,
		changeColors,
		changeLanguage,
	}

	return <PreferencesContext.Provider value={data}>{children}</PreferencesContext.Provider>
}

export default PreferencesContext
