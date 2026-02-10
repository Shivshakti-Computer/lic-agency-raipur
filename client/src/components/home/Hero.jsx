import hero1 from "../../assets/images/hero-image1.jpg"
import hero2 from "../../assets/images/hero-image2.jpg"
import hero3 from "../../assets/images/hero-image3.jpg"

const Hero = () => {
    return (
        <section className="section-padding bg-light">
            <div className="container">
                <div className="row align-items-center">

                    {/* Left Content */}
                    <div className="col-md-6">
                        <h1 className="fw-bold">
                            भविष्य की सुरक्षा,<br />
                            <span className="text-primary">आज का भरोसा</span>
                        </h1>

                        <p className="mt-3">
                            <strong>Bharosa LIC ka, Saath Niveshan ka</strong><br />
                            आपके और आपके परिवार के सुरक्षित भविष्य के लिए
                        </p>

                        <button className="btn btn-primary mt-3">
                            निःशुल्क परामर्श लें
                        </button>
                    </div>

                    {/* Right Carousel */}
                    <div className="col-md-6">
                        <div
                            id="heroCarousel"
                            className="carousel slide"
                            data-bs-ride="carousel"
                        >
                            <div className="carousel-inner rounded">

                                <div className="carousel-item active">
                                    <img
                                        src={hero1}
                                        className="d-block w-100 img-fluid"
                                        alt="LIC Family Security"
                                    />
                                </div>

                                <div className="carousel-item">
                                    <img
                                        src={hero2}
                                        className="d-block w-100 img-fluid"
                                        alt="Life Insurance Planning"
                                    />
                                </div>

                                <div className="carousel-item">
                                    <img
                                        src={hero3}
                                        className="d-block w-100 img-fluid"
                                        alt="Future Investment"
                                    />
                                </div>

                            </div>

                            {/* Controls */}
                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#heroCarousel"
                                data-bs-slide="prev"
                            >
                                <span className="carousel-control-prev-icon"></span>
                            </button>

                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#heroCarousel"
                                data-bs-slide="next"
                            >
                                <span className="carousel-control-next-icon"></span>
                            </button>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
