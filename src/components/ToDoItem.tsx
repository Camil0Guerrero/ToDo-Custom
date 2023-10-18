import type { ToDoType } from '../types'

import React, { FormEvent, useState } from 'react'

import '../styles/ToDoItem.css'
import { getDate } from '../utils/getDate'
import { CONTENT, PRIORITIES } from '../const'
import { useToDo } from '../hooks/useToDo'
import { usePreferences } from '../hooks/usePreferences'

import Select from './Select'

function ToDoItem({ data }: { data?: ToDoType }) {
	const { addTask, changeOpen, changeData, editTask } = useToDo()
	const { language } = usePreferences()

	const [form, setForm] = useState({
		description: data?.description || '',
		dueDate: data?.dueDate.toString() || getDate(),
		priority: data?.priority || 'Low',
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
		const task = {
			...form,
			dueDate: new Date(form.dueDate),
		}

		if (task.id) {
			editTask(task)

			setForm({
				description: '',
				dueDate: getDate(),
				priority: 'Low',
				title: '',
				id: undefined,
			})
			changeData(null)

			return
		}
		addTask(task)
		setForm({
			description: '',
			dueDate: getDate(),
			priority: 'Low',
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
					value={
						new Date(form.dueDate).getTime() > new Date(getDate()).getTime()
							? new Date(form.dueDate).toISOString().split('T')[0]
							: getDate()
					}
					onChange={handleChange}
				/>
				<label>
					{CONTENT[language].FormAddTask.priority.content}
					<Select
						defaultValue={form.priority}
						name='priority'
						options={options}
						placeholder={CONTENT[language].FormAddTask.priority.placeholder}
						onChange={handleChange}
					/>
				</label>
			</div>
			{data?.id && <button type='submit'>{CONTENT[language].FormAddTask.buttonEdit}</button>}
			{!data?.id && <button type='submit'>{CONTENT[language].FormAddTask.button}</button>}
			<button
				className='close-item'
				onClick={() => {
					changeData(null)
					changeOpen(false)
				}}
			>
				X
			</button>
		</form>
	)
}

export default ToDoItem
