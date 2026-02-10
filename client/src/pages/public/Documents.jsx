import PageHeader from "../../components/common/PageHeader";
import { useLanguage } from "../../context/LanguageContext";

/* ================= LOCAL TRANSLATION OBJECT ================= */
const documentsText = {
    hi: {
        header: {
            title: "आवश्यक दस्तावेज़ जमा करें",
            subtitle: "LIC पॉलिसी प्रक्रिया के लिए",
        },

        intro:
            "LIC पॉलिसी प्रक्रिया को आगे बढ़ाने के लिए कृपया नीचे दिए गए आवश्यक दस्तावेज़ सही और स्पष्ट रूप में अपलोड करें। यह जानकारी केवल आधिकारिक उद्देश्य के लिए उपयोग की जाएगी।",

        required: {
            heading: "आवश्यक दस्तावेज़",
            list: [
                "पहचान प्रमाण (आधार / PAN)",
                "पते का प्रमाण",
                "जन्म तिथि प्रमाण",
                "पासपोर्ट साइज फोटो",
                "आय प्रमाण (यदि आवश्यक हो)",
                "बैंक विवरण (कैंसिल चेक / पासबुक)",
            ],
        },

        form: {
            heading: "दस्तावेज़ अपलोड फ़ॉर्म",
            name: "पूरा नाम",
            mobile: "मोबाइल नंबर",
            idUpload: "आधार / PAN अपलोड करें",
            addressUpload: "पता प्रमाण",
            photo: "फोटो",
            consent:
                "मैं यह पुष्टि करता/करती हूँ कि मेरे द्वारा प्रदान किए गए दस्तावेज़ सही हैं और इन्हें LIC पॉलिसी प्रक्रिया के लिए उपयोग किया जा सकता है।",
            submit: "दस्तावेज़ सबमिट करें",
        },

        trustNote:
            "आपके दस्तावेज़ पूर्णतः सुरक्षित रखे जाएंगे और केवल Niveshan एवं LIC प्रक्रिया हेतु उपयोग में लाए जाएंगे।",
    },

    en: {
        header: {
            title: "Submit Required Documents",
            subtitle: "For LIC Policy Processing",
        },

        intro:
            "To proceed with the LIC policy process, please upload the required documents clearly and correctly as listed below. This information will be used strictly for official purposes only.",

        required: {
            heading: "Required Documents",
            list: [
                "Identity Proof (Aadhaar / PAN)",
                "Address Proof",
                "Date of Birth Proof",
                "Passport Size Photograph",
                "Income Proof (if required)",
                "Bank Details (Cancelled Cheque / Passbook)",
            ],
        },

        form: {
            heading: "Document Upload Form",
            name: "Full Name",
            mobile: "Mobile Number",
            idUpload: "Upload Aadhaar / PAN",
            addressUpload: "Address Proof",
            photo: "Photograph",
            consent:
                "I confirm that the documents provided by me are correct and may be used for LIC policy processing.",
            submit: "Submit Documents",
        },

        trustNote:
            "Your documents will be kept completely secure and will be used only for Niveshan and LIC processing purposes.",
    },
};

const Documents = () => {
    const { lang } = useLanguage();
    const t = documentsText[lang];

    return (
        <>
            {/* Page Header */}
            <PageHeader
                title={t.header.title}
                subtitle={t.header.subtitle}
            />

            {/* Instructions */}
            <section className="section-padding">
                <div className="container">
                    <p className="fs-5 text-muted text-center">
                        {t.intro}
                    </p>
                </div>
            </section>

            {/* Required Documents */}
            <section className="section-padding bg-light">
                <div className="container">

                    <h2 className="text-center fw-bold mb-4">
                        {t.required.heading}
                    </h2>

                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <ul className="fs-5">
                                {t.required.list.map((item, index) => (
                                    <li key={index} className="mb-2">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </section>

            {/* Upload Form */}
            <section className="section-padding">
                <div className="container">

                    <h2 className="text-center fw-bold mb-4">
                        {t.form.heading}
                    </h2>

                    <div className="row justify-content-center">
                        <div className="col-md-8">

                            <form className="p-4 bg-white rounded shadow-sm">

                                <div className="mb-3">
                                    <label className="form-label">{t.form.name}</label>
                                    <input type="text" className="form-control" required />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">{t.form.mobile}</label>
                                    <input type="tel" className="form-control" required />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">{t.form.idUpload}</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        accept=".jpg,.jpeg,.png,.pdf"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">{t.form.addressUpload}</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        accept=".jpg,.jpeg,.png,.pdf"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">{t.form.photo}</label>
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
                                        {t.form.consent}
                                    </label>
                                </div>

                                <button type="submit" className="btn btn-primary w-100">
                                    {t.form.submit}
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
                        {t.trustNote}
                    </p>
                </div>
            </section>
        </>
    );
};

export default Documents;
