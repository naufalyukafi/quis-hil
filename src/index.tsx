import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App'
import "@/index.scss"

const container = document.getElementById('root')
const root = ReactDom.createRoot(container as HTMLElement)
root.render(<App />)