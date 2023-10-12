/** * Returns the current date in the format "YYYY-MM-DD". */

export const getDate = () => {
	const date = new Date()
	const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()

	// Para el mes debemos hacerlo siempre con dos dígitos, por lo que le agregaremos el cero por si es menor a 9 ya que si lo hacemos con el 10 podemos tener como resultado 010
	const month = date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
	const year = date.getFullYear()

	return `${year}-${month}-${day}`
}
