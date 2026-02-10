import lic1 from "../../assets/images/lic-office.jpg";
import lic2 from "../../assets/images/lic-family.jpg";
import { useLanguage } from "../../context/LanguageContext";

/* ================= LOCAL TRANSLATION OBJECT ================= */
const benefitsText = {
    hi: {
        heading: "LIC क्यों?",
        points: [
            "भारत की सबसे भरोसेमंद जीवन बीमा संस्था",
            "सरकारी उपक्रम",
            "गारंटीड और सुरक्षित योजनाएं",
            "पूरे भारत में सेवाएं",
            "दावा निपटान में मजबूत रिकॉर्ड",
        ],
    },
    en: {
        heading: "Why LIC?",
        points: [
            "India’s most trusted life insurance company",
            "Government-owned enterprise",
            "Guaranteed and secure plans",
            "Services available across India",
            "Strong claim settlement record",
        ],
    },
};

const Benefits = () => {
    const { lang } = useLanguage();
    const t = benefitsText[lang];

    return (
        <section className="section-padding bg-light">
            <div className="container">

                <h2 className="text-center mb-4 fw-bold">
                    {t.heading}
                </h2>

                <div className="row align-items-center">

                    {/* Left Content */}
                    <div className="col-md-6">
                        <ul className="fs-5">
                            {t.points.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
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

                                {[lic1, lic2].map((img, index) => (
                                    <div
                                        key={index}
                                        className={`carousel-item ${index === 0 ? "active" : ""}`}
                                    >
                                        <img
                                            src={img}
                                            className="d-block w-100 img-fluid"
                                            alt="LIC Benefits"
                                        />
                                    </div>
                                ))}

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
