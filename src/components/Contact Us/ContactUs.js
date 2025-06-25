import React from "react";
import subcontainer from "../Assets/Images/Sub Container (2).png";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Subscribe_Now from "../Subscribe Now/Subscribe_Now";

const ContactUs = () => {
  return (
    <>
      <div className="bg-[#0f0f0f] text-white px-[24px] sm:px-[40px] md:px-[80px] py-[60px] inter-font">
        <Header bg_color_id={"bg_color"} />

        {/* Main Content */}
        <section className="py-[26px] sm:py-[40px] md:py-[80px] space-y-[40px]">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left - Image and Heading */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-2">Contact us</h2>
              <p className="text-white/60 mb-[0px] md:mb-10">
                We're here to help you with any problems you may be having with
                our product.
              </p>

              <img
                src={subcontainer}
                alt="Movie Grid"
                className="w-full border-[2px] border-white/10 object-cover rounded hidden md:block"
              />
            </div>

            {/* Right - Contact Form */}
            <div className="w-full md:w-1/2 bg-[#111] p-[18px] sm:p-[24px] md:p-[32px] lg:p-[42px] rounded-md border-[2px] border-white/10">
              <h3 className="text-xl font-semibold mb-4">Send Message</h3>
              <p className="text-white/60 text-sm mb-6">
                We're here to help you with any problems you may be having with
                our product.
              </p>

              <form className="space-y-7 md:space-y-10 md:p-[18px]">
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="flex flex-col w-full">
                    <label htmlFor="fname" className="mb-[8px] font-normal">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="First Name"
                      id="fname"
                      className="flex-1 px-3 py-[10px] text-[14px] bg-[#1f1f1f] text-white placeholder-white/60 rounded-[2px] outline-none hover:border-[1px] hover:border-white/20"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label htmlFor="lname" className="mb-[8px] font-normal">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lname"
                      placeholder="Last Name"
                      className="flex-1 px-3 py-[10px] text-[14px] bg-[#1f1f1f] text-white placeholder-white/60 rounded-[2px] outline-none hover:border-[1px] hover:border-white/20"
                    />
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="mobileNumber"
                      className="mb-[8px] font-normal"
                    >
                      Mobile No.
                    </label>
                    <input
                      type="tel"
                      id="mobileNumber"
                      placeholder="Your Mobile No."
                      className="flex-1 px-3 py-[10px] text-[14px] bg-[#1f1f1f] text-white placeholder-white/60 rounded-[2px] outline-none hover:border-[1px] hover:border-white/20"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label htmlFor="email" className="mb-[8px] font-normal">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Email"
                      className="flex-1 px-3 py-[10px] text-[14px] bg-[#1f1f1f] text-white placeholder-white/60 rounded-[2px] outline-none hover:border-[1px] hover:border-white/20"
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="message" className="mb-[8px] font-normal">
                    Message
                  </label>
                  <textarea
                    rows="7"
					id="message"
                    placeholder="Enter your Message"
                    className="w-full p-3 bg-[#1f1f1f] text-[14px] text-white placeholder-white/60 rounded-[2px] outline-none hover:border-[1px] hover:border-white/20"
                  ></textarea>
                </div>

                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex justify-start mb-[8px]">
                    <input
                      type="checkbox"
                      id="terms"
                      className="mr-[8px] h-[20px] w-[20px] bg-white/20"
                    />
                    <label htmlFor="terms" className="text-sm text-white/60">
                      I agree with{" "}
                      <span className="text-white">Terms of Use</span> and{" "}
                      <span className="text-white">Privacy Policy</span>.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="watch-play-btn text-white px-8 py-2 rounded-[2px] transition"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
		<Subscribe_Now />
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
