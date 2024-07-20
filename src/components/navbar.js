import './navbar.css';

function navbar() {
        
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light px-4">
                <div className="container-fluid" >

                    <a href="https://catamountlabs.com" className="navbar-brand"><img className='logo' src="./Cata-Mountlabs-Logo.png" alt="Catamount Labs Logo"/></a>
                
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            
                            <li className="nav-item"><a className="nav-link active" href="https://catamountlabs.com/testimonials.php"><b>Testimonials</b></a></li>
                            <li className="nav-item"><a className="nav-link active" href="https://catamountlabs.com/gmat-gre-courses.php">GMAT / GRE Courses</a></li>
                            <li className="nav-item"><a className="nav-link active" href="https://catamountlabs.com/contact.php">Get in Touch</a></li>
                        </ul>
                    </div>


                    <div className='greenbutton'>
                        <div className="d-lg-flex align-items-center">
                            
                                <a className="btn rounded-pill me-lg-2 d-none d-lg-inline-block" href="https://www.catamountlabs.com/our-scores-speak.php">Our Scores Speak</a>
                                <a className="btn rounded-pill d-none d-lg-inline-block" href="https://cal.com/catamount-labs" target="_blank">Get a Free Consultation</a>
                        </div>
                    </div>

                </div>
            </nav>

            <div className="breadcrumb-area bg-cover" style={{ backgroundImage: "url('./9.png')" }}>
                <div className="container">
                    <div className="breadcrumb-inner text-center">
                        <h2 className="page-title"><span style={{ color: "#6bb011" }}>AI</span> College Recommender</h2>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default navbar;
