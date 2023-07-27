import React from 'react'
import {Outlet} from 'react-router-dom'
import PageButtons from './pageButtons/PageButtons'

const Layout = () => {
  return (
    <div className="wrapper">
      <main className="main">
        <div className="main_container container">
          <Outlet />
          <PageButtons />
        </div>
      </main>
      <footer className="footer">
        <div className="container">
          &copy; Posts 2023
        </div>
      </footer>
    </div>
  )
}

export default Layout
