import Header from './components/Header'
import LeftSidebar from './components/LeftSidebar'
import { Outlet, useLocation } from "react-router-dom";

function App() {
  const {pathname} = useLocation();
  const hideSidebar = pathname.startsWith("/game/") || pathname === "/bookmarks"; 

  return (
    <>
     <Header />
     
      <div className="d-flex">
        {!hideSidebar && <LeftSidebar />}
        <div className="content flex-grow-1">
        <Outlet />
        </div>
      </div> 
  </>
  )
}

export default App
