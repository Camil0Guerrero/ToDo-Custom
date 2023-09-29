import { useEffect, useState } from 'react'

import { FiltersType } from '../types.d'
import { getDate } from '../utils/getDate'

export interface HeaderProps {
	addFilter: (filter: (filters: FiltersType) => FiltersType) => void
}

function Header({ addFilter }: HeaderProps) {
	const [search, setSearch] = useState({
		name: '',
		value: '',
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
		<header className='header'>
			<h1>Tareas por hacer</h1>
			<form onSubmit={e => e.preventDefault()}>
				<label>
					Buscar:
					<input
						name='title'
						placeholder='Busca por el titulo'
						type='search'
						onChange={handleChange}
					/>
				</label>
				<label>
					Fecha minima:
					<input defaultValue={getDate()} name='dueDate' type='date' onChange={handleChange} />
				</label>
				<label>
					Filtrar por prioridad:
					<select name='priority' onChange={handleChange}>
						<option value='all'>Todas</option>
						<option value='high'>Alta</option>
						<option value='medium'>Medio</option>
						<option value='low'>Baja</option>
					</select>
				</label>
			</form>
		</header>
	)
}

export default Header
