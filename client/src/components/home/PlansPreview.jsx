import { useLanguage } from "../../context/LanguageContext";

/* ================= LOCAL TRANSLATION OBJECT ================= */
const plansText = {
    hi: {
        heading: "लोकप्रिय योजनाएं",
        items: [
            "जीवन बीमा योजना",
            "बच्चों की शिक्षा योजना",
            "पेंशन योजना",
            "टर्म इंश्योरेंस",
        ],
        cta: "पूरी जानकारी के लिए संपर्क करें",
    },
    en: {
        heading: "Popular Plans",
        items: [
            "Life Insurance Plan",
            "Children Education Plan",
            "Pension Plan",
            "Term Insurance",
        ],
        cta: "Contact for complete details",
    },
};

const PlansPreview = () => {
    const { lang } = useLanguage();
    const t = plansText[lang];

    return (
        <section className="section-padding bg-white">
            <div className="container">

                <h2 className="text-center fw-bold mb-4">
                    {t.heading}
                </h2>

                <div className="row text-center">
                    {t.items.map((item, index) => (
                        <div key={index} className="col-md-3">
                            ✔ {item}
                        </div>
                    ))}
                </div>

                <div className="text-center mt-4">
                    <button className="btn btn-outline-primary">
                        {t.cta}
                    </button>
                </div>

            </div>
        </section>
    );
};

export default PlansPreview;
