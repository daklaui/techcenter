import React from 'react'
import Footer from './components_template/Footer'
import Header from './components_template/Header'
import MainContent from './components_template/MainContent'
import SideBar from './components_template/SideBar'

export default function App() {
  return (
    <div>
      <Header/>
      <SideBar/>
      <MainContent/>
      <Footer/>
    </div>
  )
}
