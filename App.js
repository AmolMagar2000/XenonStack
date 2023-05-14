import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './css/SearchPatient.css';

import "../src/Components/login.css";
import { Login } from './Components/Login';
import Signup from './Components/Signup';
import { Aboutmain } from './Components/Aboutmain';
import { Hyperlink } from './Components/hyperlink';

import { Addpatient } from './Components/Addpatient';
function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Aboutmain></Aboutmain>}></Route>
        <Route path='/department' element={<></>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/log-in' element={<Login></Login>}></Route>
        <Route path='/menu' element={<Hyperlink></Hyperlink>}></Route>
        <Route path='/add-patient' element={<Addpatient></Addpatient>}></Route>
       
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
