import React, { FormEvent, useState } from 'react'

import { type APIToDoResponse } from '../types.d'
import { getDate } from '../utils/getDate'
import '../styles/ToDoItem.scss'

interface ToDoItemProps {
	data?: APIToDoResponse
	addTask: (task: APIToDoResponse) => void
	changeOpen: () => void
}

function ToDoItem({ data, addTask, changeOpen }: ToDoItemProps) {
	const [form, setForm] = useState({
		description: data?.description || '',
		dueDate: data?.dueDate.toString() || getDate(),
		priority: data?.priority || 'low',
		title: data?.title || '',
		id: data?.id || undefined,
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
			id: undefined,
		})
	}

	return (
		<>
			<form className='form-add-ToDo' onSubmit={handleSubmit}>
				<input
					name='title'
					placeholder='Titulo de la tarea'
					type='text'
					value={form.title}
					onChange={handleChange}
				/>
				<textarea
					name='description'
					placeholder='Agrega una breve descripción'
					value={form.description}
					onChange={handleChange}
				/>
				<div className='options'>
					<label>Fecha de entrega:</label>
					<input
						min={getDate()}
						name='dueDate'
						type='date'
						value={form.dueDate.toString() > getDate() ? form.dueDate.toString() : getDate()}
						onChange={handleChange}
					/>
					<label htmlFor='priority'>Prioridad:</label>
					<select id='priority' name='priority' value={form.priority} onChange={handleChange}>
						<option value='low'>Baja</option>
						<option value='medium'>Media</option>
						<option value='high'>Alta</option>
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
