export const PRIORITIES = {
	All: 'Todas',
	High: 'Alta',
	Medium: 'Media',
	Low: 'Baja',
}

// Parece que no hay una manera modificar las variables de scss con TypeScript ni viceversa, por lo que usare las variables de CSS para los colores y las cambiare en el cuerpo de mi tsx
export const COLORS = {
	'--primary-color': '#00abd6',
	'--secondary-color': '#eaeaeaaf',
	'--tertiary-color': '#e51a4c',
}

export const PROPERTIES_COLORS = {
	'--high-priority': '#e51a4c',
	'--medium-priority': '#e9ab00',
	'--low-priority': '#00abd6',
	'--percentage': '75%',
}

export const CONTENT = {
	es: {
		Title: 'Tareas por hacer',
		Filters: {
			search: {
				content: 'Buscar',
				placeholder: 'Buscar por título',
			},
			minDate: 'Fecha mínima',
			priority: {
				content: 'Prioridad',
				placeholder: 'Seleccione una prioridad',
			},
		},
		FormAddTask: {
			title: {
				content: 'Título',
				placeholder: 'Ingrese un título',
			},
			description: {
				content: 'Descripción',
				placeholder: 'Agregue una breve descripción',
			},
			deadLine: 'Fecha de vencimiento',
			priority: {
				content: 'Prioridad',
				placeholder: 'Seleccione una prioridad',
			},
			button: 'Agregar tarea',
		},
		Footer: {
			SubTitle1: 'Colores de nuestra pagina',
			SubTitle2: 'Colores de las prioridades',
			languages: {
				content: 'Idioma',
				language1: {
					acc: 'es',
					trad: 'Español',
				},
				language2: {
					acc: 'en',
					trad: 'Ingles',
				},
			},
		},
		empty: 'No tienes tareas, agrega una nueva',
	},
	en: {
		Title: 'To-do tasks',
		Filters: {
			search: {
				content: 'Search',
				placeholder: 'Search by title',
			},
			minDate: 'Minimum date',
			priority: {
				content: 'Priority',
				placeholder: 'Select a priority',
			},
		},
		FormAddTask: {
			title: {
				content: 'Title',
				placeholder: 'Enter a title',
			},
			description: {
				content: 'Description',
				placeholder: 'Add a brief description',
			},
			deadLine: 'Deadline',
			priority: {
				content: 'Priority',
				placeholder: 'Select a priority',
			},
			button: 'Add task',
		},
		Footer: {
			SubTitle1: 'Our page colors',
			SubTitle2: 'Priority colors',
			languages: {
				content: 'Language',
				language1: {
					acc: 'es',
					trad: 'Spanish',
				},
				language2: {
					acc: 'en',
					trad: 'English',
				},
			},
		},
		empty: 'You have no tasks, add a new one',
	},
}
