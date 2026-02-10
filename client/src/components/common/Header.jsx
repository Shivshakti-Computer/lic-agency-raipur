import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-white border-bottom sticky-top">
            <div className="container">
                <div className="d-flex align-items-center justify-content-between py-2">

                    {/* Logo + Brand */}
                    <Link to="/" className="d-flex align-items-center text-decoration-none">
                        <img
                            src="/logo.jpeg"
                            alt="Niveshan LIC Agency"
                            height="48"
                            className="me-2"
                        />
                        <div>
                            <div className="fw-bold text-dark fs-5">Niveshan</div>
                            <div className="text-muted small">
                                Bharosa LIC ka, Saath Niveshan ka
                            </div>
                        </div>
                    </Link>

                    {/* Navigation */}
                    <nav className="d-none d-md-flex align-items-center gap-3">
                        <Link className="nav-link text-dark" to="/">Home</Link>
                        <Link className="nav-link text-dark" to="/about">About</Link>
                        <Link className="nav-link text-dark" to="/plans">Plans</Link>
                        <Link className="nav-link text-dark" to="/advisor">Advisor</Link>
                        <Link className="nav-link text-dark" to="/contact">Contact</Link>
                        <Link className="nav-link text-dark" to="/documents">Documents</Link>
                    </nav>

                    {/* Contact CTA */}
                    <div className="d-flex align-items-center gap-2">
                        <a href="tel:+919999999999" className="text-decoration-none fw-semibold">
                            📞 99999 99999
                        </a>
                        <Link to="/contact" className="btn btn-primary btn-sm">
                            Get Quote
                        </Link>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Header;
