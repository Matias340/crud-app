import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Homes';
import AddUser from './Pages/AddUser';
import EditUser from './Pages/EditUser';
import Navbar from './Pages/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/addUser" element={<AddUser/>}/>
       <Route path="/editUser/:id" element={<EditUser />}/>
      </Routes> 
    </div>
  );
}

export default App;
