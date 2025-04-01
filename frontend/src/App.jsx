import Header from './components/Header'
import LeftSidebar from './components/LeftSidebar'
import HeroSection from './components/HeroSection'


function App() {

  return (
    <>
    <Header />
    <div className="d-flex">
      {/* Left Sidebar */}
      <LeftSidebar />
      
      {/* Hero Section */}
      <HeroSection />
    </div>
  </>
  )
}

export default App
