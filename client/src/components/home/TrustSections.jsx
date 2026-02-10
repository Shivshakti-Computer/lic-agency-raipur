import { useLanguage } from "../../context/LanguageContext";

/* ================= LOCAL TRANSLATION OBJECT ================= */
const trustText = {
    hi: [
        "LIC द्वारा मान्यता प्राप्त",
        "अनुभवी सलाहकार",
        "सुरक्षित निवेश",
        "पारदर्शी सेवाएं",
    ],
    en: [
        "LIC Authorized Agent",
        "Experienced Advisors",
        "Secure Investment",
        "Transparent Services",
    ],
};

const TrustSection = () => {
    const { lang } = useLanguage();
    const items = trustText[lang];

    return (
        <section className="py-4 bg-white border-top border-bottom">
            <div className="container">
                <div className="row text-center">

                    {items.map((item, index) => (
                        <div key={index} className="col-md-3 fw-semibold">
                            ✔ {item}
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default TrustSection;
