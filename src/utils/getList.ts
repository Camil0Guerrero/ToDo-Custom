import { type APIToDoResponse } from '../types/types'

async function getList() {
	const res = await fetch('http://localhost:5173/data.json')

	if (!res.ok) {
		throw new Error('Something went wrong')
	}

	return (await res.json()) as APIToDoResponse[]
}

export default getList
