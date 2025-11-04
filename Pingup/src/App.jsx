import React from 'react'
import Home from './components/Home/Home'
import {Routes, Route} from "react-router-dom"
import Message from './components/Message/Message'
import Connection from './components/Connection/Connection'
import Discover from './components/Discover/Discover'
import Profile from './components/Profile/Profile'
import CreatePost from './components/CreatePost/CreatePost'

const App = () => {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/message' element={<Message/>}/>
    <Route path='/connection' element={<Connection/>}/>
    <Route path='/discover' element={<Discover/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/createpost'element={<CreatePost/>} />
   </Routes>
  )
}

export default App