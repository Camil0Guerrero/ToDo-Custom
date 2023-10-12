import type { FiltersType, Languages, VariablesCSS } from '../types'

import { CSSProperties, useEffect, useState } from 'react'

import '../styles/Header.css'

import { getDate } from '../utils/getDate'
import { CONTENT, PRIORITIES } from '../const'

import Select from './Select'

export interface HeaderProps {
	addFilter: (filter: (filters: FiltersType) => FiltersType) => void
	colors: {
		[key in VariablesCSS]: CSSProperties['color']
	}
	language: Languages
}

function Header({ addFilter, colors, language }: HeaderProps) {
	const [search, setSearch] = useState({
		name: '',
		value: '',
	})
	const options = Object.entries(PRIORITIES).map(([key, value]) => {
		if (language === 'es') {
			return {
				value: key,
				label: value,
			}
		}

		return {
			value: key,
			label: key,
		}
	})

	useEffect(() => {
		// He decidido usar un timeout para no hacer peticiones a la API cada vez que se escribe una letra, esto nos ayuda a no hacer peticiones innecesarias y controlar un poco mas el renderizado de nuestro componente

		const sendRequest = setTimeout(() => {
			addFilter(filters => ({
				...filters,
				[search.name]: search.value,
			}))
		}, 500)

		return () => {
			clearTimeout(sendRequest)
		}
	}, [search])

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
	) => {
		e.preventDefault()
		const { name, value } = e.target

		if (name !== 'title') {
			addFilter(filter => ({
				...filter,
				[name]: value,
			}))
		}

		setSearch({
			name,
			value,
		})
	}

	return (
		<header className='header' style={colors as CSSProperties}>
			<h1>{CONTENT[language].Title}</h1>
			<form className='form-filters' onSubmit={e => e.preventDefault()}>
				<label>
					{CONTENT[language].Filters.search.content}
					<input
						name='title'
						placeholder={CONTENT[language].Filters.search.placeholder}
						type='search'
						onChange={handleChange}
					/>
				</label>
				<label>
					{CONTENT[language].Filters.minDate}
					<input defaultValue={getDate()} name='dueDate' type='date' onChange={handleChange} />
				</label>
				<label>
					{CONTENT[language].Filters.priority.content}
					<Select
						name='priority'
						options={options}
						placeholder={CONTENT[language].Filters.priority.placeholder}
						onChange={handleChange}
					/>
				</label>
			</form>
		</header>
	)
}

export default Header
