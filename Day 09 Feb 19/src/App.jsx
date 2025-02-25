import './App.css';
import Home from './components/Functionalcomponents/home';
import About from './components/Functionalcomponents/about';
import Signup from './components/Functionalcomponents/signup';
import Contact from './components/Functionalcomponents/contact';
import Gallery from './components/Functionalcomponents/gallery';
import Login from './components/Functionalcomponents/login';
import Navbar from './components/Functionalcomponents/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Use_Effect from './components/Functionalcomponents/hooks/useeffect';
import Use_State from './components/Functionalcomponents/hooks/usestate';
import EffectApi from './components/Functionalcomponents/hooks/UseEffectApi';
import UseRef from './components/Functionalcomponents/hooks/UseRef';
import UseMemo from './components/Functionalcomponents/hooks/UseMemo';
import UseCallback from './components/Functionalcomponents/hooks/UseCallback';
import UseMemoize from './components/Functionalcomponents/hooks/UseMemoize';
import HoC from './components/Functionalcomponents/Hoc/HoC';
import Memo from './components/Memoization/Memo'; 
import LazyLoadingAndSuspense from './components/Memoization/LazyLoadingAndSuspense';
import CoE from './components/Functionalcomponents/ContextAPI/CoE';
import Faculty from './components/Functionalcomponents/ContextAPI/Faculty';
import Exam from './components/Functionalcomponents/ContextAPI/Exam';
import StudentResults from './components/Functionalcomponents/ContextAPI/StudentResults';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path='/' element={<Home hi="Hello" hey="World"/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/useeffect' element={<Use_Effect/>}/>
            <Route path='/usestate' element={<Use_State/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/useeffapi' element={<EffectApi/>}/>
            <Route path='/UseRef' element={<UseRef/>} />
            <Route path='/UseMemo' element={<UseMemo/>} />
            <Route path='/UseCallback' element={<UseCallback/>} />
            <Route path='/UseMemoize' element={<UseMemoize/>} />
            <Route path='/Hoc' element={<HoC/>} />
            <Route path='/Memo' element={<Memo />} />
            <Route path='/LazyLoadingAndSuspense' element={<LazyLoadingAndSuspense />}/>
            <Route path='/CoE' element={<CoE />} />
            <Route path='/Faculty' element= {<Faculty />} />
            <Route path='/Exam' element= {<Exam />} />
            <Route path='/StudensResults' element= {<StudentResults />} />
          </Routes>
        </div>
      </BrowserRouter>
    </main>
  );
}

export default App;
