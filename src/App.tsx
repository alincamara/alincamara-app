import React, {
  ReactElement,
  //  useEffect, useState
} from 'react'
import // useSelector,
// useDispatch
'react-redux'
import { Sidebar } from './components/Sidebar'
import { Home } from './components/Home'
import { About } from './components/About'
import { Services } from './components/Services'
import { Resume } from './components/Resume'
import { Portofolio } from './components/Portofolio'
import { Pricing } from './components/Pricing'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import './App.css'

const App = (): ReactElement => {
  // const counter = useSelector((state: any) => state?.counter)
  // const dispatch = useDispatch()

  return (
    <div className="app">
      <>
        <Sidebar />
        <main className="main">
          <Home />
          <About />
          <Services />
          <Resume />
          <Portofolio />
          <Pricing />
          <Testimonials />
          <Blog />
          <Contact />
        </main>
      </>
    </div>
  )
}

export default App
