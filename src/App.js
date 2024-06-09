import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddStudent from './components/AddStudent';
import SearchStudent from './components/SearchStudent';
import ViewAll from './components/ViewAll';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div>

<BrowserRouter><Routes>
  <Route path='/' element={<HomePage/>}/>
  <Route path='/add' element={<AddStudent/>}/>
  <Route path='/search' element={<SearchStudent/>}/>
  <Route path='/view' element={<ViewAll/>}/>
  <Route path='/about' element={<AboutUs/>}/>
  <Route path='/contact' element={<ContactUs/>}/>
  </Routes></BrowserRouter>


    </div>
  );
}

export default App;
