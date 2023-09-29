export const getDate = () => {
	const date = new Date()
	const day = date.getDate()

	// Para el mes debemos hacerlo siempre con dos dígitos, por lo que le agregaremos el cero por si es menor a 10
	const month = date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
	const year = date.getFullYear()

	return `${year}-${month}-${day}`
}
