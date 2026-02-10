import PageHeader from "../../components/common/PageHeader";

const Advisor = () => {
  return (
    <>
      {/* Page Header */}
      <PageHeader
        title="LIC सलाहकार बनें"
        subtitle="एक सम्मानजनक और भरोसेमंद करियर"
      />

      {/* Intro */}
      <section className="section-padding">
        <div className="container text-center">
          <p className="fs-5 text-muted">
            LIC सलाहकार बनना केवल एक करियर विकल्प नहीं,
            बल्कि समाज को वित्तीय सुरक्षा प्रदान करने का
            एक महत्वपूर्ण दायित्व होता है।
            यह पेशा आपको लोगों के जीवन में
            सकारात्मक बदलाव लाने का अवसर देता है।
          </p>
        </div>
      </section>

      {/* Who Can Become Advisor */}
      <section className="section-padding bg-light">
        <div className="container">

          <h2 className="text-center fw-bold mb-5">
            कौन बन सकता है LIC सलाहकार?
          </h2>

          <div className="row justify-content-center">
            <div className="col-md-8">

              <ul className="fs-5">
                <li className="mb-2">
                  न्यूनतम 10वीं / 12वीं उत्तीर्ण
                </li>
                <li className="mb-2">
                  आयु 18 वर्ष या उससे अधिक
                </li>
                <li className="mb-2">
                  लोगों से संवाद करने की क्षमता
                </li>
                <li className="mb-2">
                  ईमानदारी और दीर्घकालिक सोच
                </li>
                <li>
                  सीखने और आगे बढ़ने की इच्छा
                </li>
              </ul>

            </div>
          </div>

        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container">

          <h2 className="text-center fw-bold mb-5">
            LIC सलाहकार बनने के लाभ
          </h2>

          <div className="row text-center">

            <div className="col-md-4 mb-4">
              <div className="p-4 bg-white rounded shadow-sm h-100">
                <h5 className="fw-bold">सम्मानजनक पहचान</h5>
                <p className="text-muted mb-0">
                  भारत की सबसे भरोसेमंद संस्था
                  से जुड़ने का गौरव।
                </p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="p-4 bg-white rounded shadow-sm h-100">
                <h5 className="fw-bold">लचीला कार्य समय</h5>
                <p className="text-muted mb-0">
                  अपनी सुविधा अनुसार
                  कार्य करने की स्वतंत्रता।
                </p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="p-4 bg-white rounded shadow-sm h-100">
                <h5 className="fw-bold">दीर्घकालिक आय</h5>
                <p className="text-muted mb-0">
                  मेहनत और ईमानदारी से
                  स्थिर और निरंतर आय।
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-light text-center">
        <div className="container">

          <h2 className="fw-bold mb-3">
            क्या आप LIC सलाहकार बनना चाहते हैं?
          </h2>

          <p className="fs-5 text-muted mb-4">
            अधिक जानकारी और मार्गदर्शन के लिए
            हमसे संपर्क करें।
          </p>

          <a href="/contact" className="btn btn-primary">
            संपर्क करें
          </a>

        </div>
      </section>
    </>
  );
};

export default Advisor;
