import { StrictMode, React } from 'react'
import ReactDOM from 'react-dom/client'
import 'normalize.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

import  { Provider }  from './context/ProductsContext'


console.clear()
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<StrictMode>
		<BrowserRouter>
			<Provider>
				<App />
			</Provider>
		</BrowserRouter>
	</StrictMode>,
)