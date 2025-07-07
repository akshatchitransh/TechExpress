import { Route } from 'react-router-dom'
import React from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
import SignInForm from './auth/forms/SignInForm'
import SignUpForm from './auth/forms/SignUpForm'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import NewsArticle from './pages/NewsArticle'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signin' element={<SignInForm />} />
        <Route path='/signup' element={<SignUpForm />} />
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/about' element={<About />} />
        <Route path='/news-articles' element={<NewsArticle />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
