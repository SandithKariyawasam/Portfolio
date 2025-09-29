import { Routes, Route, useLocation } from "react-router-dom";
import './assets/css/dashboard.css'

import Sidenavbar from '../component/sidenavbar'
import Navbar from '../component/navbar'

import Home from './pages/home'
import Account from './pages/account'
import Projects from './pages/projects'
import Blogs from './pages/blogs'
import Inbox from './pages/inbox'
import Insights from './pages/insights'
import Customize from './pages/customize'
import Live from './pages/live'

const Dashboard = () => {
  return (
    <>
      <div className="dbbody">

        <Sidenavbar />

        <div className="main-content">


          {/* header here */}
          <Navbar />

          {/* content here */}
          <Routes>
            <Route index element={<Home />} />  {/* renders at /dashboard */}
            <Route path="account" element={<Account />} />  {/* renders at /dashboard/account */}
            <Route path="projects" element={<Projects />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="inbox" element={<Inbox />} />
            <Route path="insights" element={<Insights />} />
            <Route path="customize" element={<Customize />} />
            <Route path="live" element={<Live />} />
          </Routes>


        </div>
      </div>
    </>
  )
}

export default Dashboard
