import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

/* ================= LOCAL TRANSLATION OBJECT ================= */
const footerText = {
    hi: {
        // brandTagline: "LIC का भरोसा, निवेशन का साथ",
        brandTagline: "LIC का भरोसा, Pragati का साथ",
        brandDesc:
            "एक अनुभवी LIC एजेंसी, जो आपके और आपके परिवार के भविष्य को सुरक्षित बनाने में आपकी सहायता करती है।",

        quickLinks: "त्वरित लिंक",
        links: {
            home: "होम",
            about: "हमारे बारे में",
            plans: "LIC योजनाएं",
            advisor: "सलाहकार",
            contact: "संपर्क करें",
        },

        contactTitle: "संपर्क जानकारी",

        disclaimerTitle: "महत्वपूर्ण सूचना",
        disclaimerText:
            "यह वेबसाइट एक अधिकृत LIC एजेंट द्वारा संचालित है। यह Life Insurance Corporation of India की आधिकारिक वेबसाइट नहीं है। LIC का नाम और लोगो उनके संबंधित स्वामित्व में है।",

        bottomNote: "विश्वास और पारदर्शिता के साथ डिज़ाइन किया गया",
    },

    en: {
        brandTagline: "Trust of LIC, Support of Pragati",
        brandDesc:
            "An experienced LIC agency helping you and your family secure a safe and financially stable future.",

        quickLinks: "Quick Links",
        links: {
            home: "Home",
            about: "About Us",
            plans: "LIC Plans",
            advisor: "Advisor",
            contact: "Contact",
        },

        contactTitle: "Contact Information",

        disclaimerTitle: "Important Disclaimer",
        disclaimerText:
            "This website is operated by an authorized LIC agent. It is not the official website of Life Insurance Corporation of India. The LIC name and logo are the property of their respective owners.",

        bottomNote: "Designed with trust & transparency",
    },
};

const Footer = () => {
    const { lang } = useLanguage();
    const t = footerText[lang];

    return (
        <footer className="footer bg-light border-top mt-5">
            <div className="container py-5">

                <div className="row gy-4">

                    {/* ================= BRAND ================= */}
                    <div className="col-lg-4 col-md-6">
                        <div className="d-flex align-items-center mb-3">
                            <img
                                src="/lic-logo.png"
                                alt="Pragati LIC Agency"
                                height="44"
                                className="me-2"
                            />
                            <div>
                                <h5 className="fw-bold mb-0">Pragati LIC Agency</h5>
                                <small className="text-muted">
                                    {t.brandTagline}
                                </small>
                            </div>
                        </div>

                        <p className="text-muted small">
                            {t.brandDesc}
                        </p>
                    </div>

                    {/* ================= QUICK LINKS ================= */}
                    <div className="col-lg-2 col-md-6">
                        <h6 className="fw-bold mb-3">{t.quickLinks}</h6>
                        <ul className="list-unstyled footer-links">
                            <li><Link to="/">{t.links.home}</Link></li>
                            <li><Link to="/about">{t.links.about}</Link></li>
                            <li><Link to="/plans">{t.links.plans}</Link></li>
                            <li><Link to="/advisor">{t.links.advisor}</Link></li>
                            <li><Link to="/contact">{t.links.contact}</Link></li>
                        </ul>
                    </div>

                    {/* ================= CONTACT ================= */}
                    <div className="col-lg-3 col-md-6">
                        <h6 className="fw-bold mb-3">{t.contactTitle}</h6>

                        <p className="small mb-2">
                            <i className="bi bi-geo-alt me-2"></i>
                            Office Address, Raipur, Chhattisgarh
                        </p>

                        <p className="small mb-2">
                            <i className="bi bi-telephone me-2"></i>
                            +91 99999 99999
                        </p>

                        <p className="small mb-2">
                            <i className="bi bi-envelope me-2"></i>
                            info@Pragati.in
                        </p>

                        <div className="d-flex gap-3 mt-3">
                            <a href="#" className="footer-social">
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href="#" className="footer-social">
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a href="#" className="footer-social">
                                <i className="bi bi-whatsapp"></i>
                            </a>
                        </div>
                    </div>

                    {/* ================= DISCLAIMER ================= */}
                    <div className="col-lg-3 col-md-6">
                        <h6 className="fw-bold mb-3">{t.disclaimerTitle}</h6>
                        <p className="text-muted small">
                            {t.disclaimerText}
                        </p>
                    </div>

                </div>

                <hr className="my-4" />

                {/* ================= BOTTOM BAR ================= */}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-muted small">
                    <div>
                        © {new Date().getFullYear()} Pragati LIC Agency. All Rights Reserved.
                    </div>
                    <div className="mt-2 mt-md-0">
                        {t.bottomNote}
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
