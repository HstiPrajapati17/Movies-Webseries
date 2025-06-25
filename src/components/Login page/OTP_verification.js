import React, { useState } from "react";
import { Login_header, Main_bg } from "./Cmn_components";
import { Link } from "react-router-dom";
import { Cmn_btn } from "../Assets/Cmn_components/Cmn_components";
import OtpInput from "react-otp-input";

const OTP_verification = () => {
  const [otp, setOtp] = useState("");

  const handleOtpChange = (otp) => {
    setOtp(otp);
  };

  const handleVerify = () => {
    console.log("OTP:", otp);
  };
  return (
    <>
      <div className="forget-pass otp-verify relative overflow-x-hidden">
        <Main_bg />
        <div className="forget-pass-content z-[2] inter-font main-signin">
          {/* Header */}
          <Login_header />
          {/* Forget Password Form */}
          <div className="middle-part">
            <div className="container">
              <div className="bg-[#141414]">
                <div className="lg:px-[32px] sm:px-[22px] lg:py-[42px] sm:py-[24px] p-[12px] w-full lg:w-[594px]">
                  <div className="text-[#fff]/60 inter-font text-center w-full flex justify-center items-center flex-col">
                    <h2 className="text-white text-[19px] md:text-[24px] lg:text-[30px] font-semibold mb-[16px] md:mb-[24px]">
                      Verify OTP
                    </h2>
                    <p className="lg:text-[14px] text-[12px] font-normal leading-[22px] md:w-[75%] mb-[32px] w-[64%]">
                      We’ve sent a code to{" "}
                      <span className="text-white underline underline-[#fff]/60 pb-[4px]">
                        +1 56565 56565{" "}
                      </span>
                      Please enter it to verify your Mobile No.
                    </p>
                    <div className="row md:w-[380px] w-full input-part ">
                      <div className="flex justify-center items-center">
                        <OtpInput
                          value={otp}
                          onChange={handleOtpChange}
                          numInputs={4}
                          renderInput={(props) => (
                            <input
                              {...props}
                              placeholder="-"
                              className="h-[40px] w-[40px] mr-4 text-white"
                            />
                          )}
                        />
                      </div>
                      <div className="text-center mt-[28px] sm:mt-[48px] mb-[12px] rounded">
                        <Cmn_btn title={"Verify OTP"} onclick={handleVerify} />
                      </div>
                      <div className=" text-white/60 text-[12px] mt-[12px]">
                        <p>
                          Didn't received code? 
                          <Link
                            to={""}
                            className="underline text-white"
                          >  Resend</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OTP_verification;
