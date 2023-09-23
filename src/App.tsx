import getList from './utils/getList'
import { useEffect, useState } from 'react'
import { APIToDoResponse } from './types/types'
import ToDoCard from './components/ToDoCard'
import './styles/main.scss'
import ToDoItem from './components/ToDoItem'

function App() {
	const [toDos, setToDo] = useState<APIToDoResponse[]>([])
	const [open, setOpen] = useState<boolean>(false)

	useEffect(() => {
		getList()
			.then(res => {
				setToDo(res)
			})
			.catch(err => console.error(err))
	}, [])

	const addTask = (task: APIToDoResponse) => {
		task.id = toDos.length + 1
		setToDo([...toDos, task])
	}

	const changeOpen = () => {
		setOpen(!open)
	}

	return (
		<>
			<h1>Lista de tareas</h1>
			{toDos.length === 0 && <h2>Let's to Work</h2>}

			{toDos.length > 0 && (
				<article className='to-dos'>
					{toDos.map(toDo => (
						<ToDoCard key={toDo.id} toDo={toDo} />
					))}

					{!open && (
						<label>
							Agregar nueva tarea:
							<br />
							<button className='open-add-item' onClick={() => changeOpen()}>
								<svg
									width='150px'
									height='150px'
									viewBox='0 0 1024.00 1024.00'
									version='1.1'
									xmlns='http://www.w3.org/2000/svg'
									fill='#000000'
									stroke='#000000'
									stroke-width='0.01024'
								>
									<g id='SVGRepo_bgCarrier' stroke-width='0'></g>
									<g
										id='SVGRepo_tracerCarrier'
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke='#CCCCCC'
										stroke-width='2.048'
									></g>
									<g id='SVGRepo_iconCarrier'>
										<path
											d='M512 1024C229.7 1024 0 794.3 0 512S229.7 0 512 0s512 229.7 512 512-229.7 512-512 512z m0-938.7C276.7 85.3 85.3 276.7 85.3 512S276.7 938.7 512 938.7 938.7 747.3 938.7 512 747.3 85.3 512 85.3z'
											fill='#3688FF'
										></path>
										<path
											d='M682.7 554.7H341.3c-23.6 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7h341.3c23.6 0 42.7 19.1 42.7 42.7s-19.1 42.7-42.6 42.7z'
											fill='#fff'
										></path>
										<path
											d='M512 725.3c-23.6 0-42.7-19.1-42.7-42.7V341.3c0-23.6 19.1-42.7 42.7-42.7s42.7 19.1 42.7 42.7v341.3c0 23.6-19.1 42.7-42.7 42.7z'
											fill='#fff'
										></path>
									</g>
								</svg>
							</button>
						</label>
					)}
					{open && <ToDoItem addTask={addTask} changeOpen={changeOpen} />}
				</article>
			)}
		</>
	)
}
export default App
