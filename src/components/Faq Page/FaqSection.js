import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Subscribe_Now from "../Subscribe Now/Subscribe_Now";
import "../Faq Page/faq.css"

const faqData = [
  {
    question: "What is StreamVibe?",
    answer:
      "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
  },
  {
    question: "How much does StreamVibe cost?",
    answer:
      "StreamVibe offers various plans starting from $5.99/month. Pricing may vary based on location.",
  },
  {
    question: "What content is available on StreamVibe?",
    answer:
      "You can watch a wide range of movies, series, documentaries, and exclusive originals.",
  },
  {
    question: "How can I watch StreamVibe?",
    answer:
      "StreamVibe is available on web, mobile apps, smart TVs, and streaming devices like Roku or Firestick.",
  },
  {
    question: "How do I sign up for StreamVibe?",
    answer:
      "Visit our official website and click on 'Sign Up'. Fill in your details to start streaming.",
  },
  {
    question: "What is the StreamVibe free trial?",
    answer:
      "New users can enjoy a 7-day free trial with access to all premium features.",
  },
  {
    question: "How do I contact StreamVibe customer support?",
    answer:
      "You can contact our support via live chat or email at support@streamvibe.com.",
  },
  {
    question: "What are the StreamVibe payment methods?",
    answer:
      "We accept credit/debit cards, PayPal, and selected mobile wallets depending on your region.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0); 

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="bg-[#0f0f0f] faq-section text-white px-[24px] sm:px-[40px] md:px-[80px] py-[60px] inter-font">
        <Header bg_color_id={"bg_color"} />
        {/* Main Content */}
        <section className="py-[80px] ">
          <h2 className="text-2xl md:text-3xl font-semibold mb-[14px] sm:mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-white/60 text-[14px] sm:text-[16px] mb-[16px] sm:mb-10">
            Got questions? We've got answers! Check out our FAQ section to find
            answers to the most common questions about StreamVibe.
          </p>

          <div className="">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="p-[10px] sm:p-4 rounded border-b-[1px] border-white/10 flex flex-col"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="flex justify-between items-center w-full text-left"
                >
                  <div className="flex items-center space-x-4">
                    <span className="items-number text-[12px] sm:text-sm bg-white/10 text-white font-normal flex items-center justify-center rounded-[6px]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[13px] sm:text-[16px] md:text-[20px]">
                      {faq.question}
                    </span>
                  </div>
                  {openIndex === index ? (
                    <AiOutlineMinus className="text-white" />
                  ) : (
                    <AiOutlinePlus className="text-white" />
                  )}
                </button>

                {openIndex === index && (
                  <div className="mt-[0px] sm:mt-3 text-white/60 text-[12px] md:text-[16px] leading-relaxed pl-[48px] sm:pl-[63px]">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
        <Subscribe_Now />
      </div>
      <Footer />
    </>
  );
};

export default FaqSection;
