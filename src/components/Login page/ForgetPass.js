import React, { useState } from "react";
import { Login_header, Main_bg } from "./Cmn_components";
import { Link } from "react-router-dom";
import { Cmn_btn } from "../Assets/Cmn_components/Cmn_components";

const ForgetPass = () => {
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleEmailSend = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    } else if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setIsEmailSent(true);
  };

  return (
    <>
      <div className="forget-pass relative overflow-x-hidden">
        <Main_bg />
        <div className="forget-pass-content z-[2] inter-font main-signin">
          {/* Header */}
          <Login_header />
          {/* Forget Password Form */}
          {!isEmailSent && (
            <div className="middle-part">
              <div className="container">
                <div className="bg-[#141414]">
                  <div className="lg:px-[32px] sm:px-[22px] lg:py-[42px] sm:py-[24px] p-[12px] w-full lg:w-[594px]">
                    <div className="text-[#fff]/60 inter-font text-center w-full flex justify-center items-center flex-col">
                      <h2 className="text-white text-[19px] md:text-[24px] lg:text-[30px] font-semibold mb-[16px] md:mb-[24px]">
                        Update password, email or phone
                      </h2>
                      <p className="lg:text-[14px] text-[12px] font-normal leading-[22px] w-full md:w-[75%] mb-[32px]">
                        We will send you an email with instructions on how to
                        reset your password
                      </p>
                      <div className="row md:w-[380px] w-full input-part">
                        <div className="flex flex-col justify-start text-left w-full">
                          <label
                            className="text-[14px] font-normal text-white mb-[8px]"
                            htmlFor="email"
                          >
                            Email or Phone
                          </label>
                          <input
                            type="text"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            className="rounded px-3 py-2"
                          />
                          {error && (
                            <p className="text-red-500 text-[12px] mt-1">
                              {error}
                            </p>
                          )}
                        </div>
                        <div className="text-center mt-[28px] sm:mt-[48px] mb-[12px] rounded">
                          <Cmn_btn
                            title={"Email me"}
                            onclick={handleEmailSend}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Email Sent Message */}
          {isEmailSent && (
            <div className="middle-part">
              <div className="container">
                <div className="bg-[#141414]">
                  <div className="lg:px-[32px] sm:px-[22px] lg:py-[42px] sm:py-[24px] p-[12px] w-full lg:w-[594px]">
                    <div className="text-[#fff]/60 inter-font text-center w-full flex justify-center items-center flex-col">
                      <h3 className="text-white text-[19px] md:text-[24px] lg:text-[30px] font-semibold mb-[16px] md:mb-[24px]">
                        Email Sent
                      </h3>
                      <p className="lg:text-[14px] text-[12px] font-normal leading-[22px] w-full md:w-[75%] mb-[32px]">
                        An email with instructions on how to reset your password
                        has been sent to{" "}
                        <strong>
                          {email.replace(/(.{2}).+(@.+)/, "$1********$2")}
                        </strong>
                        . Check your spam or junk folder if you don't see the
                        email in your inbox.
                      </p>
                      <p className="lg:text-[14px] text-[12px] font-normal leading-[22px] w-full md:w-[75%] mb-[32px]">
                        If you no longer have access to this email account,
                        please <Link className="text-white">Contact us</Link>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ForgetPass;
