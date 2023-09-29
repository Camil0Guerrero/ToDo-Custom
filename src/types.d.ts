export type priorities = 'low' | 'medium' | 'high'

export type APIToDoResponse = {
	description: string
	dueDate: Date | string
	id?: number
	priority: priorities
	title: string
}

export type FiltersType = {
	completed: boolean
	dueDate: Date | string
	priority: priorities | 'all'
	title: string
	search: string
}
