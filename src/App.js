import React from 'react' ;
import Article from './Components/Article/Article';
import Brand from './Components/Brand/Brand';
import Cta from './Components/Cta/Cta';
import Feature from './Components/Feature/Feature';
import Navbar from './Components/Navbar/Navbar';

import Blog from './Containers/Blog/Blog';
import Features from './Containers/Features/Features';
import Footer from './Containers/Footer/Footer';
import Header from './Containers/Header/Header';
import Posibility from './Containers/Posibility/Posibility';
import Whatgpt3 from './Containers/Whatgpt3/Whatgpt3';


import './App.css' ;


const App = () => {
  return (
    <div className='App'>
      <div className=' gradient__bg'>
        <Navbar/>
        <Header/>
        {/* <Article/> */}
      </div>
      <Brand/>
      <Whatgpt3/>
      <Features/>
      <Posibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App