import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.tsx'
import { ToDoProvider } from './contexts/ToDoContext.tsx'
import { PreferencesProvider } from './contexts/PreferencesContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<PreferencesProvider>
			<ToDoProvider>
				<App />
			</ToDoProvider>
		</PreferencesProvider>
	</React.StrictMode>
)
