// Cree esta función para que al mostrar los colores que puede modificar nuestro usuario pueda verlos de una mejor forma, no la variable que usamos en CSS, por ejemplo, el --primary-color se mostrara como "Primary Color" en el select

export function getFriendlyName({ property }: { property: string }): string {
	const deleteGuion = property.replace(/-/g, ' ')
	const deleteSpaces = deleteGuion.trim()
	const capitalize = deleteSpaces.charAt(0).toUpperCase() + deleteSpaces.slice(1)

	return capitalize
}
