import why1 from "../../assets/images/why-1.jpg";
import why2 from "../../assets/images/why-2.jpg";
import why3 from "../../assets/images/why-3.jpg";
import { useLanguage } from "../../context/LanguageContext";

/* ================= LOCAL TRANSLATION OBJECT ================= */
const whyText = {
    hi: {
        heading: "Pragati क्यों?",
        description: `जब बात आपके और आपके परिवार के भविष्य की हो,
    तो सही सलाह और भरोसेमंद मार्गदर्शन सबसे ज़रूरी होता है।
    Pragati, LIC के साथ मिलकर आपको देता है
    सुरक्षित, पारदर्शी और दीर्घकालिक समाधान।`,
        cards: [
            {
                title: "व्यक्तिगत वित्तीय सलाह",
                desc: "आपकी उम्र, आय और ज़रूरत के अनुसार सही LIC योजना का चयन।",
            },
            {
                title: "ईमानदार और पारदर्शी मार्गदर्शन",
                desc: "बिना किसी भ्रम के, स्पष्ट जानकारी और सही निर्णय में सहायता।",
            },
            {
                title: "जीवनभर का भरोसेमंद साथ",
                desc: "पॉलिसी लेने से लेकर दावा निपटान तक निरंतर सहयोग।",
            },
        ],
        captions: [
            "सही सलाह, सही योजना",
            "भरोसेमंद और अनुभवी मार्गदर्शन",
            "परिवार के सुरक्षित भविष्य की योजना",
        ],
    },

    en: {
        heading: "Why Pragati?",
        description: `When it comes to your family’s future,
    the right advice and trusted guidance matter the most.
    With LIC, Pragati provides secure, transparent,
    and long-term financial solutions.`,
        cards: [
            {
                title: "Personalized Financial Advice",
                desc: "Right LIC plan based on your age, income and needs.",
            },
            {
                title: "Honest & Transparent Guidance",
                desc: "Clear information with no confusion or hidden terms.",
            },
            {
                title: "Lifelong Trusted Support",
                desc: "Continuous assistance from policy purchase to claim settlement.",
            },
        ],
        captions: [
            "Right advice, right plan",
            "Trusted and experienced guidance",
            "Planning a secure family future",
        ],
    },
};

const WhyNiveshan = () => {
    const { lang } = useLanguage();
    const t = whyText[lang];

    return (
        <section className="section-padding bg-light">
            <div className="container">

                {/* Heading */}
                <h2 className="text-center fw-bold mb-3">
                    {t.heading}
                </h2>

                <p className="text-center fs-5 text-muted mb-5">
                    {t.description}
                </p>

                <div className="row align-items-center">

                    {/* LEFT : Trust Points */}
                    <div className="col-md-6">
                        {t.cards.map((item, index) => (
                            <div
                                key={index}
                                className="mb-4 p-3 bg-white rounded shadow-sm"
                            >
                                <h5 className="fw-bold mb-1">✔ {item.title}</h5>
                                <p className="mb-0 text-muted">{item.desc}</p>
                            </div>
                        ))}
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

                                {[why1, why2, why3].map((img, index) => (
                                    <div
                                        key={index}
                                        className={`carousel-item ${index === 0 ? "active" : ""}`}
                                    >
                                        <img
                                            src={img}
                                            className="d-block w-100"
                                            alt="LIC Advisory Services"
                                        />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h6 className="fw-bold">
                                                {t.captions[index]}
                                            </h6>
                                        </div>
                                    </div>
                                ))}

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
