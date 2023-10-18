/* eslint-disable indent */
import { FiltersType, ToDoType } from '../types.d'

export const InitialState = {
	toDos: getLocalStorage(),
}

export const TODO_ACTION_TYPES = {
	ADD_TASK: 'ADD_TASK',
	DELETE_TASK: 'DELETE_TASK',
	UPDATE_TASK: 'UPDATE_TASK',
	ADD_FILTER: 'ADD_FILTER',
}

function getLocalStorage() {
	return JSON.parse(localStorage.getItem('todos')!) ?? []
}

const updateLocalStorage = (todos: ToDoType | ToDoType[]) => {
	localStorage.setItem('todos', JSON.stringify(todos))
}

export interface ToDoState {
	toDos: ToDoType[]
	filters?: FiltersType
}

export interface actionType {
	type: keyof typeof TODO_ACTION_TYPES
	payload: ToDoType | number
}

// Veré si usando condicionales queda mejor mi reducer
export function ToDoReducer(state: ToDoState, action: actionType): ToDoState {
	const { type, payload } = action

	if (typeof payload === 'number') {
		const newTodos = state.toDos.filter(todo => todo.id !== payload)

		updateLocalStorage(newTodos)

		return {
			...state,
			toDos: newTodos,
		}
	}

	if (type === TODO_ACTION_TYPES.ADD_TASK) {
		const newTodos = {
			...state,
			toDos: [...state.toDos, payload],
		}

		updateLocalStorage(newTodos.toDos)

		return newTodos
	}

	if (type === TODO_ACTION_TYPES.UPDATE_TASK) {
		const newTodos = state.toDos.map(todo => {
			if (todo.id === payload.id) {
				return payload
			}

			return todo
		})

		updateLocalStorage(newTodos)

		return {
			...state,
			toDos: newTodos,
		}
	}

	return InitialState
}
