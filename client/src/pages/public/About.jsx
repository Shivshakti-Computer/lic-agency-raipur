import PageHeader from "../../components/common/PageHeader";

import aboutOffice from "../../assets/images/about-office.jpg";
import aboutVideo from "../../assets/videos/about-video.mp4";

const About = () => {
  return (
    <>
      {/* Page Header */}
      <PageHeader
        title="हमारे बारे में"
        subtitle="Bharosa LIC ka, Saath Niveshan ka"
      />

      {/* Who We Are */}
      <section className="section-padding">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-md-6">
              <h2 className="fw-bold mb-3">Niveshan कौन है?</h2>

              <p className="fs-5 text-muted">
                Niveshan एक अनुभवी और भरोसेमंद LIC एजेंसी है,
                जो परिवारों को उनके भविष्य की सुरक्षा के लिए
                सही जीवन बीमा और निवेश योजनाएँ चुनने में
                मार्गदर्शन प्रदान करती है।
              </p>

              <p className="fs-5 text-muted">
                हम मानते हैं कि बीमा केवल एक पॉलिसी नहीं,
                बल्कि आपके सपनों, ज़िम्मेदारियों और
                परिवार की सुरक्षा का वादा होता है।
              </p>
            </div>

            <div className="col-md-6 text-center">
              <img
                src={aboutOffice}
                alt="Niveshan LIC Office"
                className="img-fluid rounded shadow"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Branding Video */}
      <section className="section-padding bg-light">
        <div className="container text-center">

          <h2 className="fw-bold mb-4">
            हमारा दृष्टिकोण
          </h2>

          <p className="fs-5 text-muted mb-4">
            हर परिवार को सही समय पर सही सलाह मिले —
            यही हमारा उद्देश्य है।
          </p>

          <video
            src={aboutVideo}
            autoPlay
            muted
            loop
            playsInline
            className="w-75 rounded shadow"
          />
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container">

          <h2 className="text-center fw-bold mb-5">
            हमारे मूल मूल्य
          </h2>

          <div className="row text-center">

            <div className="col-md-4 mb-4">
              <div className="p-4 bg-white rounded shadow-sm h-100">
                <h5 className="fw-bold">ईमानदारी</h5>
                <p className="text-muted mb-0">
                  हर सलाह में पूर्ण पारदर्शिता
                  और सच्चाई का पालन।
                </p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="p-4 bg-white rounded shadow-sm h-100">
                <h5 className="fw-bold">विश्वसनीयता</h5>
                <p className="text-muted mb-0">
                  दीर्घकालिक संबंध और
                  जीवनभर का भरोसेमंद साथ।
                </p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="p-4 bg-white rounded shadow-sm h-100">
                <h5 className="fw-bold">ग्राहक प्राथमिकता</h5>
                <p className="text-muted mb-0">
                  हर निर्णय ग्राहक के
                  हित और आवश्यकता को ध्यान में रखकर।
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-light">
        <div className="container">

          <h2 className="text-center fw-bold mb-4">
            Niveshan को क्यों चुनें?
          </h2>

          <div className="row justify-content-center">
            <div className="col-md-8">

              <ul className="fs-5">
                <li className="mb-2">
                  आपकी ज़रूरत के अनुसार व्यक्तिगत और ईमानदार सलाह
                </li>
                <li className="mb-2">
                  LIC की सभी योजनाओं की स्पष्ट और संपूर्ण जानकारी
                </li>
                <li className="mb-2">
                  पॉलिसी से लेकर दावा निपटान तक निरंतर सहयोग
                </li>
                <li>
                  सरल, पारदर्शी और भरोसेमंद प्रक्रिया
                </li>
              </ul>

            </div>
          </div>

        </div>
      </section>

      {/* Closing Statement */}
      <section className="section-padding text-center">
        <div className="container">

          <p className="fs-4 fw-semibold">
            Niveshan में हम मानते हैं कि
            आपका भरोसा ही हमारी सबसे बड़ी पहचान है।
          </p>

        </div>
      </section>
    </>
  );
};

export default About;
