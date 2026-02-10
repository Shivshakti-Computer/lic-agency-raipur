import PageHeader from "../../components/common/PageHeader";

const Plans = () => {
  return (
    <>
      {/* Page Header */}
      <PageHeader
        title="LIC योजनाएं"
        subtitle="हर ज़रूरत के लिए सही सुरक्षा"
      />

      {/* Intro */}
      <section className="section-padding">
        <div className="container text-center">
          <p className="fs-5 text-muted">
            LIC भारत की सबसे भरोसेमंद जीवन बीमा संस्था है,
            जो विभिन्न आयु वर्ग और आवश्यकताओं के अनुसार
            अनेक योजनाएं प्रदान करती है।
            सही योजना का चयन आपके सुरक्षित भविष्य के लिए
            अत्यंत महत्वपूर्ण होता है।
          </p>
        </div>
      </section>

      {/* Plan Categories */}
      <section className="section-padding bg-light">
        <div className="container">

          <h2 className="text-center fw-bold mb-5">
            योजना श्रेणियाँ
          </h2>

          <div className="row">

            {/* Life Insurance */}
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="p-4 bg-white rounded shadow-sm h-100">
                <h5 className="fw-bold mb-2">जीवन बीमा योजना</h5>
                <p className="text-muted mb-0">
                  परिवार की वित्तीय सुरक्षा के लिए
                  जीवन बीमा आधारित योजनाएं।
                </p>
              </div>
            </div>

            {/* Child Plans */}
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="p-4 bg-white rounded shadow-sm h-100">
                <h5 className="fw-bold mb-2">बाल भविष्य योजना</h5>
                <p className="text-muted mb-0">
                  बच्चों की शिक्षा और भविष्य की
                  आवश्यकताओं को ध्यान में रखकर।
                </p>
              </div>
            </div>

            {/* Pension */}
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="p-4 bg-white rounded shadow-sm h-100">
                <h5 className="fw-bold mb-2">पेंशन योजना</h5>
                <p className="text-muted mb-0">
                  सेवानिवृत्ति के बाद
                  नियमित आय के लिए।
                </p>
              </div>
            </div>

            {/* Term Insurance */}
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="p-4 bg-white rounded shadow-sm h-100">
                <h5 className="fw-bold mb-2">टर्म इंश्योरेंस</h5>
                <p className="text-muted mb-0">
                  कम प्रीमियम में
                  उच्च जीवन सुरक्षा।
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Advisory Note (Very Important for LIC) */}
      <section className="section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">

              <div className="p-4 border rounded bg-white">
                <p className="fs-5 text-muted mb-0">
                  ⚠️ <strong>महत्वपूर्ण सूचना:</strong><br />
                  प्रत्येक व्यक्ति की आयु, आय और
                  पारिवारिक ज़रूरतें अलग होती हैं।
                  किसी भी योजना का चयन करने से पहले
                  व्यक्तिगत परामर्श आवश्यक है।
                  उपलब्ध योजनाओं की जानकारी समय-समय पर
                  LIC द्वारा परिवर्तित की जा सकती है।
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
            आपके लिए कौन-सी योजना उपयुक्त है?
          </h2>
          <p className="fs-5 text-muted mb-4">
            सही जानकारी और मार्गदर्शन के लिए
            हमारे LIC सलाहकार से संपर्क करें।
          </p>
          <a href="/contact" className="btn btn-primary">
            परामर्श के लिए संपर्क करें
          </a>
        </div>
      </section>
    </>
  );
};

export default Plans;
