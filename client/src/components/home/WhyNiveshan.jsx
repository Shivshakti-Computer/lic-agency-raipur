import why1 from "../../assets/images/why-1.jpg";
import why2 from "../../assets/images/why-2.jpg";
import why3 from "../../assets/images/why-3.jpg";

const WhyNiveshan = () => {
    return (
        <section className="section-padding bg-light">
            <div className="container">

                {/* Heading */}
                <h2 className="text-center fw-bold mb-3">
                    Niveshan क्यों?
                </h2>

                <p className="text-center fs-5 text-muted mb-5">
                    जब बात आपके और आपके परिवार के भविष्य की हो,
                    तो सही सलाह और भरोसेमंद मार्गदर्शन सबसे ज़रूरी होता है।
                    Niveshan, LIC के साथ मिलकर आपको देता है
                    सुरक्षित, पारदर्शी और दीर्घकालिक समाधान।
                </p>

                <div className="row align-items-center">

                    {/* LEFT : Trust Points */}
                    <div className="col-md-6">

                        <div className="mb-4 p-3 bg-white rounded shadow-sm">
                            <h5 className="fw-bold mb-1">✔ व्यक्तिगत वित्तीय सलाह</h5>
                            <p className="mb-0 text-muted">
                                आपकी उम्र, आय और ज़रूरत के अनुसार
                                सही LIC योजना का चयन।
                            </p>
                        </div>

                        <div className="mb-4 p-3 bg-white rounded shadow-sm">
                            <h5 className="fw-bold mb-1">✔ ईमानदार और पारदर्शी मार्गदर्शन</h5>
                            <p className="mb-0 text-muted">
                                बिना किसी भ्रम के, स्पष्ट जानकारी
                                और सही निर्णय में सहायता।
                            </p>
                        </div>

                        <div className="p-3 bg-white rounded shadow-sm">
                            <h5 className="fw-bold mb-1">✔ जीवनभर का भरोसेमंद साथ</h5>
                            <p className="mb-0 text-muted">
                                पॉलिसी लेने से लेकर
                                दावा निपटान तक निरंतर सहयोग।
                            </p>
                        </div>

                    </div>

                    {/* RIGHT : Emotional Carousel */}
                    <div className="col-md-6">
                        <div
                            id="whyCarousel"
                            className="carousel slide carousel-fade"
                            data-bs-ride="carousel"
                            data-bs-interval="3500"
                        >
                            <div className="carousel-inner rounded shadow">

                                <div className="carousel-item active">
                                    <img
                                        src={why1}
                                        className="d-block w-100"
                                        alt="Personal LIC Consultation"
                                    />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h6 className="fw-bold">सही सलाह, सही योजना</h6>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <img
                                        src={why2}
                                        className="d-block w-100"
                                        alt="Trusted LIC Advisor"
                                    />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h6 className="fw-bold">भरोसेमंद और अनुभवी मार्गदर्शन</h6>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <img
                                        src={why3}
                                        className="d-block w-100"
                                        alt="Secure Family Future"
                                    />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h6 className="fw-bold">परिवार के सुरक्षित भविष्य की योजना</h6>
                                    </div>
                                </div>

                            </div>

                            {/* Controls */}
                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#whyCarousel"
                                data-bs-slide="prev"
                            >
                                <span className="carousel-control-prev-icon"></span>
                            </button>

                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#whyCarousel"
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

export default WhyNiveshan;
