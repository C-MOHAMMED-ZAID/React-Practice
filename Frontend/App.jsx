import React from 'react'
import NewsCard2 from './pages/NewsCard2'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import MenuBar from './Components/MenuBar'
import Footer from './pages/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div>
      <MenuBar></MenuBar>
      
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
        </Routes>
      
    <div style={{display:"flex",padding:"25px",justifyContent:"space-evenly",flexWrap:"wrap"}}>
      <NewsCard2 imgurl="./photos/img8.jpg" title='Suramu Danku'
       heart={100} likes={1000} dislikes={10}>
      If you give up, the game is already over.
      
      </NewsCard2>
      <NewsCard2 imgurl="./photos/img1.jpg" title='Demon Slayer'
      heart={100} likes={1000} dislikes={10}>
      Never leave yourself so defenseless in front of an enemy.
      
      </NewsCard2>
      <NewsCard2 imgurl="./photos/img7.jpg" title='One Piece'
      heart={100} likes={1000} dislikes={10} >
      You must not give up hope until the end. 
      </NewsCard2>

    </div>
    <Footer></Footer>
    </div>
  )
}

export default App