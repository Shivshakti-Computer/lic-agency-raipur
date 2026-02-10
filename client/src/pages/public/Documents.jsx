import PageHeader from "../../components/common/PageHeader";

const Documents = () => {
    return (
        <>
            {/* Page Header */}
            <PageHeader
                title="आवश्यक दस्तावेज़ जमा करें"
                subtitle="LIC पॉलिसी प्रक्रिया के लिए"
            />

            {/* Instructions */}
            <section className="section-padding">
                <div className="container">
                    <p className="fs-5 text-muted text-center">
                        LIC पॉलिसी प्रक्रिया को आगे बढ़ाने के लिए
                        कृपया नीचे दिए गए आवश्यक दस्तावेज़
                        सही और स्पष्ट रूप में अपलोड करें।
                        यह जानकारी केवल आधिकारिक उद्देश्य
                        के लिए उपयोग की जाएगी।
                    </p>
                </div>
            </section>

            {/* Required Documents */}
            <section className="section-padding bg-light">
                <div className="container">

                    <h2 className="text-center fw-bold mb-4">
                        आवश्यक दस्तावेज़
                    </h2>

                    <div className="row justify-content-center">
                        <div className="col-md-8">

                            <ul className="fs-5">
                                <li className="mb-2">पहचान प्रमाण (आधार / PAN)</li>
                                <li className="mb-2">पते का प्रमाण</li>
                                <li className="mb-2">जन्म तिथि प्रमाण</li>
                                <li className="mb-2">पासपोर्ट साइज फोटो</li>
                                <li className="mb-2">आय प्रमाण (यदि आवश्यक हो)</li>
                                <li>बैंक विवरण (कैंसिल चेक / पासबुक)</li>
                            </ul>

                        </div>
                    </div>

                </div>
            </section>

            {/* Upload Form */}
            <section className="section-padding">
                <div className="container">

                    <h2 className="text-center fw-bold mb-4">
                        दस्तावेज़ अपलोड फ़ॉर्म
                    </h2>

                    <div className="row justify-content-center">
                        <div className="col-md-8">

                            <form className="p-4 bg-white rounded shadow-sm">

                                <div className="mb-3">
                                    <label className="form-label">पूरा नाम</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">मोबाइल नंबर</label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">आधार / PAN अपलोड करें</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        accept=".jpg,.jpeg,.png,.pdf"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">पता प्रमाण</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        accept=".jpg,.jpeg,.png,.pdf"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">फोटो</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        accept=".jpg,.jpeg,.png"
                                    />
                                </div>

                                {/* Consent */}
                                <div className="form-check mb-3">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        required
                                    />
                                    <label className="form-check-label text-muted">
                                        मैं यह पुष्टि करता/करती हूँ कि
                                        मेरे द्वारा प्रदान किए गए दस्तावेज़
                                        सही हैं और इन्हें LIC पॉलिसी
                                        प्रक्रिया के लिए उपयोग किया जा सकता है।
                                    </label>
                                </div>

                                <button type="submit" className="btn btn-primary w-100">
                                    दस्तावेज़ सबमिट करें
                                </button>

                            </form>

                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Note */}
            <section className="section-padding text-center">
                <div className="container">
                    <p className="fs-5 fw-semibold">
                        आपके दस्तावेज़ पूर्णतः सुरक्षित रखे जाएंगे
                        और केवल Niveshan एवं LIC प्रक्रिया हेतु
                        उपयोग में लाए जाएंगे।
                    </p>
                </div>
            </section>
        </>
    );
};

export default Documents;
