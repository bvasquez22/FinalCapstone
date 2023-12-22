import './App.css';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home'
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route index element={<Home/>} />
        {/* <Route path='sets' element={<Sets/>} />
        <Route path='my-collection/:id' element={<MyCollection/>} /> 
        <Route path='sign-in' element={<SignIn/>} />*/}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
