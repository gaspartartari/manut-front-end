
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './routes/NavMain/Dashboard/Dashboard'
import NavMain from './routes/NavMain/NavMain'

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavMain />}>
          <Route index element={<Dashboard />} />

        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
