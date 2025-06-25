import React from "react";
import { Link } from "react-router-dom";
import { Cmn_btn } from "../Assets/Cmn_components/Cmn_components";
import { Login_header, Main_bg } from "./Cmn_components";

const Password_Change = () => {
  return (
    <>
      <div className="forget-pass relative overflow-x-hidden">
        <Main_bg />
        <div className="forget-pass-content z-[2] inter-font main-signin">
          {/* Header */}
          <Login_header />
          {/* Change Passwod Form */}
            <div className="middle-part">
              <div className="container">
                <div className="bg-[#141414]">
                  <div className="lg:px-[32px] sm:px-[22px] lg:py-[42px] sm:py-[24px] p-[12px] w-full lg:w-[594px]">
                    <div className="text-[#fff]/60 inter-font text-center w-full flex justify-center items-center flex-col">
                      <h2 className="text-white text-[19px] md:text-[24px] lg:text-[30px] font-semibold mb-[16px] md:mb-[24px]">
                        Change password
                      </h2>
                      <p className="lg:text-[14px] text-[12px] font-normal leading-[22px] w-full mb-[32px]">
                        Protect your account with a unique password atleast 6 characters long.
                      </p>
                      <div className="row md:w-[380px] w-full input-part">
                        <div className="flex flex-col justify-start text-left w-full mb-[16px]">
                          <label
                            className="text-[14px] font-normal text-white mb-[8px]"
                            htmlFor="email"
                          >
                            Email (Current)
                          </label>
                          <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="example123@gmail.com"
                            className="rounded px-3 py-2 text-black"
                          />
                        </div>
                        <div className="flex flex-col justify-start text-left w-full mb-[16px]">
                          <label
                            className="text-[14px] font-normal text-white mb-[8px]"
                            htmlFor="New_pass"
                          >
                            New Password
                          </label>
                          <input
                            type="password"
                            id="New_pass"
                            name="new-pass"
                            placeholder="New Password"
                            className="rounded px-3 py-2 text-black"
                          />
                        </div>
                        <div className="flex flex-col justify-start text-left w-full mb-[16px]">
                          <label
                            className="text-[14px] font-normal text-white mb-[8px]"
                            htmlFor="c_pass"
                          >
                            Confirm Password
                          </label>
                          <input
                            type="password"
                            id="c_pass"
                            name="confirm-pass"
                            placeholder="Confirm Password"
                            className="rounded px-3 py-2 text-black"
                          />
                        </div>
                        <div className="text-center mt-[28px] sm:mt-[48px] mb-[12px] rounded">
                          <Cmn_btn title={"Change Password"} />
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

export default Password_Change;
