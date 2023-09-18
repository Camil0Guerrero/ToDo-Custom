import getList from './utils/getList'
import { useEffect, useState } from 'react'
import { APIToDoResponse } from './types/types'
import ToDoCard from './components/ToDoCard'
import './styles/main.scss'

function App() {
	const [toDos, setToDo] = useState<APIToDoResponse[]>([])

	useEffect(() => {
		getList()
			.then(res => {
				setToDo(res)
			})
			.catch(err => console.error(err))
	}, [])

	return (
		<>
			<h1>Lista de tareas</h1>
			{toDos.length === 0 && <h2>Let's to Work</h2>}

			{toDos.length > 0 && (
				<article className='to-dos'>
					{toDos.map(toDo => (
						<ToDoCard key={toDo.id} toDo={toDo} />
					))}
				</article>
			)}
		</>
	)
}
export default App
