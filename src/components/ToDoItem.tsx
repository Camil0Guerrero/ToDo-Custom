import type { APIToDoResponse, Languages } from '../types'

import React, { FormEvent, useState } from 'react'

import '../styles/ToDoItem.css'
import { getDate } from '../utils/getDate'
import { CONTENT, PRIORITIES } from '../const'

import Select from './Select'

interface ToDoItemProps {
	data?: APIToDoResponse
	addTask: (task: APIToDoResponse) => void
	changeOpen: () => void
	language: Languages
}

function ToDoItem({ data, addTask, changeOpen, language }: ToDoItemProps) {
	const [form, setForm] = useState({
		description: data?.description || '',
		dueDate: data?.dueDate.toString() || getDate(),
		priority: data?.priority || PRIORITIES.Low,
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
			priority: PRIORITIES.Low,
			title: '',
			id: undefined,
		})
	}

	const options = Object.entries(PRIORITIES)
		.filter(([key, value]) => {
			if (key === 'All') return false

			return {
				value: key,
				label: value,
			}
		})
		.map(([key, value]) => ({
			value: key,
			label: value,
		}))

	return (
		<form className='form-add-ToDo' onSubmit={handleSubmit}>
			<input
				name='title'
				placeholder={CONTENT[language].FormAddTask.title.placeholder}
				type='text'
				value={form.title}
				onChange={handleChange}
			/>
			<textarea
				name='description'
				placeholder={CONTENT[language].FormAddTask.description.placeholder}
				value={form.description}
				onChange={handleChange}
			/>
			<div className='options'>
				<label>{CONTENT[language].FormAddTask.deadLine}</label>
				<input
					min={getDate()}
					name='dueDate'
					type='date'
					value={form.dueDate.toString() > getDate() ? form.dueDate.toString() : getDate()}
					onChange={handleChange}
				/>
				<label>
					{CONTENT[language].FormAddTask.priority.content}
					<Select
						name='priority'
						options={options}
						placeholder={CONTENT[language].FormAddTask.priority.placeholder}
						onChange={handleChange}
					/>
				</label>
			</div>
			<button type='submit'>{CONTENT[language].FormAddTask.button}</button>
			<button className='close-item' onClick={() => changeOpen()}>
				X
			</button>
		</form>
	)
}

export default ToDoItem
