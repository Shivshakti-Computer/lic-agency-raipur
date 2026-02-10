import PageHeader from "../../components/common/PageHeader";
import { useLanguage } from "../../context/LanguageContext";

/* ================= LOCAL TRANSLATION OBJECT ================= */
const plansText = {
  hi: {
    header: {
      title: "LIC योजनाएं",
      subtitle: "हर ज़रूरत के लिए सही सुरक्षा",
    },

    intro:
      "LIC भारत की सबसे भरोसेमंद जीवन बीमा संस्था है, जो विभिन्न आयु वर्ग और आवश्यकताओं के अनुसार अनेक योजनाएं प्रदान करती है। सही योजना का चयन आपके सुरक्षित भविष्य के लिए अत्यंत महत्वपूर्ण होता है।",

    categories: {
      heading: "योजना श्रेणियाँ",
      items: [
        {
          title: "जीवन बीमा योजना",
          desc: "परिवार की वित्तीय सुरक्षा के लिए जीवन बीमा आधारित योजनाएं।",
        },
        {
          title: "बाल भविष्य योजना",
          desc: "बच्चों की शिक्षा और भविष्य की आवश्यकताओं को ध्यान में रखकर।",
        },
        {
          title: "पेंशन योजना",
          desc: "सेवानिवृत्ति के बाद नियमित आय के लिए।",
        },
        {
          title: "टर्म इंश्योरेंस",
          desc: "कम प्रीमियम में उच्च जीवन सुरक्षा।",
        },
      ],
    },

    advisory: {
      title: "महत्वपूर्ण सूचना",
      text:
        "प्रत्येक व्यक्ति की आयु, आय और पारिवारिक ज़रूरतें अलग होती हैं। किसी भी योजना का चयन करने से पहले व्यक्तिगत परामर्श आवश्यक है। उपलब्ध योजनाओं की जानकारी समय-समय पर LIC द्वारा परिवर्तित की जा सकती है।",
    },

    cta: {
      heading: "आपके लिए कौन-सी योजना उपयुक्त है?",
      desc:
        "सही जानकारी और मार्गदर्शन के लिए हमारे LIC सलाहकार से संपर्क करें।",
      button: "परामर्श के लिए संपर्क करें",
    },
  },

  en: {
    header: {
      title: "LIC Plans",
      subtitle: "Right protection for every need",
    },

    intro:
      "LIC is India’s most trusted life insurance company, offering a wide range of plans suited to different age groups and financial needs. Choosing the right plan is crucial for securing your future.",

    categories: {
      heading: "Plan Categories",
      items: [
        {
          title: "Life Insurance Plans",
          desc: "Life insurance–based plans to secure your family financially.",
        },
        {
          title: "Child Future Plans",
          desc: "Plans designed for your child’s education and future needs.",
        },
        {
          title: "Pension Plans",
          desc: "Regular income after retirement for a secure life.",
        },
        {
          title: "Term Insurance",
          desc: "High life cover at affordable premium.",
        },
      ],
    },

    advisory: {
      title: "Important Notice",
      text:
        "Every individual’s age, income, and family needs are different. Personal consultation is essential before choosing any plan. Details of available plans may change from time to time as per LIC guidelines.",
    },

    cta: {
      heading: "Which plan is right for you?",
      desc:
        "Contact our LIC advisor for the right guidance and detailed information.",
      button: "Contact for Consultation",
    },
  },
};

const Plans = () => {
  const { lang } = useLanguage();
  const t = plansText[lang];

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

      {/* Plan Categories */}
      <section className="section-padding bg-light">
        <div className="container">

          <h2 className="text-center fw-bold mb-5">
            {t.categories.heading}
          </h2>

          <div className="row">
            {t.categories.items.map((item, index) => (
              <div key={index} className="col-md-6 col-lg-3 mb-4">
                <div className="p-4 bg-white rounded shadow-sm h-100">
                  <h5 className="fw-bold mb-2">
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

      {/* Advisory Note */}
      <section className="section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">

              <div className="p-4 border rounded bg-white">
                <p className="fs-5 text-muted mb-0">
                  ⚠️ <strong>{t.advisory.title}:</strong><br />
                  {t.advisory.text}
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

export default Plans;
