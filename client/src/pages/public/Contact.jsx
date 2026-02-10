import PageHeader from "../../components/common/PageHeader";
import { useLanguage } from "../../context/LanguageContext";

/* ================= LOCAL TRANSLATION OBJECT ================= */
const contactText = {
  hi: {
    header: {
      title: "संपर्क करें",
      subtitle: "सही सलाह, सुरक्षित भविष्य",
    },

    info: {
      office: "कार्यालय",
      phone: "फ़ोन",
      email: "ईमेल",
    },

    form: {
      heading: "निःशुल्क परामर्श हेतु विवरण भरें",
      name: "पूरा नाम",
      namePlaceholder: "अपना नाम दर्ज करें",
      dob: "जन्म तिथि",
      mobile: "मोबाइल नंबर",
      mobilePlaceholder: "10 अंकों का मोबाइल नंबर",
      email: "ईमेल (वैकल्पिक)",
      emailPlaceholder: "example@email.com",
      interest: "रुचि का विषय",
      interests: [
        "जीवन बीमा",
        "बाल भविष्य योजना",
        "पेंशन योजना",
        "टर्म इंश्योरेंस",
        "LIC सलाहकार बनना",
      ],
      consent:
        "मैं सहमति देता/देती हूँ कि मेरे द्वारा प्रदान की गई जानकारी के आधार पर Niveshan की टीम मुझसे संपर्क कर सकती है।",
      submit: "विवरण सबमिट करें",
    },

    closing:
      "आपकी जानकारी पूर्णतः सुरक्षित रखी जाएगी और केवल परामर्श उद्देश्य के लिए उपयोग की जाएगी।",
  },

  en: {
    header: {
      title: "Contact Us",
      subtitle: "Right advice, secure future",
    },

    info: {
      office: "Office",
      phone: "Phone",
      email: "Email",
    },

    form: {
      heading: "Fill details for free consultation",
      name: "Full Name",
      namePlaceholder: "Enter your name",
      dob: "Date of Birth",
      mobile: "Mobile Number",
      mobilePlaceholder: "10-digit mobile number",
      email: "Email (optional)",
      emailPlaceholder: "example@email.com",
      interest: "Area of Interest",
      interests: [
        "Life Insurance",
        "Child Future Plan",
        "Pension Plan",
        "Term Insurance",
        "Become an LIC Advisor",
      ],
      consent:
        "I agree that the Niveshan team may contact me based on the information provided by me.",
      submit: "Submit Details",
    },

    closing:
      "Your information will be kept completely secure and used only for consultation purposes.",
  },
};

const Contact = () => {
  const { lang } = useLanguage();
  const t = contactText[lang];

  return (
    <>
      {/* Page Header */}
      <PageHeader
        title={t.header.title}
        subtitle={t.header.subtitle}
      />

      {/* Contact Info */}
      <section className="section-padding">
        <div className="container">
          <div className="row text-center">

            <div className="col-md-4 mb-4">
              <div className="p-4 bg-light rounded shadow-sm h-100">
                <h5 className="fw-bold">📍 {t.info.office}</h5>
                <p className="text-muted mb-0">
                  Office Address, City, State
                </p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="p-4 bg-light rounded shadow-sm h-100">
                <h5 className="fw-bold">📞 {t.info.phone}</h5>
                <p className="text-muted mb-0">
                  +91 99999 99999
                </p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="p-4 bg-light rounded shadow-sm h-100">
                <h5 className="fw-bold">✉️ {t.info.email}</h5>
                <p className="text-muted mb-0">
                  info@niveshan.in
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section className="section-padding bg-light">
        <div className="container">

          <h2 className="text-center fw-bold mb-4">
            {t.form.heading}
          </h2>

          <div className="row justify-content-center">
            <div className="col-md-8">

              <form className="p-4 bg-white rounded shadow-sm">

                <div className="mb-3">
                  <label className="form-label">{t.form.name}</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={t.form.namePlaceholder}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">{t.form.dob}</label>
                  <input
                    type="date"
                    className="form-control"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">{t.form.mobile}</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder={t.form.mobilePlaceholder}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">{t.form.email}</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder={t.form.emailPlaceholder}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">{t.form.interest}</label>
                  <select className="form-select">
                    {t.form.interests.map((item, index) => (
                      <option key={index}>{item}</option>
                    ))}
                  </select>
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

      {/* Closing Trust Note */}
      <section className="section-padding text-center">
        <div className="container">
          <p className="fs-5 fw-semibold">
            {t.closing}
          </p>
        </div>
      </section>
    </>
  );
};

export default Contact;
