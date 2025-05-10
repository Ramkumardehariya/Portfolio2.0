import React from 'react'
// import { useEffect } from 'react'
import Footer from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main';
import  './styles/global.css';
import 'react-toastify/dist/ReactToastify.css'

import './index.css'
function App() {
  return (
    <div className='app'>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  )
}

export default App;
