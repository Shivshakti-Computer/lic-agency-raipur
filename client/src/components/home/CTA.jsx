import ctaImage from "../../assets/images/cta-family.jpg";

const CTA = () => {
    return (
        <section className="section-padding bg-primary text-white">
            <div className="container">

                <div className="row align-items-center">

                    {/* LEFT : Text & CTA */}
                    <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">

                        <h2 className="fw-bold mb-3">
                            आज ही अपने परिवार के सुरक्षित भविष्य की योजना बनाएं
                        </h2>

                        <p className="fs-5 mb-4">
                            सही सलाह आज लें, ताकि आने वाला कल
                            निश्चिंत और सुरक्षित रहे।
                        </p>

                        <div className="d-flex gap-3 justify-content-center justify-content-md-start flex-wrap">
                            <button className="btn btn-light btn-lg fw-bold">
                                निःशुल्क परामर्श लें
                            </button>

                            <button className="btn btn-outline-light btn-lg">
                                अभी संपर्क करें
                            </button>
                        </div>

                        <p className="mt-4 small opacity-75">
                            ✔ अनुभवी LIC सलाहकार &nbsp; | &nbsp;
                            ✔ पारदर्शी मार्गदर्शन &nbsp; | &nbsp;
                            ✔ जीवनभर का भरोसा
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
