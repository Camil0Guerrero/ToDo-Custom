export type APIToDoResponse = {
	description: string
	dueDate: Date
	id?: number
	priority: 'low' | 'medium' | 'height'
	title: string
}
