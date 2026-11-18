import { useState } from "react";

const content = {
  en: {
    navigation: ["How it works", "FAQs", "Pickup locations"],
    language: "العربية",
    eyebrow: "KHALUI FARM · HALAL BEEF CSA",
    titleA: "Good beef.",
    titleB: "Better together.",
    intro:
      "A community-powered way to enjoy halal beef. Reserve a share, join other families, and bring quality meat home.",
    heroButton: "Explore the FAQs",
    contactButton: "Contact us",
    heroNote: "Halal beef · Community supported · Memphis, Tennessee",
    sectionTag: "THE PROCESS",
    sectionTitle: "Simple by nature.",
    sectionIntro:
      "From reserving your share to collecting your beef, here's how the community model works.",
    steps: [
      {
        number: "01",
        title: "Choose your share",
        description:
          "Tell us how many shares you'd like and where you'd prefer to collect your beef.",
      },
      {
        number: "02",
        title: "Join the community",
        description:
          "Families reserve shares together. Once the second animal is fully reserved, halal slaughter is scheduled.",
      },
      {
        number: "03",
        title: "Bring it home",
        description:
          "Your share is prepared, weighed, and made available for pickup or coordinated delivery.",
      },
    ],
    faqTag: "GOOD TO KNOW",
    faqTitle: "Frequently asked questions.",
    faqIntro:
      "Everything you need to know about participating in Khalui Farm's halal beef sharing program.",
    faqItems: [
      {
        question: "What is the program?",
        answer:
          "Families purchase shares of a whole animal, combining their buying power to make halal beef more affordable.",
      },
      {
        question: "How do I participate?",
        answer:
          "Tell Khalui Farm how many shares you want and your preferred pickup or delivery location. Reservation instructions will be announced.",
      },
      {
        question: "How much beef is one share?",
        answer:
          "The proposed model divides each animal into 16 shares, typically yielding approximately 25–35 pounds per share. Actual weight varies. This share model is subject to confirmation.",
      },
      {
        question: "What does a share include?",
        answer:
          "A mixed assortment of boneless beef, bone-in cuts, ribs, and organs. Confirm the final assortment before reserving.",
      },
      {
        question: "When do I pay?",
        answer:
          "Under the proposed model, reservations require no immediate payment. An initial payment follows when reservations are complete; the balance is due after weighing your share. Final payment terms are subject to confirmation.",
      },
      {
        question: "What will it cost?",
        answer:
          "Khalui Farm will announce its own pricing. Confirm the total, included processing costs, and any delivery fee before paying.",
      },
      {
        question: "When will slaughter take place?",
        answer:
          "Both animals will be scheduled for halal slaughter once the second animal is fully reserved, Insha'Allah.",
      },
      {
        question: "Can I reserve additional shares?",
        answer:
          "Yes. Additional reservations and referrals help complete the cycle sooner.",
      },
      {
        question: "Can I cancel if I cannot wait?",
        answer:
          "Yes, you may cancel without obligation while waiting. Confirm any refund arrangements before making an advance payment.",
      },
      {
        question: "Where do I collect my beef?",
        answer:
          "Two pickup locations are listed in Memphis: Al Aqsa International Market at 6208 Stage Rd and Mojama Dar Alhajar at 3744 Ridgeway Rd. Delivery is available for all locations; coordinate timing and any fee with Khalui Farm.",
      },
      {
        question: "How is halal preparation confirmed?",
        answer:
          "Khalui Farm will provide the processor's details and confirm the Zabiha arrangements before the cycle proceeds.",
      },
    ],
    noteTitle: "A note on the program",
    note: "Share sizes, pricing, and payment arrangements are proposed and require final confirmation from Khalui Farm. Please contact us for the latest details before making a reservation.",
    locationsTag: "FIND US",
    locationsTitle: "Pickup locations.",
    locationsIntro:
      "Two convenient pickup points in Memphis, Tennessee. Please coordinate your pickup time with Khalui Farm.",
    locations: [
      {
        name: "Al Aqsa International Market",
        type: "International supermarket",
        address: "6208 Stage Rd",
        city: "Memphis, TN 38134",
      },
      {
        name: "Mojama Dar Alhajar",
        type: "International grocery store",
        address: "3744 Ridgeway Rd",
        city: "Memphis, TN 38115",
      },
    ],
    directions: "Get directions",
    pickupNote:
      "Pickup timing and availability should be confirmed with Khalui Farm before visiting.",
    ctaTag: "QUESTIONS? WE'RE HERE.",
    ctaTitle: "Let's talk beef.",
    ctaDescription:
      "Interested in a share or need more information? Reach out directly to discuss the next steps.",
    call: "Call Ashif Jahan",
    footerText: "Community supported halal beef.",
    footerRights: "Khalui Farm. All rights reserved.",
  },

  ar: {
    navigation: ["كيف يعمل البرنامج", "الأسئلة الشائعة", "مواقع الاستلام"],
    language: "English",
    eyebrow: "مزرعة خلوي · برنامج مشاركة اللحم الحلال",
    titleA: "لحم حلال طيب.",
    titleB: "معاً بتكلفة أفضل.",
    intro:
      "طريقة مجتمعية للحصول على لحوم الأبقار الحلال. احجز حصتك، وشارك العائلات الأخرى، واستمتع باللحم في منزلك.",
    heroButton: "الأسئلة الشائعة",
    contactButton: "تواصل معنا",
    heroNote: "لحم حلال · مشاركة مجتمعية · ممفيس، تينيسي",
    sectionTag: "خطوات البرنامج",
    sectionTitle: "خطوات بسيطة.",
    sectionIntro:
      "من حجز حصتك إلى استلام اللحوم، تعرف على طريقة عمل برنامج المشاركة.",
    steps: [
      {
        number: "01",
        title: "اختر حصتك",
        description:
          "أخبرنا بعدد الحصص التي ترغب فيها، وحدد موقع الاستلام أو التوصيل المفضل لديك.",
      },
      {
        number: "02",
        title: "شارك المجتمع",
        description:
          "تحجز العائلات الحصص معاً. وبعد اكتمال حجز الحيوان الثاني، يُحدد موعد الذبح الحلال.",
      },
      {
        number: "03",
        title: "استلم حصتك",
        description:
          "يتم تجهيز حصتك ووزنها، ثم توفيرها للاستلام أو التوصيل بالتنسيق المسبق.",
      },
    ],
    faqTag: "معلومات مهمة",
    faqTitle: "الأسئلة الشائعة.",
    faqIntro:
      "كل ما تحتاج معرفته عن المشاركة في برنامج لحوم الأبقار الحلال من مزرعة خلوي.",
    faqItems: [
      {
        question: "ما هو البرنامج؟",
        answer:
          "تشتري الأسر حصصاً من رأس كامل من الماشية، فتجمع قوتها الشرائية لجعل لحوم الأبقار الحلال ميسورة التكلفة.",
      },
      {
        question: "كيف أشارك؟",
        answer:
          "أبلغ مزرعة خلوي بعدد الحصص التي ترغب فيها، وموقع الاستلام أو التوصيل المفضل لديك. ستُعلن تعليمات الحجز لاحقاً.",
      },
      {
        question: "ما كمية اللحم في الحصة الواحدة؟",
        answer:
          "يقسم النموذج المقترح كل رأس إلى 16 حصة، وتنتج الحصة عادة نحو 25 إلى 35 رطلاً من اللحم. ويختلف الوزن الفعلي. ويحتاج هذا النموذج إلى تأكيد نهائي.",
      },
      {
        question: "ماذا تشمل الحصة؟",
        answer:
          "تشكيلة متنوعة من اللحم منزوع العظم، وقطع اللحم بالعظم، والأضلاع، والأحشاء. يرجى تأكيد التشكيلة النهائية قبل الحجز.",
      },
      {
        question: "متى أدفع؟",
        answer:
          "وفقاً للنموذج المقترح، لا يتطلب الحجز دفعاً فورياً. تُدفع دفعة أولى بعد اكتمال الحجوزات، ويستحق المبلغ المتبقي بعد وزن حصتك. وتحتاج شروط الدفع النهائية إلى تأكيد.",
      },
      {
        question: "كم تبلغ التكلفة؟",
        answer:
          "ستعلن مزرعة خلوي أسعارها الخاصة. تأكد من الإجمالي، وتكاليف تجهيز اللحوم المشمولة، وأي رسوم توصيل قبل الدفع.",
      },
      {
        question: "متى يتم الذبح؟",
        answer:
          "سيحدد موعد الذبح الحلال للرأسين بعد حجز جميع حصص الرأس الثاني، إن شاء الله.",
      },
      {
        question: "هل يمكنني حجز حصص إضافية؟",
        answer:
          "نعم. تساعد الحجوزات الإضافية وإحالة الأصدقاء على استكمال دورة الحجز في وقت أقرب.",
      },
      {
        question: "هل يمكنني الإلغاء إذا تعذر علي الانتظار؟",
        answer:
          "نعم، يمكنك الإلغاء دون أي التزام أثناء الانتظار. تأكد من ترتيبات استرداد المبلغ قبل سداد أي دفعة مقدمة.",
      },
      {
        question: "أين أستلم اللحم؟",
        answer:
          "يتوفر موقعان للاستلام في ممفيس: سوق الأقصى الدولي في 6208 Stage Rd، ومتجر مجمع دار الحجر في 3744 Ridgeway Rd. التوصيل متاح لجميع المواقع؛ يرجى تنسيق الموعد وأي رسوم مع مزرعة خلوي.",
      },
      {
        question: "كيف يتم التأكد من التجهيز الحلال؟",
        answer:
          "ستقدم مزرعة خلوي بيانات منشأة تجهيز اللحوم، وتؤكد ترتيبات الذبح الشرعي قبل المضي في هذه الدورة.",
      },
    ],
    noteTitle: "ملاحظة حول البرنامج",
    note: "حجم الحصص والأسعار وترتيبات الدفع الواردة في هذا البرنامج مقترحة وتحتاج إلى تأكيد نهائي من مزرعة خلوي. يرجى التواصل معنا للحصول على أحدث التفاصيل قبل الحجز.",
    locationsTag: "مواقعنا",
    locationsTitle: "مواقع الاستلام.",
    locationsIntro:
      "موقعان للاستلام في ممفيس بولاية تينيسي. يرجى تنسيق موعد الاستلام مسبقاً مع مزرعة خلوي.",
    locations: [
      {
        name: "Al Aqsa International Market",
        type: "سوبر ماركت دولي",
        address: "6208 Stage Rd",
        city: "Memphis, TN 38134",
      },
      {
        name: "Mojama Dar Alhajar",
        type: "متجر بقالة دولي",
        address: "3744 Ridgeway Rd",
        city: "Memphis, TN 38115",
      },
    ],
    directions: "الاتجاهات على الخريطة",
    pickupNote:
      "يرجى تأكيد موعد الاستلام وتوفر الطلب مع مزرعة خلوي قبل زيارة الموقع.",
    ctaTag: "هل لديك أسئلة؟",
    ctaTitle: "تواصل معنا.",
    ctaDescription:
      "هل ترغب في حجز حصة أو معرفة المزيد؟ تواصل معنا مباشرة لمعرفة الخطوات التالية.",
    call: "اتصل بأشرف جهان",
    footerText: "لحوم أبقار حلال بدعم المجتمع.",
    footerRights: "مزرعة خلوي. جميع الحقوق محفوظة.",
  },
};

