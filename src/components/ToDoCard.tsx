import type { ToDoType, Languages } from '../types.d'

import '../styles/ToDoCard.css'

import { useState } from 'react'

import { getAbbreviatedMonth } from '../utils/getAbbreviateMonth'
import { useToDo } from '../hooks/useToDo'

import { EditTaskIcon, RemoveTaskIcon } from './Icons'
import Confirm from './Confirm'

interface ToDoCardProps {
	toDo: ToDoType
	language: Languages
}

const getTaskDate = (dueDate: string | Date) => {
	let month: number, day: number

	if (dueDate instanceof Date) {
		month = dueDate.getMonth()
		day = dueDate.getDay()
	} else if (typeof dueDate === 'string') {
		month = parseInt(dueDate.split('-')[1])
		day = parseInt(dueDate.split('-')[2])
	} else {
		month = new Date(dueDate).getMonth()
		day = new Date(dueDate).getDay()
	}

	return { month, day }
}

function ToDoCard({ toDo, language }: ToDoCardProps) {
	const [confirm, setConfirm] = useState<boolean | null>(null)
	const { title, dueDate, description, priority } = toDo

	const { removeTask, changeData } = useToDo()

	const { month, day } = getTaskDate(dueDate)

	let priorityClass = 'low-priority'

	if (priority === 'Medium') priorityClass = 'medium-priority'
	if (priority === 'High') priorityClass = 'high-priority'

	return (
		<article className={priorityClass}>
			<div className='percentage' />
			<h3>{title}</h3>
			<span className='date'>{`${getAbbreviatedMonth(month - 1, language)} ${day}`}</span>
			<p>{description}</p>
			{!confirm && (
				<div className='icons'>
					<RemoveTaskIcon
						strokeWidth='1.3'
						onClick={() => {
							setConfirm(true)

							setTimeout(() => {
								setConfirm(false)
							}, 3000)
						}}
					/>
					<EditTaskIcon onClick={() => changeData(toDo)} />
				</div>
			)}
			{confirm && (
				<div className='confirm-container'>
					<Confirm
						cancel={() => setConfirm(null)}
						cancelText='No'
						success={() => removeTask(toDo.id!)}
						successText='Si'
						title='Seguro?'
					/>
				</div>
			)}
		</article>
	)
}

export default ToDoCard
