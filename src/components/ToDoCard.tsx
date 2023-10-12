import type { APIToDoResponse, Languages } from '../types.d'

import '../styles/ToDoCard.css'

import { EditTaskIcon } from './Icons'

interface ToDoCardProps {
	toDo: APIToDoResponse
	editTask: (task: APIToDoResponse) => void
	language: Languages
}

const getAbbreviatedMonth = (month: number, language?: string) => {
	const monthsEs = ['Ene', 'Abr', 'Ago', 'Dic']

	const months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	]

	if (language === 'es' && (month === 0 || month === 3 || month === 7 || month === 11)) {
		if (month === 0) return monthsEs[0]
		if (month === 3) return monthsEs[1]
		if (month === 7) return monthsEs[2]
		if (month === 11) return monthsEs[3]
	}

	return months[month]
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

function ToDoCard({ toDo, editTask, language }: ToDoCardProps) {
	const { title, dueDate, description, priority } = toDo

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
			<EditTaskIcon onClick={() => editTask(toDo)} />
		</article>
	)
}

export default ToDoCard
