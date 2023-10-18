import { CSSProperties } from 'react'

import Header from './components/Header'
import { AddTaskIcon } from './components/Icons'
import ToDoCard from './components/ToDoCard'
import ToDoItem from './components/ToDoItem'
import Footer from './components/Footer'
import './styles/main.css'
import { CONTENT } from './const'
import { useToDo } from './hooks/useToDo'
import { usePreferences } from './hooks/usePreferences'

function App() {
	const { toDos, dataToEdit, open, changeOpen } = useToDo()

	const { colors, language } = usePreferences()

	return (
		<>
			<Header />
			<main style={colors as CSSProperties}>
				{toDos.length === 0 && (
					<>
						<h2>{CONTENT[language].empty}</h2>

						{!open && (
							<label>
								<AddTaskIcon
									fill={colors['--secondary-color']}
									height='40px'
									width='40px'
									onClick={() => changeOpen(true)}
								/>
							</label>
						)}

						{open && <ToDoItem data={dataToEdit!} />}
					</>
				)}
				{toDos.length > 0 && (
					<article className='to-dos'>
						{toDos.map(toDo => {
							if (toDo.id === dataToEdit?.id) {
								return <ToDoItem key={toDo.id} data={dataToEdit!} />
							}

							return <ToDoCard key={toDo.id} language={language} toDo={toDo} />
						})}

						{!open && (
							<label>
								<AddTaskIcon
									fill={colors['--secondary-color']}
									height='40px'
									width='40px'
									onClick={() => changeOpen(true)}
								/>
							</label>
						)}
						{open && <ToDoItem data={dataToEdit!} />}
					</article>
				)}
			</main>
			<Footer />
		</>
	)
}

export default App
