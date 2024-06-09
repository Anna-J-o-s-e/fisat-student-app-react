import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>

<nav className="navbar navbar-expand-lg bg-warning">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">FISAT</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        <Link className="nav-link active" aria-current="page" to="/about">About Us</Link>
        <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
        <Link className="nav-link" to="/add">Add Entry</Link>
        <Link className="nav-link" to="/search">Search Student</Link>
        <Link className="nav-link" to="/view">View Details</Link>
      </div>
    </div>
  </div>
</nav>

        </div>
    )
}

export default NavBar