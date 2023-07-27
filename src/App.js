import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Posts from './components/Posts'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Posts />} />
      </Route>
    </Routes>
  )
}

export default App
