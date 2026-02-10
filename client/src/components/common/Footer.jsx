import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer bg-light border-top mt-5">
            <div className="container py-5">

                <div className="row gy-4">

                    {/* ================= BRAND ================= */}
                    <div className="col-lg-4 col-md-6">
                        <div className="d-flex align-items-center mb-3">
                            <img
                                src="/logo.jpeg"
                                alt="Niveshan LIC Agency"
                                height="44"
                                className="me-2"
                            />
                            <div>
                                <h5 className="fw-bold mb-0">Niveshan LIC Agency</h5>
                                <small className="text-muted">
                                    Bharosa LIC ka, Saath Niveshan ka
                                </small>
                            </div>
                        </div>

                        <p className="text-muted small">
                            एक अनुभवी LIC एजेंसी, जो आपके और आपके परिवार के
                            भविष्य को सुरक्षित बनाने में आपकी सहायता करती है।
                        </p>
                    </div>

                    {/* ================= QUICK LINKS ================= */}
                    <div className="col-lg-2 col-md-6">
                        <h6 className="fw-bold mb-3">Quick Links</h6>
                        <ul className="list-unstyled footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/plans">LIC Plans</Link></li>
                            <li><Link to="/advisor">Advisor</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* ================= CONTACT ================= */}
                    <div className="col-lg-3 col-md-6">
                        <h6 className="fw-bold mb-3">Contact Information</h6>

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
                            info@niveshan.in
                        </p>

                        <div className="d-flex gap-3 mt-3">
                            <a href="#" className="footer-social"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="footer-social"><i className="bi bi-instagram"></i></a>
                            <a href="#" className="footer-social"><i className="bi bi-whatsapp"></i></a>
                        </div>
                    </div>

                    {/* ================= DISCLAIMER ================= */}
                    <div className="col-lg-3 col-md-6">
                        <h6 className="fw-bold mb-3">Important Disclaimer</h6>
                        <p className="text-muted small">
                            यह वेबसाइट एक अधिकृत LIC एजेंट द्वारा संचालित है।
                            यह Life Insurance Corporation of India की
                            आधिकारिक वेबसाइट नहीं है।
                            LIC का नाम और लोगो उनके संबंधित स्वामित्व में है।
                        </p>
                    </div>

                </div>

                <hr className="my-4" />

                {/* ================= BOTTOM BAR ================= */}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-muted small">
                    <div>
                        © {new Date().getFullYear()} Niveshan LIC Agency. All Rights Reserved.
                    </div>
                    <div className="mt-2 mt-md-0">
                        Designed with trust & transparency
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
