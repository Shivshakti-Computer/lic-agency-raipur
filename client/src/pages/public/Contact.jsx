import PageHeader from "../../components/common/PageHeader";

const Contact = () => {
  return (
    <>
      {/* Page Header */}
      <PageHeader
        title="संपर्क करें"
        subtitle="सही सलाह, सुरक्षित भविष्य"
      />

      {/* Contact Info */}
      <section className="section-padding">
        <div className="container">
          <div className="row text-center">

            <div className="col-md-4 mb-4">
              <div className="p-4 bg-light rounded shadow-sm h-100">
                <h5 className="fw-bold">📍 कार्यालय</h5>
                <p className="text-muted mb-0">
                  Office Address, City, State
                </p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="p-4 bg-light rounded shadow-sm h-100">
                <h5 className="fw-bold">📞 फ़ोन</h5>
                <p className="text-muted mb-0">
                  +91 99999 99999
                </p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="p-4 bg-light rounded shadow-sm h-100">
                <h5 className="fw-bold">✉️ ईमेल</h5>
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
            निःशुल्क परामर्श हेतु विवरण भरें
          </h2>

          <div className="row justify-content-center">
            <div className="col-md-8">

              <form className="p-4 bg-white rounded shadow-sm">

                <div className="mb-3">
                  <label className="form-label">पूरा नाम</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="अपना नाम दर्ज करें"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">जन्म तिथि</label>
                  <input
                    type="date"
                    className="form-control"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">मोबाइल नंबर</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="10 अंकों का मोबाइल नंबर"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">ईमेल (वैकल्पिक)</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="example@email.com"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">रुचि का विषय</label>
                  <select className="form-select">
                    <option>जीवन बीमा</option>
                    <option>बाल भविष्य योजना</option>
                    <option>पेंशन योजना</option>
                    <option>टर्म इंश्योरेंस</option>
                    <option>LIC सलाहकार बनना</option>
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
                    मैं सहमति देता/देती हूँ कि मेरे द्वारा प्रदान की गई
                    जानकारी के आधार पर Niveshan की टीम मुझसे
                    संपर्क कर सकती है।
                  </label>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  विवरण सबमिट करें
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
            आपकी जानकारी पूर्णतः सुरक्षित रखी जाएगी
            और केवल परामर्श उद्देश्य के लिए उपयोग की जाएगी।
          </p>
        </div>
      </section>
    </>
  );
};

export default Contact;
