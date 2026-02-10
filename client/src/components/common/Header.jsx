import { Link } from "react-router-dom";
import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import translations from "../../i18n/translations";


const NAV_LINKS = [
    { key: "home", path: "/" },
    { key: "about", path: "/about" },
    { key: "plans", path: "/plans" },
    { key: "advisor", path: "/advisor" },
    { key: "documents", path: "/documents" },
    { key: "contact", path: "/contact" },
];


const Header = () => {
    const [open, setOpen] = useState(false);

    const { lang, setLang } = useLanguage();
    const t = translations[lang];


    return (
        <header className="sticky-top">
            {/* ================= TOP BAR ================= */}
            <div className="bg-light border-bottom small d-none d-md-block">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center py-1">

                        <div className="d-flex gap-4 text-secondary">
                            <span><i className="bi bi-telephone me-1"></i> +91 99999 99999</span>
                            <span><i className="bi bi-envelope me-1"></i> info@niveshanlic.com</span>
                            <span><i className="bi bi-geo-alt me-1"></i> Raipur, CG</span>
                        </div>

                        <div className="d-flex align-items-center gap-3">
                            <i className="bi bi-facebook text-secondary"></i>
                            <i className="bi bi-instagram text-secondary"></i>
                            <select
                                className="form-select form-select-sm border-0 bg-light"
                                value={lang}
                                onChange={(e) => setLang(e.target.value)}
                            >
                                <option value="en">EN</option>
                                <option value="hi">HI</option>
                            </select>

                        </div>

                    </div>
                </div>
            </div>

            {/* ================= MAIN NAV ================= */}
            <div className="bg-white border-bottom p-2">
                <div className="container">
                    <div className="d-flex align-items-center justify-content-between py-2">

                        {/* Logo */}
                        <Link to="/" className="d-flex align-items-center text-decoration-none">
                            <img src="/logo.jpeg" alt="Niveshan LIC" height="48" className="me-2" />
                            <div>
                                <div className="fw-bold text-dark">Niveshan LIC Agency</div>
                                <div className="text-muted small">
                                    {t.tagline}
                                </div>

                            </div>
                        </Link>

                        <nav className="d-none d-md-flex gap-4">
                            {NAV_LINKS.map(({ key, path }) => (
                                <Link
                                    key={path}
                                    to={path}
                                    className="nav-link fw-semibold text-dark px-0"
                                >
                                    {t.nav[key]}
                                </Link>
                            ))}
                        </nav>



                        {/* Desktop CTA */}
                        <Link
                            to="/contact"
                            className="btn btn-primary btn-sm px-4 d-none d-md-inline"
                        >
                            Get Quote
                        </Link>

                        {/* Mobile Hamburger */}
                        <button
                            className="btn d-md-none"
                            onClick={() => setOpen(true)}
                        >
                            <i className="bi bi-list fs-2"></i>
                        </button>

                    </div>
                </div>
            </div>

            {/* ================= MOBILE MENU ================= */}
            <div className={`mobile-menu ${open ? "show" : ""}`}>
                <div className="mobile-menu-header">
                    <span className="fw-bold">{t.menu}</span>
                    <button className="btn" onClick={() => setOpen(false)}>
                        <i className="bi bi-x-lg"></i>
                    </button>
                </div>

                <div className="mobile-menu-body">

                    {/* Navigation */}
                    {NAV_LINKS.map(({ key, path }) => (
                        <Link
                            key={path}
                            to={path}
                            onClick={() => setOpen(false)}
                        >
                            {t.nav[key]}
                        </Link>
                    ))}


                    <hr />

                    {/* Contact CTAs */}
                    <a href="tel:+919999999999">
                        <i className="bi bi-telephone me-2"></i> Call Advisor
                    </a>

                    <a
                        href="https://wa.me/919999999999"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="bi bi-whatsapp me-2"></i> WhatsApp
                    </a>

                    <Link
                        to="/contact"
                        className="btn btn-primary mt-3 w-100"
                        onClick={() => setOpen(false)}
                    >
                        {t.getQuote}
                    </Link>

                </div>
            </div>

        </header>
    );
};

export default Header;
