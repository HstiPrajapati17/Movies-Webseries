import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
const plans = [
  {
    name: "Basic Plan",
    price: "$9.99",
    duration: "/week",
    description:
      "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
    features: [
      "Access to a wide selection of movies and shows, including some new releases.",
      "Watch on one device simultaneously",
      "Cancel Anytime",
    ],
    adFree: false,
    familySharing: false,
  },
  {
    name: "Standard Plan",
    price: "$12.99",
    duration: "/month",
    label: "Popular",
    description:
      "Access to a wider selection of movies and shows, including most new releases and exclusive content.",
    features: [
      "Access to a wider selection of movies and shows, including most new releases and exclusive content.",
      "Watch on Two device simultaneously",
      "Cancel Anytime",
      "Ad - Free",
      "Family Sharing (up to 5 members)",
    ],
    adFree: true,
    familySharing: true,
  },
  {
    name: "Premium Plan",
    price: "$14.99",
    duration: "/year",
    description:
      "Access to a widest selection of movies and shows, including all new releases and Offline Viewing",
    features: [
      "Access to a widest selection of movies and shows, including all new releases and Offline Viewing",
      "Watch on Four device simultaneously",
      "Cancel Anytime",
      "Ad - Free",
      "Family Sharing (up to 6 members)",
    ],
    adFree: true,
    familySharing: true,
  },
];

const PricingPage = () => {
  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen  inter-font">
      <Header bg_color_id={"bg_color"} />
      <div className=" p-[26px] sm:p-[40px] md:p-[80px] mt-[26px] sm:mt-[40px] md:mt-[75px]">
        <div className="text-left mb-12 ">
          <h2 className="text-3xl font-semibold mb-2">
            Choose the plan that's right for you
          </h2>
          <p className="text-gray-400 font-normal text-[18px]">
            Join StreamVibe and select from our flexible subscription options
            tailored to suit your viewing preferences. Get ready for non-stop
            entertainment!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`bg-[#141414] rounded-xl text-center transition-transform duration-300 hover:border-[1px] hover:border-[#fff]/20 ${
                idx === 1 ? "p-[40px] scale-105 shadow-xl" : "p-[32px]"
              }`}
            >
              <div className="flex items-center mb-[20px]">
                <h3 className="text-[24px] font-bold text-left">{plan.name}</h3>
                <div className="text-[12px] text-left font-normal watch-play-btn px-[12px] ml-[16px] rounded-[2px]">
                  {plan.label}
                </div>
              </div>
              <p className="text-gray-400 font-normal text-[18px] mb-[36px] min-h-[60px] text-left">
                {plan.description}
              </p>
              <div className="flex items-end mb-[32px]">
                <div className="text-[40px] font-semibold text-left leading-[42px]">
                  {plan.price}
                </div>
                <div className="text-sm text-gray-400 text-left ml-[2px]">
                  {plan.duration}
                </div>
              </div>
              <Link to="/payment" state={{ plan: plan }}>
                <button className="watch-play-btn px-6 py-2 rounded text-white font-medium">
                  Choose Plan
                </button>
              </Link>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-[16px]">
            Compare our plans and find the right one for you
          </h3>
          <p className="text-gray-400 mb-10">
            StreamVibe offers three different plans to fit your needs: Basic,
            Standard, and Premium. Compare the features of each plan and choose
            the one that's right for you.
          </p>

          <div className="overflow-x-auto rounded-[8px] border-[1px] border-gray-700">
            <table className="w-full text-left">
              <thead className="">
                <tr className="bg-[#0f0f0f]">
                  <th className="p-[16px] w-[25%] text-[20px] font-semibold">
                    Features
                  </th>
                  {plans.map((plan, idx) => (
                    <th key={idx} className="p-[16px] text-left w-[25%]">
                      <div className="flex items-center text-[20px] font-semibold">
                        <th>{plan.name.replace("Plan", "")}</th>
                        {plan.label === "Popular" && (
                          <span className="text-xs ml-[8px] font-medium watch-play-btn text-white px-2 py-[2px] rounded-[4px]">
                            {plan.label}
                          </span>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-700 text-[16px] font-normal text-white/60 bg-[#141414]">
                  <td className="p-[16px]">Price</td>
                  {plans.map((plan, idx) => (
                    <td key={idx} className="text-left p-[16px]">
                      {plan.price}/{plan.duration.replace("/", "")}
                    </td>
                  ))}
                </tr>
                <tr className="border-t border-gray-700 text-[16px] font-normal text-white/60 bg-[#141414]">
                  <td className=" p-[16px]">Content</td>
                  {plans.map((plan, idx) => (
                    <td key={idx} className="text-left p-[16px]">
                      {plan.features[0]}
                    </td>
                  ))}
                </tr>
                <tr className="border-t border-gray-700 text-[16px] font-normal text-white/60 bg-[#141414]">
                  <td className="p-[16px]">Devices</td>
                  {plans.map((plan, idx) => (
                    <td key={idx} className="text-left p-[16px]">
                      {plan.features.find((f) => f.includes("device"))}
                    </td>
                  ))}
                </tr>
                <tr className="border-t border-gray-700 text-[16px] font-normal text-white/60 bg-[#141414]">
                  <td className="p-[16px]">Cancel Anytime</td>
                  {plans.map((_, idx) => (
                    <td key={idx} className="text-left p-[16px]">
                      Yes
                    </td>
                  ))}
                </tr>
                <tr className="border-t border-gray-700 text-[16px] font-normal text-white/60 bg-[#141414]">
                  <td className="p-[16px]">Ad - Free</td>
                  {plans.map((plan, idx) => (
                    <td key={idx} className="text-left p-[16px]">
                      {plan.adFree ? "Yes" : "No"}
                    </td>
                  ))}
                </tr>
                <tr className="border-t border-gray-700 text-[16px] font-normal text-white/60 bg-[#141414]">
                  <td className="p-[16px]">Family Sharing</td>
                  {plans.map((plan, idx) => (
                    <td key={idx} className="text-left p-[16px]">
                      {plan.familySharing
                        ? plan.name.includes("Premium")
                          ? "Yes, up to 6 family members."
                          : "Yes, up to 5 family members."
                        : "No"}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PricingPage;
