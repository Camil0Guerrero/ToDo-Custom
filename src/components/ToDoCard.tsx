import { type APIToDoResponse } from '../types.d'

import '../styles/ToDoCard.scss'
import { EditTaskIcon } from './Icons'

interface ToDoCardProps {
	toDo: APIToDoResponse
	editTask: (task: APIToDoResponse) => void
}

const getAbbreviatedMonth = (month: number) => {
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

function ToDoCard({ toDo, editTask }: ToDoCardProps) {
	const { title, dueDate, description, priority } = toDo

	const { month, day } = getTaskDate(dueDate)

	const priorityClass =
		priority === 'high' ? 'priority-1' : priority === 'medium' ? 'priority-2' : 'priority-3'

	return (
		<article className={priorityClass}>
			<div className='percentage' />
			<h3>{title}</h3>
			<span className='date'>{`${getAbbreviatedMonth(month - 1)} ${day}`}</span>
			<p>{description}</p>
			<EditTaskIcon onClick={() => editTask(toDo)} />
		</article>
	)
}

export default ToDoCard
