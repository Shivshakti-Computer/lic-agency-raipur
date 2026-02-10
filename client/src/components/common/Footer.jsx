const Footer = () => {
    return (
        <footer className="bg-light border-top mt-5">
            <div className="container py-4">

                <div className="row">

                    {/* Brand Info */}
                    <div className="col-md-4 mb-3">
                        <h5 className="fw-bold">Niveshan</h5>
                        <p className="mb-1">
                            Bharosa LIC ka, Saath Niveshan ka
                        </p>
                        <p className="small text-muted">
                            एक अनुभवी LIC एजेंसी, जो आपके और आपके परिवार
                            के भविष्य को सुरक्षित बनाने में आपकी सहायता करती है।
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="col-md-4 mb-3">
                        <h6 className="fw-bold">संपर्क करें</h6>
                        <p className="mb-1">📍 Office Address, City, State</p>
                        <p className="mb-1">📞 +91 99999 99999</p>
                        <p className="mb-1">✉️ info@niveshan.in</p>
                    </div>

                    {/* Legal */}
                    <div className="col-md-4 mb-3">
                        <h6 className="fw-bold">महत्वपूर्ण सूचना</h6>
                        <p className="small text-muted">
                            यह वेबसाइट एक अधिकृत LIC एजेंट द्वारा संचालित है।
                            यह LIC of India की आधिकारिक वेबसाइट नहीं है।
                            LIC का नाम और लोगो उनके संबंधित स्वामित्व में है।
                        </p>
                    </div>

                </div>

                <hr />

                <div className="text-center small text-muted">
                    © {new Date().getFullYear()} Niveshan. All Rights Reserved.
                </div>

            </div>
        </footer>
    );
};

export default Footer;
