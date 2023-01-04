import React from 'react'
import Navbar from './Navbar/Navbar'

function header() {
  return (
    <header>
      <Navbar />


      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>React-Bootstrap-Carousel</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default header