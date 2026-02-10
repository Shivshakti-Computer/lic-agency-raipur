import PageHeader from "../../components/common/PageHeader";
import { useLanguage } from "../../context/LanguageContext";

/* ================= LOCAL TRANSLATION OBJECT ================= */
const advisorText = {
  hi: {
    header: {
      title: "LIC सलाहकार बनें",
      subtitle: "एक सम्मानजनक और भरोसेमंद करियर",
    },

    intro:
      "LIC सलाहकार बनना केवल एक करियर विकल्प नहीं, बल्कि समाज को वित्तीय सुरक्षा प्रदान करने का एक महत्वपूर्ण दायित्व होता है। यह पेशा आपको लोगों के जीवन में सकारात्मक बदलाव लाने का अवसर देता है।",

    eligibility: {
      heading: "कौन बन सकता है LIC सलाहकार?",
      points: [
        "न्यूनतम 10वीं / 12वीं उत्तीर्ण",
        "आयु 18 वर्ष या उससे अधिक",
        "लोगों से संवाद करने की क्षमता",
        "ईमानदारी और दीर्घकालिक सोच",
        "सीखने और आगे बढ़ने की इच्छा",
      ],
    },

    benefits: {
      heading: "LIC सलाहकार बनने के लाभ",
      items: [
        {
          title: "सम्मानजनक पहचान",
          desc: "भारत की सबसे भरोसेमंद संस्था से जुड़ने का गौरव।",
        },
        {
          title: "लचीला कार्य समय",
          desc: "अपनी सुविधा अनुसार कार्य करने की स्वतंत्रता।",
        },
        {
          title: "दीर्घकालिक आय",
          desc: "मेहनत और ईमानदारी से स्थिर और निरंतर आय।",
        },
      ],
    },

    cta: {
      heading: "क्या आप LIC सलाहकार बनना चाहते हैं?",
      desc: "अधिक जानकारी और मार्गदर्शन के लिए हमसे संपर्क करें।",
      button: "संपर्क करें",
    },
  },

  en: {
    header: {
      title: "Become an LIC Advisor",
      subtitle: "A respectful and trusted career",
    },

    intro:
      "Becoming an LIC advisor is not just a career choice, but a meaningful responsibility to provide financial security to society. This profession gives you the opportunity to bring positive change to people’s lives.",

    eligibility: {
      heading: "Who can become an LIC Advisor?",
      points: [
        "Minimum 10th / 12th pass",
        "Age 18 years or above",
        "Good communication skills",
        "Honesty and long-term vision",
        "Willingness to learn and grow",
      ],
    },

    benefits: {
      heading: "Benefits of Becoming an LIC Advisor",
      items: [
        {
          title: "Respected Identity",
          desc: "Pride of being associated with India’s most trusted institution.",
        },
        {
          title: "Flexible Working Hours",
          desc: "Freedom to work according to your convenience.",
        },
        {
          title: "Long-Term Income",
          desc: "Stable and continuous income through hard work and integrity.",
        },
      ],
    },

    cta: {
      heading: "Do you want to become an LIC Advisor?",
      desc: "Contact us for detailed information and guidance.",
      button: "Contact Us",
    },
  },
};

const Advisor = () => {
  const { lang } = useLanguage();
  const t = advisorText[lang];

  return (
    <>
      {/* Page Header */}
      <PageHeader
        title={t.header.title}
        subtitle={t.header.subtitle}
      />

      {/* Intro */}
      <section className="section-padding">
        <div className="container text-center">
          <p className="fs-5 text-muted">
            {t.intro}
          </p>
        </div>
      </section>

      {/* Who Can Become Advisor */}
      <section className="section-padding bg-light">
        <div className="container">

          <h2 className="text-center fw-bold mb-5">
            {t.eligibility.heading}
          </h2>

          <div className="row justify-content-center">
            <div className="col-md-8">
              <ul className="fs-5">
                {t.eligibility.points.map((point, index) => (
                  <li key={index} className="mb-2">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container">

          <h2 className="text-center fw-bold mb-5">
            {t.benefits.heading}
          </h2>

          <div className="row text-center">
            {t.benefits.items.map((item, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="p-4 bg-white rounded shadow-sm h-100">
                  <h5 className="fw-bold">
                    {item.title}
                  </h5>
                  <p className="text-muted mb-0">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-light text-center">
        <div className="container">

          <h2 className="fw-bold mb-3">
            {t.cta.heading}
          </h2>

          <p className="fs-5 text-muted mb-4">
            {t.cta.desc}
          </p>

          <a href="/contact" className="btn btn-primary">
            {t.cta.button}
          </a>

        </div>
      </section>
    </>
  );
};

export default Advisor;
