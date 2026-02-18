import hero1 from "../../assets/images/hero-image1.jpg";
import hero2 from "../../assets/images/hero-image2.jpg";
import hero3 from "../../assets/images/hero-image3.jpg";
import { useLanguage } from "../../context/LanguageContext";

/* ================= LOCAL TRANSLATION OBJECT ================= */
const heroText = {
    hi: {
        title: "भविष्य की सुरक्षा,",
        highlight: "आज का भरोसा",
        tagline: "Bharosa LIC ka, Saath Pragati ka",
        subtitle: "आपके और आपके परिवार के सुरक्षित भविष्य के लिए",
        cta: "निःशुल्क परामर्श लें",
    },
    en: {
        title: "Secure Tomorrow,",
        highlight: "Trust Today",
        tagline: "Trust of LIC, Support of Pragati",
        subtitle: "For a safe and secure future of you and your family",
        cta: "Get Free Consultation",
    },
};

const Hero = () => {
    const { lang } = useLanguage();
    const t = heroText[lang];

    return (
        <section className="section-padding bg-light">
            <div className="container">
                <div className="row align-items-center">

                    {/* Left Content */}
                    <div className="col-md-6">
                        <h1 className="fw-bold">
                            {t.title}
                            <br />
                            <span className="text-primary">{t.highlight}</span>
                        </h1>

                        <p className="mt-3">
                            <strong>{t.tagline}</strong>
                            <br />
                            {t.subtitle}
                        </p>

                        <button className="btn btn-primary mt-3">
                            {t.cta}
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

                                {[hero1, hero2, hero3].map((img, index) => (
                                    <div
                                        key={index}
                                        className={`carousel-item ${index === 0 ? "active" : ""}`}
                                    >
                                        <img
                                            src={img}
                                            className="d-block w-100 img-fluid"
                                            alt="LIC Insurance Services"
                                        />
                                    </div>
                                ))}

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
