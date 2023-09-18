import { type APIToDoResponse } from '../types/types'
import './ToDoCard.scss'

interface ToDoCardProps {
	toDo: APIToDoResponse
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

function ToDoCard({ toDo }: ToDoCardProps) {
	const { title, dueDate, description, priority } = toDo
	const [month, day] = [new Date(dueDate).getMonth(), new Date(dueDate).getDay()]
	const priorityClass =
		priority === 'alta' ? 'priority-1' : priority === 'media' ? 'priority-2' : 'priority-3'

	return (
		<article className={priorityClass}>
			<div className='percentage'></div>
			<h3>{title}</h3>
			<span className='date'>{`${getAbbreviatedMonth(month - 1)} ${day}`}</span>
			<p>{description}</p>
		</article>
	)
}

export default ToDoCard
