import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import {Routes,Route} from 'react-router-dom';
import About from './Pages/About';
import Services from './Pages/Services';
import OurClients from './Pages/OurClients';
import Contact from './Pages/Contact';

function App() {
  return (
    <>
    <Header/>
    <Main>
      <Routes>
        <Route path ='/' element={<Home/>}/>
        <Route path ='/about' element={<About/>}/>
        <Route path ='/services' element={<Services/>}/>
        <Route path ='/our-clients' element={<OurClients/>}/>
        <Route path ='/contact' element={<Contact/>}/>
        <Route path ='*' element={<NotFound/>}/>
      </Routes>
    </Main>
    <Footer/>
    </>
  );
}

export default App;