const pickupAddresses = [
  "6208 Stage Rd, Memphis, TN 38134, United States",
  "3744 Ridgeway Rd, Memphis, TN 38115, United States",
];

function ArrowIcon({ diagonal = false }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {diagonal ? (
        <>
          <path d="M7 17 17 7" />
          <path d="M8 7h9v9" />
        </>
      ) : (
        <>
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </>
      )}
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 36 36"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M29.5 5.5C14 5.5 6.5 12.5 6.5 22a8 8 0 0 0 8 8c9.5 0 16.5-7.5 15-24.5Z"
        fill="currentColor"
        opacity=".23"
      />
      <path
        d="M8 29c4-9 11-15 20-20M9 23l-4-7M16 17l-1-7M18 21l8 1"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

const HomePage = () => {
  const [language, setLanguage] = useState("en");
  const [openFAQ, setOpenFAQ] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const t = content[language];
  const isArabic = language === "ar";

  function changeLanguage() {
    setLanguage((current) => (current === "en" ? "ar" : "en"));
    setOpenFAQ(0);
    setMenuOpen(false);
  }

  function closeMenu() {
    setMenuOpen(false);
  }
  return (
    <div className="site" lang={language} dir={isArabic ? "rtl" : "ltr"}>
      <main>
        <section className="hero-section muslim-hero" id="home">
          <div className="container">
            <div className="hero-topbar">
              <span className="hero-farm-name">
                KHALUI FARM
                <span className="hero-farm-label">
                  HALAL BEEF CSA · MEMPHIS, TENNESSEE
                </span>
              </span>

              <button
                type="button"
                className="hero-language-switch"
                onClick={changeLanguage}
                aria-label="Switch language"
              >
                <span>◎</span>
                {t.language}
              </button>
            </div>

            <div className="muslim-hero-grid">
              <div className="muslim-hero-content">
                <div className="bismillah" lang="ar" dir="rtl">
                  بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                </div>

                <div className="hero-eyebrow">
                  <span className="hero-eyebrow-line" />
                  {isArabic
                    ? "لحوم أبقار حلال بنظام المشاركة"
                    : "COMMUNITY-SUPPORTED HALAL BEEF"}
                </div>

                <h1>
                  {isArabic ? (
                    <>
                      لحم حلال.
                      <br />
                      <em>يجمعنا الخير.</em>
                    </>
                  ) : (
                    <>
                      Halal beef.
                      <br />
                      <em>Shared with</em>
                      <br />
                      community.
                    </>
                  )}
                </h1>

                <p className="muslim-hero-description">
                  {isArabic
                    ? "اجتمع مع عائلات أخرى لحجز حصة من لحوم الأبقار الحلال، والاستفادة من الشراء الجماعي بطريقة بسيطة وميسورة التكلفة."
                    : "Join fellow families in a community-supported halal beef sharing program. Reserve your portion of a whole animal and make quality halal beef more affordable together."}
                </p>

                <div className="muslim-hero-actions">
                  <a href="#how-it-works" className="hero-primary-cta">
                    {isArabic ? "تعرف على طريقة المشاركة" : "See how it works"}
                    <ArrowIcon />
                  </a>

                  <a href="#faq" className="hero-secondary-cta">
                    {isArabic
                      ? "الأسئلة الشائعة"
                      : "Frequently asked questions"}
                    <ArrowIcon diagonal />
                  </a>
                </div>

                <div className="hero-trust-row">
                  <div className="trust-item">
                    <span className="trust-icon">✳</span>
                    <span>
                      {isArabic
                        ? "ذبح حلال وفق الشريعة"
                        : "Zabiha halal arrangements"}
                    </span>
                  </div>

                  <div className="trust-divider" />

                  <div className="trust-item">
                    <span className="trust-icon">♡</span>
                    <span>
                      {isArabic ? "مشاركة مجتمعية" : "Community supported"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="muslim-hero-visual">
                <div className="muslim-hero-image">
                  <div className="geometric-pattern" aria-hidden="true" />
                </div>

                <div className="hero-image-shade" />

                <div className="hero-image-bottom">
                  <span className="hero-image-small">
                    KHALUI FARM · MEMPHIS, TN
                  </span>

                  <span className="hero-image-quote">
                    {isArabic
                      ? "من مجتمعنا إلى مائدتكم"
                      : "From our community to your table."}
                  </span>
                </div>

                <div className="hero-image-accent">
                  <span lang="ar">حلال</span>
                  <small>HALAL</small>
                </div>
              </div>
            </div>

            <div className="hero-bottom-rule">
              <span>{isArabic ? "البركة في المشاركة" : "BETTER TOGETHER"}</span>

              <span className="hero-bottom-symbol">✳</span>

              <span>{isArabic ? "ممفيس، تينيسي" : "MEMPHIS, TENNESSEE"}</span>
            </div>
          </div>
        </section>

        <div className="marquee-strip">
          <div className="container marquee-content">
            <span>HALAL</span>
            <span className="marquee-star">✳</span>
            <span>COMMUNITY</span>
            <span className="marquee-star">✳</span>
            <span>QUALITY</span>
            <span className="marquee-star">✳</span>
            <span>TOGETHER</span>
            <span className="marquee-star">✳</span>
            <span>MEMPHIS, TN</span>
          </div>
        </div>

        <section className="process-section section-padding" id="how-it-works">
          <div className="container">
            <div className="section-heading process-heading">
              <div>
                <div className="section-tag">{t.sectionTag}</div>
                <h2>{t.sectionTitle}</h2>
              </div>
              <p>{t.sectionIntro}</p>
            </div>

            <div className="steps-grid">
              {t.steps.map((step, index) => (
                <article className="step-card" key={step.number}>
                  <div className="step-top">
                    <span className="step-number">{step.number}</span>
                    <span className="step-icon">
                      {index === 0 ? "◫" : index === 1 ? "✳" : "⌂"}
                    </span>
                  </div>

                  <div className="step-bottom">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="faq-section section-padding" id="faq">
          <div className="container faq-layout">
            <div className="faq-sidebar">
              <div className="section-tag">{t.faqTag}</div>
              <h2>{t.faqTitle}</h2>
              <p>{t.faqIntro}</p>

              <div className="faq-help-card">
                <div className="help-leaf">
                  <LeafIcon />
                </div>
                <h3>{t.noteTitle}</h3>
                <p>{t.note}</p>
              </div>
            </div>

            <div className="faq-list">
              {t.faqItems.map((item, index) => {
                const isOpen = openFAQ === index;
                return (
                  <article
                    className={`faq-item ${isOpen ? "faq-open" : ""}`}
                    key={index}
                  >
                    <h3>
                      <button
                        type="button"
                        className="faq-question"
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${index}`}
                        onClick={() => setOpenFAQ(isOpen ? -1 : index)}
                      >
                        <span className="faq-index">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="faq-question-text">
                          {item.question}
                        </span>
                        <span className="faq-toggle">{isOpen ? "−" : "+"}</span>
                      </button>
                    </h3>
                    {isOpen && (
                      <div id={`faq-answer-${index}`} className="faq-answer">
                        <p>{item.answer}</p>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="locations-section section-padding" id="locations">
          <div className="container">
            <div className="section-heading locations-heading">
              <div>
                <div className="section-tag">{t.locationsTag}</div>
                <h2>{t.locationsTitle}</h2>
              </div>
              <p>{t.locationsIntro}</p>
            </div>

            <div className="location-grid">
              {t.locations.map((location, index) => {
                const directionsUrl =
                  "https://www.google.com/maps/search/?api=1&query=" +
                  encodeURIComponent(pickupAddresses[index]);

                return (
                  <article className="location-card" key={location.address}>
                    <div className="location-top">
                      <span className="location-icon">
                        <MapPinIcon />
                      </span>
                      <span className="location-id">
                        {String(index + 1).padStart(2, "0")} / 02
                      </span>
                    </div>

                    <div className="location-content">
                      <span className="location-category">{location.type}</span>
                      <h3>{location.name}</h3>
                      <address dir="ltr">
                        {location.address}
                        <br />
                        {location.city}
                        <br />
                        United States
                      </address>
                    </div>

                    <a
                      className="directions-link"
                      href={directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.directions}
                      <ArrowIcon diagonal />
                    </a>
                  </article>
                );
              })}
            </div>

            <div className="pickup-message">
              <span className="pickup-message-icon">ⓘ</span>
              <span>{t.pickupNote}</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-content">
          <span className="footer-farm-text">Khalui Farm</span>

          <p>{t.footerText}</p>

          <span className="footer-copyright">
            © {new Date().getFullYear()} {t.footerRights}
          </span>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
