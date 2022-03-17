import React from 'react'
import Navbar from './Navbar'
import Search from './Search'

type Props = {}

const Header = (props: Props) => {
  return (
   <div className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand text-center " href="#">
                <img className='m-2' width="130" src="./src/image/logo-keedo.png" alt=""></img>
              </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <Navbar />
                
                <Search />
                </div>
            </div>
        </nav>
   </div>

  )
}

export default Header