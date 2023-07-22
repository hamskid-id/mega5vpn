import './App.css'
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import { HomeScreen } from './components/homeScreen'

function App() {

  return (
    <>
       <Router>
          <Routes>
            <Route exact path="/" element={ <HomeScreen/>}/>
          </Routes>
      </Router>
    </>
  )
}

export default App
