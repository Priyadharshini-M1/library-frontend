import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Admin from './Admin';
import User from './User';
import AdminLogin from './AdminLogin';
import UserLogin from './UserLogin';
import BookList from './BookList';
import AddBookForm from './AddBookForm';
import axios from 'axios';

axios.defaults.baseURL = "https://c541-16-170-205-254.ngrok-free.app";
axios.defaults.headers = {
  "Content-Type": "application/json",
  "ngrok-skip-browser-warning": "69420"
};
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='Admin' element={<Admin/>}/>
        <Route path ='User' element={<User/>}/>
        <Route path ='AdminLogin' element={<AdminLogin/>}/>
        <Route path='UserLogin' element={<UserLogin/>}/>
        <Route path='BookList' element={<BookList/>}/>
        <Route path='AddBookForm' element={<AddBookForm/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
