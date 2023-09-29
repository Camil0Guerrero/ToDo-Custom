import { useEffect, useRef, useState } from 'react'

import getList from './utils/getList'
import { APIToDoResponse, FiltersType } from './types.d'
import ToDoCard from './components/ToDoCard'
import './styles/main.scss'
import ToDoItem from './components/ToDoItem'
import { AddTaskIcon } from './components/Icons'
import Header from './components/Header'

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
				if (filters.priority === 'all') return true
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

	return (
		<>
			<Header addFilter={addFilter} />

			{toDos.length === 0 && <h2>No tienes tareas</h2>}

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
								/>
							)
						}

						return <ToDoCard key={toDo.id} editTask={editTask} toDo={toDo} />
					})}

					{!open && filters === filtersInitialState && (
						<label>
							Nueva tarea:
							<br />
							<AddTaskIcon height='40px' width='40px' onClick={() => changeOpen()} />
						</label>
					)}
					{open && <ToDoItem addTask={addTask} changeOpen={changeOpen} data={dataToEdit!} />}
				</article>
			)}
		</>
	)
}

export default App
