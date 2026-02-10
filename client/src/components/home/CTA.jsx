import ctaImage from "../../assets/images/cta-family.jpg";
import { useLanguage } from "../../context/LanguageContext";

/* ================= LOCAL TRANSLATION OBJECT ================= */
const ctaText = {
    hi: {
        heading: "आज ही अपने परिवार के सुरक्षित भविष्य की योजना बनाएं",
        subtitle:
            "सही सलाह आज लें, ताकि आने वाला कल निश्चिंत और सुरक्षित रहे।",
        consult: "निःशुल्क परामर्श लें",
        contact: "अभी संपर्क करें",
        points: [
            "अनुभवी LIC सलाहकार",
            "पारदर्शी मार्गदर्शन",
            "जीवनभर का भरोसा",
        ],
    },
    en: {
        heading: "Plan your family’s secure future today",
        subtitle:
            "Take the right advice today so that tomorrow remains worry-free and secure.",
        consult: "Get Free Consultation",
        contact: "Contact Now",
        points: [
            "Experienced LIC Advisors",
            "Transparent Guidance",
            "Lifetime Trust",
        ],
    },
};

const CTA = () => {
    const { lang } = useLanguage();
    const t = ctaText[lang];

    return (
        <section className="section-padding bg-primary text-white">
            <div className="container">

                <div className="row align-items-center">

                    {/* LEFT : Text & CTA */}
                    <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">

                        <h2 className="fw-bold mb-3">
                            {t.heading}
                        </h2>

                        <p className="fs-5 mb-4">
                            {t.subtitle}
                        </p>

                        <div className="d-flex gap-3 justify-content-center justify-content-md-start flex-wrap">
                            <button className="btn btn-light btn-lg fw-bold">
                                {t.consult}
                            </button>

                            <button className="btn btn-outline-light btn-lg">
                                {t.contact}
                            </button>
                        </div>

                        <p className="mt-4 small opacity-75">
                            {t.points.map((point, index) => (
                                <span key={index}>
                                    ✔ {point}
                                    {index < t.points.length - 1 && " | "}
                                </span>
                            ))}
                        </p>

                    </div>

                    {/* RIGHT : Image */}
                    <div className="col-md-6 text-center">
                        <img
                            src={ctaImage}
                            alt="Secure Family Future with LIC"
                            className="img-fluid rounded shadow"
                        />
                    </div>

                </div>

            </div>
        </section>
    );
};

export default CTA;
