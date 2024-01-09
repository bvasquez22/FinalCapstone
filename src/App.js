import { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Home from './components/Home'
import Footer from './components/Footer';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

import Sets from './components/Sets/Sets';
import BrightLights from './components/Sets/BrightLights';

import AuthContext from './store/authContext';

const App = () => {
  const {state} = useContext(AuthContext)

  return (
    <div>
      <Header/>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='sets' element={<Sets/>} />
        <Route path={`sets/bright-lights`} element={<BrightLights/>} />
        {/* <Route path='my-collection/:id' element={state.token ? <MyCollection/> : <Navigate to='/sign-in'/>} />  */}
        <Route path='sign-in' element={<SignIn/>} />
        <Route path='sign-up' element={<SignUp/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
