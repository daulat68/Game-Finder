import Header from './components/Header'
import LeftSidebar from './components/LeftSidebar'
import HeroSection from './components/HeroSection'
import Bookmark from './components/Bookmark'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

function App() {
  return (
    <>
     <Header />
    <div className="d-flex">
      <LeftSidebar />
      <HeroSection />
    </div> 
    <Bookmark/>
  </>
  )
}

export default App
