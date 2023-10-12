import { COLORS, CONTENT, PRIORITIES, PROPERTIES_COLORS } from './const'

export type Priorities = (typeof PRIORITIES)[keyof typeof PRIORITIES]

export type APIToDoResponse = {
	description: string
	dueDate: Date | string
	id?: number
	priority: Priorities
	title: string
}

export type FiltersType = {
	completed: boolean
	dueDate: Date | string
	priority: Priorities | 'all'
	title: string
	search: string
}

export type Color = `#${string}`

type MainVariables = keyof typeof PROPERTIES_COLORS

type PropertiesColors = keyof typeof COLORS

export type VariablesCSS = MainVariables | PropertiesColors

export type ColorsType = {
	[key in VariablesCSS]: Color
}

export type Languages = keyof typeof CONTENT
