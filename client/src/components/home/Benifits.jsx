import lic1 from "../../assets/images/lic-office.jpg";
import lic2 from "../../assets/images/lic-family.jpg";
// import lic3 from "../assets/images/lic-family.jpg";

const Benefits = () => {
    return (
        <section className="section-padding bg-light">
            <div className="container">

                <h2 className="text-center mb-4 fw-bold">
                    LIC क्यों?
                </h2>

                <div className="row align-items-center">

                    {/* Left Content */}
                    <div className="col-md-6">
                        <ul className="fs-5">
                            <li>भारत की सबसे भरोसेमंद जीवन बीमा संस्था</li>
                            <li>सरकारी उपक्रम</li>
                            <li>गारंटीड और सुरक्षित योजनाएं</li>
                            <li>पूरे भारत में सेवाएं</li>
                            <li>दावा निपटान में मजबूत रिकॉर्ड</li>
                        </ul>
                    </div>

                    {/* Right Carousel */}
                    <div className="col-md-6">
                        <div
                            id="benefitsCarousel"
                            className="carousel slide carousel-fade"
                            data-bs-ride="carousel"
                            data-bs-interval="4000"
                        >
                            <div className="carousel-inner rounded">

                                <div className="carousel-item active">
                                    <img
                                        src={lic1}
                                        className="d-block w-100 img-fluid"
                                        alt="LIC Office"
                                    />
                                </div>

                                <div className="carousel-item">
                                    <img
                                        src={lic2}
                                        className="d-block w-100 img-fluid"
                                        alt="LIC Branch Network"
                                    />
                                </div>

                                {/* <div className="carousel-item">
                                    <img
                                        src={lic3}
                                        className="d-block w-100 img-fluid"
                                        alt="LIC Family Protection"
                                    />
                                </div> */}

                            </div>

                            {/* Controls */}
                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#benefitsCarousel"
                                data-bs-slide="prev"
                            >
                                <span className="carousel-control-prev-icon"></span>
                            </button>

                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#benefitsCarousel"
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

export default Benefits;
