import { createContext, useReducer, useState } from 'react'

import { ToDoType, FiltersType, ProviderProps } from '../types.d'
import { InitialState, ToDoReducer } from '../reducers/ToDo'

const ToDoContext = createContext({
	toDos: [] as ToDoType[],
	dataToEdit: null as ToDoType | null,
	filters: null as FiltersType | null,
	open: false as boolean,
	addTask: (task: ToDoType) => {
		// eslint-disable-next-line no-console
		console.log({ task })
	},
	editTask: (task: ToDoType) => {
		// eslint-disable-next-line no-console
		console.log({ task })
	},
	addFilter: ({ name, value }: { name: string; value: string }) => {
		// eslint-disable-next-line no-console
		console.log({ name, value })
	},
	changeOpen: (open: boolean) => {
		// eslint-disable-next-line no-console
		console.log({ open })
	},
	removeTask: (id: number) => {
		// eslint-disable-next-line no-console
		console.log({ id })
	},
	changeData: (data: ToDoType | null) => {
		// eslint-disable-next-line no-console
		console.log({ data })
	},
})

function useToDoReducer() {
	const [state, dispatch] = useReducer(ToDoReducer, InitialState)

	const { toDos } = state

	const addTask = (task: ToDoType) => {
		task.id = toDos.length + 1
		dispatch({
			type: 'ADD_TASK',
			payload: task,
		})
	}

	const editTask = (task: ToDoType) => {
		dispatch({
			type: 'UPDATE_TASK',
			payload: task,
		})
	}

	const removeTask = (id: number) => {
		dispatch({
			type: 'DELETE_TASK',
			payload: id,
		})
	}

	return { state, addTask, editTask, removeTask }
}

const ToDoProvider: React.FC<ProviderProps> = ({ children }) => {
	const [dataToEdit, setDataToEdit] = useState<ToDoType | null>(null)
	const [filters, setFilters] = useState<FiltersType | null>(null)
	const [open, setOpen] = useState<boolean>(false)

	const { state, addTask, editTask, removeTask } = useToDoReducer()

	const getToDos = () => {
		const { toDos } = state

		if (!filters) return toDos

		const filteredList = toDos.filter(toDo => {
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

		return filteredList
	}

	const addFilter = ({ name, value }: { name: string; value: string }) => {
		setFilters(prevFilters => ({
			...(prevFilters as FiltersType),
			[name]: value,
		}))

		return filters
	}

	const changeOpen = (newOpen: boolean) => {
		setOpen(newOpen)
	}

	const changeData = (data: ToDoType | null) => {
		setOpen(false)
		setDataToEdit(data)
	}

	const data = {
		toDos: getToDos(),
		dataToEdit,
		filters,
		open,
		addTask,
		changeOpen,
		editTask,
		addFilter,
		changeData,
		removeTask,
	}

	return <ToDoContext.Provider value={data}>{children}</ToDoContext.Provider>
}

export { ToDoProvider }

export default ToDoContext
