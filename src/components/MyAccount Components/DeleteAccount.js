import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import OtpInput from "react-otp-input"; // ✅ Import

const DeleteAccount = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otp, setOtp] = useState("");

  const handleDeleteAccount = () => {
    setShowModal(true);
  };

  const confirmDelete = () => {
    setShowModal(false);
    setShowOtpModal(true);
  };

  const cancelDelete = () => {
    setShowModal(false);
    setShowOtpModal(false);
  };

  const handleOtpChange = (value) => {
    setOtp(value);
  };

  const verifyOtp = () => {
    console.log("Verifying OTP:", otp);
    setShowOtpModal(false);
  };

  return (
    <div className="bg-[#141414] border-[2px] border-white/20 text-white p-8 rounded-lg relative">
      <h2 className="text-xl font-semibold mb-6">
        When you deactivate your account
      </h2>

      <ul className="space-y-4 mb-[60px]">
        {[
          "Your watch history and saved content will be permanently deleted.",
          "You will be logged out of all devices.",
          "Your subscription (if active) will be cancelled.",
          "You will no longer receive recommendations, offers, or notifications from us.",
          "Your profile and preferences will not be recoverable.",
        ].map((item, idx) => (
          <li className="flex items-start" key={idx}>
            <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span className="text-gray-300">{item}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={handleDeleteAccount}
        className="watch-play-btn text-white font-normal py-[12px] px-4 rounded-[2px] duration-200 w-[40%]"
      >
        Delete Account
      </button>

      {/* First Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-[#141414] p-6 text-white w-[400px]">
            <div className="flex justify-between items-center border-b-[1px] border-white/10 pb-[12px] mb-[12px]">
              <h1 className="text-lg font-semibold ">Change Password</h1>
              <button
                onClick={cancelDelete}
                className="text-white hover:text-red-500 transition duration-200"
              >
                <AiOutlineClose className="text-xl" />
              </button>
            </div>
            <div className="flex flex-col relative m-[22px]">
              <label className="text-white/80 text-sm mb-1">
                Email or Phone
              </label>
              <input
                type="text"
                placeholder="Email or Phone"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#1e1e1e] text-[14px] text-white px-4 py-2 rounded-[2px] hover:border-[1px] hover:border-white/20 focus:outline-none focus:border-white/40"
              />
              <div className="flex justify-between mt-[32px]">
                <button
                  onClick={cancelDelete}
                  className="bg-white/10 hover:bg-white/20 text-[14px] text-white px-[46px] py-2 rounded-[2px] "
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDelete}
                  className="watch-play-btn text-white text-[14px] px-[32px] py-2 rounded-[2px]"
                >
                  Yes, Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* OTP Modal */}
      {showOtpModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-[#141414] p-[28px] text-white w-[400px] rounded-lg">
            <div className="flex justify-between items-center border-b border-white/10 pb-3 mb-4">
              <h1 className="text-lg font-semibold">OTP Verification</h1>
              <button onClick={cancelDelete}>
                <AiOutlineClose className="text-xl text-white hover:text-red-500" />
              </button>
            </div>
            <p className="text-sm text-white/60 mb-4 m-[22px] text-center">
              We’ve sent a code to{" "}
              <span className="text-white underline">
                {email || "your email"}
              </span>
              . Please enter it to verify your Email.
            </p>
            <div className="flex justify-center items-center mb-6 delete-otp">
              <OtpInput
                value={otp}
                onChange={handleOtpChange}
                numInputs={4}
                renderInput={(props) => (
                  <input
                    {...props}
                    placeholder="-"
                    className="h-[40px] w-[40px] mr-4 text-white bg-white/10"
                  />
                )}
              />
            </div>
            <div className="flex justify-center w-full">
              <button
                onClick={verifyOtp}
                className="watch-play-btn text-sm text-white w-full py-2 rounded-[2px]"
              >
                Delete Account
              </button>
            </div>
            <p className="text-white/60 text-center text-[14px] mt-[16px]">
              Didn't receive code? <span className="text-white underline"> Resend</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteAccount;
