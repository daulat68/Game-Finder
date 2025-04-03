import Header from './components/Header'
import LeftSidebar from './components/LeftSidebar'
import Bookmark from './components/Bookmark'
import { Outlet, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const isBookmarkPage = location.pathname === "/bookmarks"; 

  return (
    <>
     <Header />
    <div className="d-flex">
    {!isBookmarkPage && <LeftSidebar />}
    <div className="content flex-grow-1">
      <Outlet />
      </div>
    </div> 
  </>
  )
}

export default App
