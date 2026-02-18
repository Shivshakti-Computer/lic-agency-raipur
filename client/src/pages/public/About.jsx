import PageHeader from "../../components/common/PageHeader";
import { useLanguage } from "../../context/LanguageContext";

import aboutOffice from "../../assets/images/about-office.jpg";
import aboutVideo from "../../assets/videos/branding-video.mp4";

/* ================= LOCAL TRANSLATION OBJECT ================= */
const aboutText = {
  hi: {
    header: {
      title: "हमारे बारे में",
      // subtitle: "LIC का भरोसा, निवेशन का साथ",
      subtitle: "LIC का भरोसा, Pragati का साथ",
    },

    who: {
      // heading: "Pragati कौन है?",
      heading: "Pragati कौन है?",
      // para1:
      //   "Pragati एक अनुभवी और भरोसेमंद LIC एजेंसी है, जो परिवारों को उनके भविष्य की सुरक्षा के लिए सही जीवन बीमा और निवेश योजनाएँ चुनने में मार्गदर्शन प्रदान करती है।",
      para1:
        "Pragati एक अनुभवी और भरोसेमंद LIC एजेंसी है, जो परिवारों को उनके भविष्य की सुरक्षा के लिए सही जीवन बीमा और निवेश योजनाएँ चुनने में मार्गदर्शन प्रदान करती है।",
      para2:
        "हम मानते हैं कि बीमा केवल एक पॉलिसी नहीं, बल्कि आपके सपनों, ज़िम्मेदारियों और परिवार की सुरक्षा का वादा होता है।",
    },

    vision: {
      heading: "हमारा दृष्टिकोण",
      desc:
        "हर परिवार को सही समय पर सही सलाह मिले — यही हमारा उद्देश्य है।",
    },

    values: {
      heading: "हमारे मूल मूल्य",
      items: [
        {
          title: "ईमानदारी",
          desc: "हर सलाह में पूर्ण पारदर्शिता और सच्चाई का पालन।",
        },
        {
          title: "विश्वसनीयता",
          desc: "दीर्घकालिक संबंध और जीवनभर का भरोसेमंद साथ।",
        },
        {
          title: "ग्राहक प्राथमिकता",
          desc: "हर निर्णय ग्राहक के हित और आवश्यकता को ध्यान में रखकर।",
        },
      ],
    },

    why: {
      heading: "Pragati को क्यों चुनें?",
      // heading: "Pragati को क्यों चुनें?",
      points: [
        "आपकी ज़रूरत के अनुसार व्यक्तिगत और ईमानदार सलाह",
        "LIC की सभी योजनाओं की स्पष्ट और संपूर्ण जानकारी",
        "पॉलिसी से लेकर दावा निपटान तक निरंतर सहयोग",
        "सरल, पारदर्शी और भरोसेमंद प्रक्रिया",
      ],
    },

    closing:
      // "Pragati में हम मानते हैं कि आपका भरोसा ही हमारी सबसे बड़ी पहचान है।",
      "Pragati में हम मानते हैं कि आपका भरोसा ही हमारी सबसे बड़ी पहचान है।",
  },

  en: {
    header: {
      title: "About Us",
      // subtitle: "Trust of LIC, Support of Pragati",
      subtitle: "Trust of LIC, Support of Pragati",
    },

    who: {
      heading: "Who is Pragati?",
      para1:
        "Pragati is an experienced and trusted LIC agency that guides families in choosing the right life insurance and investment plans to secure their future.",
      para2:
        "We believe insurance is not just a policy, but a promise to protect your dreams, responsibilities, and your family’s future.",
    },

    vision: {
      heading: "Our Vision",
      desc:
        "To ensure every family receives the right advice at the right time.",
    },

    values: {
      heading: "Our Core Values",
      items: [
        {
          title: "Integrity",
          desc: "Complete transparency and honesty in every piece of advice.",
        },
        {
          title: "Reliability",
          desc: "Long-term relationships and lifelong trusted support.",
        },
        {
          title: "Customer First",
          desc: "Every decision is made keeping customer needs and interests in mind.",
        },
      ],
    },

    why: {
      heading: "Why Choose Pragati?",
      points: [
        "Personalized and honest advice based on your needs",
        "Clear and complete information about all LIC plans",
        "Continuous support from policy purchase to claim settlement",
        "Simple, transparent, and trustworthy process",
      ],
    },

    closing:
      "At Pragati, we believe your trust is our greatest identity.",
  },
};

const About = () => {
  const { lang } = useLanguage();
  const t = aboutText[lang];

  return (
    <>
      {/* Page Header */}
      <PageHeader
        title={t.header.title}
        subtitle={t.header.subtitle}
      />

      {/* Who We Are */}
      <section className="section-padding">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-md-6">
              <h2 className="fw-bold mb-3">
                {t.who.heading}
              </h2>

              <p className="fs-5 text-muted">
                {t.who.para1}
              </p>

              <p className="fs-5 text-muted">
                {t.who.para2}
              </p>
            </div>

            <div className="col-md-6 text-center">
              <img
                src={aboutOffice}
                alt="Pragati LIC Office"
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
            {t.vision.heading}
          </h2>

          <p className="fs-5 text-muted mb-4">
            {t.vision.desc}
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
            {t.values.heading}
          </h2>

          <div className="row text-center">
            {t.values.items.map((item, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="p-4 bg-white rounded shadow-sm h-100">
                  <h5 className="fw-bold">{item.title}</h5>
                  <p className="text-muted mb-0">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-light">
        <div className="container">

          <h2 className="text-center fw-bold mb-4">
            {t.why.heading}
          </h2>

          <div className="row justify-content-center">
            <div className="col-md-8">
              <ul className="fs-5">
                {t.why.points.map((point, index) => (
                  <li key={index} className="mb-2">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Closing Statement */}
      <section className="section-padding text-center">
        <div className="container">
          <p className="fs-4 fw-semibold">
            {t.closing}
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
