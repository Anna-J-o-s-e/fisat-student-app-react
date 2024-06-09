import React from 'react'
import NavBar from './NavBar'

const HomePage = () => {
    return (
        <div>

            <NavBar />
            <br />
            <br />
            <center>
                <h1>FEDERAL INSTITUTE OF SCIENCE AND TECHNOLOGY (FISAT)®</h1><br />
                <h5>HORMIS NAGAR, MOOKKANNOOR P O, ANGAMALY, ERNAKULAM DISTRICT. KERALA, INDIA, PIN - 683 577. PH: 0484 - 2725272.</h5>

            </center>
            <br />
            <div className="container">

                <div className="row">

                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">




                        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="https://fbs.ac.in/wp-content/uploads/2015/02/conference.jpg" height="550px" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://careermudhra.com/wp-content/uploads/federal-institute-of-science-and-technology-fisat-ernakulam-jpg.webp" height="550px" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://fisat.ac.in/wp-content/uploads/2022/06/mca1-scaled-e1658138621201.jpeg" height="550px" className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomePage