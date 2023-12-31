import './App.css';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home'
import Footer from './components/Footer';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

import Sets from './components/Sets';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='sets' element={<Sets/>} />
        {/* <Route path='my-collection/:id' element={<MyCollection/>} />  */}
        <Route path='sign-in' element={<SignIn/>} />
        <Route path='sign-up' element={<SignUp/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
