import './App.css';
import Companies from './components/Companies';
import Contact from './components/Contact';
import Error from './components/Error';
import Footer from './components/Footer';
import Job from './components/Job';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router';
import Services from './components/Services';
import Home from './components/Home';

function App() {

  

  return (
    <BrowserRouter>
        <div className="App">
            <NavBar/>
              <Routes>
                <Route path='/' element={<Home/>}></Route>
                  <Route path='/job' element={<Job/>}></Route>
                  <Route path='*' element={<Error/>}></Route>
                  <Route path='/companies' element={<Companies/>}></Route>
                  <Route path='/contact' element={<Contact/>}></Route>
                  <Route path='/services' element={<Services/>}></Route>

              </Routes>
            <Footer/>
        </div>
    </BrowserRouter>
  );
}

export default App;
