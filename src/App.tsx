import { useEffect, useRef, useState, CSSProperties } from 'react'

import Header from './components/Header'
import { AddTaskIcon } from './components/Icons'
import ToDoCard from './components/ToDoCard'
import ToDoItem from './components/ToDoItem'
import Footer from './components/Footer'
import './styles/main.css'
import { APIToDoResponse, FiltersType, Languages, VariablesCSS } from './types.d'
import getList from './utils/getList'
import { COLORS, CONTENT, PROPERTIES_COLORS } from './const'

const filtersInitialState: FiltersType = {
	completed: false,
	dueDate: '',
	priority: 'all',
	title: '',
	search: '',
}

function App() {
	const [toDos, setToDo] = useState<APIToDoResponse[]>([])
	const [dataToEdit, setDataToEdit] = useState<APIToDoResponse | null>(null)
	const [open, setOpen] = useState<boolean>(false)
	const [filters, setFilters] = useState<FiltersType>(filtersInitialState)
	const [colors, setColors] = useState<{
		[key in VariablesCSS]: CSSProperties['color']
	}>({
		...COLORS,
		...PROPERTIES_COLORS,
	})
	const [language, setLanguage] = useState<Languages>('es')

	const originalList = useRef<APIToDoResponse[]>([])

	useEffect(() => {
		getList().then(res => {
			setToDo(res)
			originalList.current = res
		})
	}, [])

	useEffect(() => {
		const filteredList = originalList.current.filter(toDo => {
			if (filters.title) {
				if (!toDo.title.toLocaleLowerCase().includes(filters.title.toLocaleLowerCase()))
					return false
			}

			if (filters.search) {
				if (!toDo.title.toLocaleLowerCase().includes(filters.search.toLocaleLowerCase()))
					return false
			}

			if (filters.dueDate) {
				return toDo.dueDate >= filters.dueDate
			}

			if (filters.priority) {
				if (filters.priority === 'All') return true
				if (filters.priority !== toDo.priority) return false
			}

			return true
		})

		setToDo(filteredList)
	}, [filters])

	const addTask = (task: APIToDoResponse) => {
		if (task.id) {
			const index = toDos.findIndex(toDo => toDo.id === task.id)

			toDos[index] = task

			setToDo([...toDos])
			setDataToEdit(null)
			setOpen(false)

			return
		}

		task.id = toDos.length + 1
		setToDo([...toDos, task])
		setDataToEdit(null)
		setOpen(false)
	}

	const changeOpen = () => {
		setOpen(!open)
	}

	const editTask = (task: APIToDoResponse) => {
		setDataToEdit(task)
	}

	const addFilter = (filter: (filters: FiltersType) => FiltersType) => {
		setFilters(filter)

		return filters
	}

	const changeColors = ({
		property,
		color,
	}: {
		property: VariablesCSS
		color: CSSProperties['color']
	}) => {
		setColors({
			...colors,
			[property]: color,
		})
	}

	const changeLanguage = (language: Languages) => {
		setLanguage(language)
	}

	return (
		<>
			<Header addFilter={addFilter} colors={colors} language={language} />
			<main style={colors as CSSProperties}>
				{toDos.length === 0 && <h2>{CONTENT[language].empty}</h2>}
				{toDos.length > 0 && (
					<article className='to-dos'>
						{toDos.map(toDo => {
							if (toDo.id === dataToEdit?.id) {
								return (
									<ToDoItem
										key={toDo.id}
										addTask={addTask}
										changeOpen={changeOpen}
										data={dataToEdit!}
										language={language}
									/>
								)
							}

							return <ToDoCard key={toDo.id} editTask={editTask} language={language} toDo={toDo} />
						})}

						{!open && (
							<label>
								<AddTaskIcon
									fill={colors['--secondary-color']}
									height='40px'
									width='40px'
									onClick={() => changeOpen()}
								/>
							</label>
						)}
						{open && (
							<ToDoItem
								addTask={addTask}
								changeOpen={changeOpen}
								data={dataToEdit!}
								language={language}
							/>
						)}
					</article>
				)}
			</main>
			<Footer
				changeColors={changeColors}
				changeLanguage={changeLanguage}
				colors={colors}
				language={language}
			/>
		</>
	)
}

export default App
