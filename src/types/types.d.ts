export type APIToDoResponse = {
	description: string
	dueDate: Date
	id: number
	priority: 'baja' | 'media' | 'alta'
	title: string
}
