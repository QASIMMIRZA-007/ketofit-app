import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import CustomCursor from './Components/CustomCursor.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  {/* <CustomCursor/> */}
  </React.StrictMode>,
)
