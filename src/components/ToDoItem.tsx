import React, { FormEvent, useState } from 'react'
import { type APIToDoResponse } from '../types/types'
import '../styles/ToDoItem.scss'

interface ToDoItemProps {
	data?: APIToDoResponse
	addTask: (task: APIToDoResponse) => void
	changeOpen: () => void
}

const getDate = () => {
	const date = new Date()
	const day = date.getDate()

	// Para el mes debemos hacerlo siempre con dos dígitos, por lo que le agregaremos el cero por si es menor a 10
	const month = date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
	const year = date.getFullYear()
	return `${year}-${month}-${day}`
}

function ToDoItem({ data, addTask, changeOpen }: ToDoItemProps) {
	const [form, setForm] = useState({
		description: data?.description || '',
		dueDate: data?.dueDate.toString() || getDate(),
		priority: data?.priority || 'low',
		title: data?.title || '',
	})

	const handleChange = (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLSelectElement>
			| React.ChangeEvent<HTMLTextAreaElement>
	) => {
		const { name, value } = e.target

		setForm({
			...form,
			[name]: value,
		})
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const Task = {
			...form,
			dueDate: new Date(form.dueDate),
		}
		addTask(Task)
		setForm({
			description: '',
			dueDate: getDate(),
			priority: 'low',
			title: '',
		})
	}

	return (
		<>
			<form className='form-add-ToDo' onSubmit={handleSubmit}>
				<input
					type='text'
					name='title'
					onChange={handleChange}
					value={form.title}
					placeholder='Titulo de la tarea'
				/>
				<textarea
					name='description'
					onChange={handleChange}
					value={form.description}
					placeholder='Agrega una breve descripción'
				/>
				<div className='options'>
					<label>Fecha de entrega:</label>
					<input
						type='date'
						name='dueDate'
						min={getDate()}
						onChange={handleChange}
						value={form.dueDate}
					/>
					<label htmlFor='priority'>Prioridad:</label>
					<select name='priority' id='priority' value={form.priority} onChange={handleChange}>
						<option value='low'>Baja</option>
						<option value='medium'>Media</option>
						<option value='height'>Alta</option>
					</select>
				</div>
				<button type='submit'>Agregar</button>
				<button className='close-item' onClick={() => changeOpen()}>
					X
				</button>
			</form>
		</>
	)
}

export default ToDoItem
