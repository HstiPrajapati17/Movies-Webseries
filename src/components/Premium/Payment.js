import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Header2 from "../Header/Header2";
import { CreditCard, Lock } from "lucide-react";

import card1 from "../Assets/Images/Card.png";
import card2 from "../Assets/Images/Credit card.png";
import card3 from "../Assets/Images/Credit card2.png";
import card4 from "../Assets/Images/Credit card3.png";

import payment1 from "../Assets/Images/upi.webp";
import payment2 from "../Assets/Images/Paytm.webp";
import payment3 from "../Assets/Images/gpay.png";
import payment4 from "../Assets/Images/phonepe.png";

export default function PaymentPage() {
  const location = useLocation();
  const selectedPlan = location.state?.plan || {
    name: "Basic Plan",
    price: "$9.99",
    duration: "month",
  };

  const [formData, setFormData] = useState({
    cardNumber: "",
    cardHolder: "",
    expiryDate: "",
    cvv: "",
    paymentMethod: "card",
  });

  const [UpiformData, setUpiFormData] = useState({
    upiId: "",
    upiDomain: "@okicici",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpiInputChange = (e) => {
    setUpiFormData({ ...UpiformData, upiId: e.target.value });
  };

  const handleDomainChange = (e) => {
    setUpiFormData({ ...UpiformData, upiDomain: e.target.value });
  };

  return (
    <div className="h-screen w-full bg-[#0f0f0f]">
      <div className="text-white bg-[#0f0f0f] flex flex-col inter-font pb-[26px] sm:pb-[40px] md:pb-[80px]">
        <Header2 />
        <div className="px-[24px] sm:px-[40px] md:px-[80px] mt-[28px] sm:mt-[40px] md:mt-[80px]">
          <h2 className="text-[18px] font-semibold mb-6 text-white">
            Select Payment Method
          </h2>
          <div className="flex items-center justify-center w-full">
            <div className="grid sm:grid-cols-1 lg:grid-cols-[2.2fr_1fr] gap-[18px] w-full ">
              <div>
                {/* Card Payment */}
                <div className="bg-[#141414] border-[1px] border-white/10 rounded-lg p-[12px] sm:p-[18px] lg:p-[24px] mb-[18px]">
                  <div className="flex flex-wrap items-center justify-between">
                    <div className="flex flex-wrap items-center space-x-3">
                      <input
                        type="radio"
                        id="creditCard"
                        name="paymentMethod"
                        value="card"
                        checked={formData.paymentMethod === "card"}
                        onChange={handleInputChange}
                        className="w-4 h-4 cursor-pointer"
                      />
                      <label
                        htmlFor="creditCard"
                        className="flex items-center space-x-2 text-white"
                      >
                        <span>Credit Card / Debit Card</span>
                      </label>
                    </div>
                    <div className="flex space-x-1 sm:mt-[0] mt-[8px]">
                      <img src={card1} alt="card1" />
                      <img src={card2} alt="card2" />
                      <img src={card3} alt="card3" />
                      <img src={card4} alt="card4" />
                    </div>
                  </div>

                  {formData.paymentMethod === "card" && (
                    <div className="flex flex-wrap justify-center items-center flex-col border-t-[1px] border-white/10 pt-[18px] mt-[18px]">
                      <div className="space-y-4 w-full px-0 sm:px-10 md:px-[100px] mb-9">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm text-gray-300 mb-2">
                              Card Number
                            </label>
                            <input
                              type="text"
                              name="cardNumber"
                              value={formData.cardNumber}
                              onChange={handleInputChange}
                              placeholder="Card Number"
                              className="w-full px-3 py-2.5 bg-[#2a2a2a] rounded-[3px] text-white placeholder-gray-400 text-sm"
                            />
                          </div>
                          <div>
                            <label className="block text-sm text-gray-300 mb-2">
                              Card Holder Name
                            </label>
                            <input
                              type="text"
                              name="cardHolder"
                              value={formData.cardHolder}
                              onChange={handleInputChange}
                              placeholder="Card Holder Name"
                              className="w-full px-3 py-2.5 bg-[#2a2a2a] rounded-[3px] text-white placeholder-gray-400 text-sm"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm text-gray-300 mb-2">
                              Expiry Date
                            </label>
                            <input
                              type="text"
                              name="expiryDate"
                              value={formData.expiryDate}
                              onChange={handleInputChange}
                              placeholder="MM / YYYY"
                              className="w-full px-3 py-2.5 bg-[#2a2a2a] rounded-[3px] text-white placeholder-gray-400 text-sm"
                            />
                          </div>
                          <div>
                            <label className="block text-sm text-gray-300 mb-2">
                              CVV
                            </label>
                            <input
                              type="text"
                              name="cvv"
                              value={formData.cvv}
                              onChange={handleInputChange}
                              placeholder="CVV"
                              className="w-full px-3 py-2.5 bg-[#2a2a2a] rounded-[3px] text-white placeholder-gray-400 text-sm"
                            />
                          </div>
                        </div>
                      </div>

                      <Link className="w-full text-center flex justify-center">
                        <button className="text-center watch-play-btn w-full md:w-[500px] py-[12px]">
                          <span className="text-white text-[16px] w-full">
                            Pay $
                            {(
                              parseFloat(selectedPlan.price.replace("$", "")) +
                              1
                            ).toFixed(2)}
                          </span>
                        </button>
                      </Link>
                    </div>
                  )}
                </div>

                {/* UPI Payment */}
                <div className="bg-[#141414] border-[1px] border-white/10 rounded-lg p-[12px] sm:p-[18px] lg:p-[24px]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        id="upi"
                        name="paymentMethod"
                        value="upi"
                        checked={formData.paymentMethod === "upi"}
                        onChange={handleInputChange}
                        className="w-4 h-4 cursor-pointer"
                      />
                      <label htmlFor="upi" className="text-white">
                        UPI
                      </label>
                    </div>
                    <div className="flex space-x-1">
                      <img
                        src={payment1}
                        alt="upi1"
                        className="w-[28px] h-[20px] bg-white"
                      />
                      <img
                        src={payment2}
                        alt="upi2"
                        className="w-[28px] h-[20px]"
                      />
                      <img
                        src={payment3}
                        alt="upi3"
                        className="w-[28px] h-[20px]"
                      />
                      <img
                        src={payment4}
                        alt="upi4"
                        className="w-[28px] h-[20px]"
                      />
                    </div>
                  </div>

                  {formData.paymentMethod === "upi" && (
                    <div className="flex justify-center items-center flex-col border-t-[1px] border-white/10 overflow-hidden pt-[18px] mt-[18px]">
                      <div className="space-y-4 w-full px-[0px] sm:px-[40px] md:px-[100px] mb-[36px]">
                        <label className="block text-sm text-gray-300 mb-2">
                          UPI ID
                        </label>
                        <div className="relative flex w-full rounded-md overflow-hidden bg-[#141414]">
                          <input
                            type="text"
                            name="upiId"
                            value={UpiformData.upiId}
                            onChange={handleUpiInputChange}
                            placeholder="Enter UPI ID"
                            className="w-full px-[12px] sm:px-4 py-2.5 bg-[#2a2a2a] text-white placeholder-white/20 text-sm pr-[110px]"
                          />
                          <select
                            value={UpiformData.upiDomain}
                            onChange={handleDomainChange}
                            className="absolute top-[2px] right-[11px] h-[90%] bg-[#2a2a2a] text-white pl-[8px] pr-[6px] sm:pr-[12px] text-sm border-l border-white/10 w-[92px] sm:w-[100px]"
                          >
                            <option value="@okicici">@okicici</option>
                            <option value="@okhdfcbank">@okhdfcbank</option>
                            <option value="@oksbi">@oksbi</option>
                            <option value="@okaxis">@okaxis</option>
                          </select>
                        </div>
                      </div>
                      <button className="watch-play-btn text-center flex justify-center  w-full md:w-[500px] py-[12px] bg-red-600 hover:bg-red-700 rounded-md">
                        <span className="text-white text-[16px]">
                          Pay $
                          {(
                            parseFloat(selectedPlan.price.replace("$", "")) + 1
                          ).toFixed(2)}
                        </span>
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Right: Order Summary */}
              <div>
                <div className="plan-card bg-[#141414] rounded-lg py-[16px] sm:py-[24px] px-[24px] sm:px-[48px] mb-[18px]">
                  <h3 className="text-[20px] font-bold mb-4 text-white">
                    {selectedPlan.name}
                  </h3>
                  <p className="text-gray-400 text-[12px] mb-6">
                    Enjoy an extensive library of movies and shows, featuring a
                    range of content, including recently released titles.
                  </p>
                  <div className="text-2xl font-bold text-white mb-1">
                    {selectedPlan.price}{" "}
                    <span className="text-sm font-normal text-gray-400">
                      {selectedPlan.duration}
                    </span>
                  </div>
                </div>
                <div className="border-[1px] border-white/10 rounded-lg bg-white/10 overflow-hidden">
                  <h4 className="font-medium text-white p-[12px]">
                    Price Details
                  </h4>
                  <div className="space-y-3 text-sm bg-[#141414] px-[12px] py-[22px]">
                    <div className="flex justify-between">
                      <span className="text-white text-[16px] font-normal">
                        Price
                      </span>
                      <span className="text-white">{selectedPlan.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white text-[16px] font-normal">
                        Discount
                      </span>
                      <span className="text-white">$0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white text-[16px] font-normal">
                        Platform Fee
                      </span>
                      <span className="text-white">$1</span>
                    </div>
                    <hr className="my-3" />
                    <div className="flex justify-between font-medium text-white">
                      <span>Total</span>
                      <span>
                        $
                        {(
                          parseFloat(selectedPlan.price.replace("$", "")) + 1
                        ).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
