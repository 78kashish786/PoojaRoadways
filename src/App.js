import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import {Routes,Route, useLocation, useNavigate} from 'react-router-dom';
import About from './Pages/About';
import Services from './Pages/Whyus';
import OurClients from './Pages/OurClients';
import Contact from './Pages/Contact';
import Whyus from './Pages/Whyus';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setLoading } from './Slice/LoadingSlice';
import Loading from './Components/Route_component/Loading';

function App() {

  const location = useLocation();
  const Navigate = useNavigate();
  const dispatch= useDispatch();
  const isLoading = useSelector((state)=>state.loading);

  useEffect(()=>{
    dispatch(setLoading(true));
    const timer = setTimeout(()=>{
      dispatch(setLoading(false));
    },1000)

    return ()=>clearTimeout(timer);
  },[dispatch, location.pathname])

  return (
    <>
    <Header/>
    <Main>
      {isLoading && <Loading/>}
      <Routes>
        <Route path ='/' element={<Home/>}/>
        <Route path ='/about' element={<About/>}/>
        <Route path ='/why-us' element={<Whyus/>}/>
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
