import react from 'react'
import './App.scss'
import Home from './Components/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import LoginInterafce from './Pages/LoginInterafce';
function App() {
 

  return (
    <>
    <div className='app'>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LoginInterafce" element={<LoginInterafce/>} /> 
      </Routes>
    </Router>
    {/* <Home/> */}
    </div>

    </>
     )
}

export default App
