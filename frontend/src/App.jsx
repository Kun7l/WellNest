import { useState } from 'react'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import { ToastContainer } from "react-toastify";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppRoutes/>
      <ToastContainer />
    </>
  )
}

export default App
