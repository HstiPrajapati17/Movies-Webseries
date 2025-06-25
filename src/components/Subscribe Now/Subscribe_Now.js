import React from "react";
import bg from "../Assets/Images/subscribe-bg.png";

const Subscribe_Now = () => {
  return (
    <div className="relative w-full max-w-screen mx-auto rounded-[8px] border-[1px] border-white/20 overflow-hidden bg-black min-h-[350px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={bg}
          alt="Subscribe Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Overlay - Always Centered */}
      <div className="relative z-10 px-6 md:px-[75px] flex items-center justify-center min-h-[350px]">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-6">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 lg:text-left">
            <h2 className="text-white text-2xl sm:text-3xl font-bold mb-3">
              Subscribe Now
            </h2>
            <p className="text-white/60 text-base">
              This is a clear and concise call to action that encourages users
              to sign up for a free trial of StreamVibe.
            </p>
          </div>

          {/* Input Section */}
          <div className="w-full lg:w-1/2">
            <form className="flex flex-col sm:flex-row w-full bg-white/10 border-[1px] border-white/30 rounded-[3px] overflow-hidden">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-4 py-[12px] bg-transparent text-white placeholder-white/70 focus:outline-none"
              />
              <button
                type="submit"
                className="watch-play-btn w-full sm:w-auto px-[48px] sm:px-[56px] py-[12px] bg-[#007bff] hover:bg-blue-600 text-white font-medium transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe_Now;
