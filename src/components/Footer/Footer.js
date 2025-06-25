import React from "react";
import "../Footer/footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import scanner from "../Assets/Images/footer-scanner.png";

const Footer = () => {
  return (
    <>
      <div className="footer bg-[#141414] inter-font py-[30px]">
        <div className="mx-[26px] sm:mx-[40px] md:mx-[80px]">
          <div className="row border-b mt-[14px] border-[#fff]/40 pl-[-8px]">
            <div className="col-lg-5">
              <div className="logo">
                <h1 className="text-white text-[28px] sm:text-[30px] mb-[16px] leading-normal font-semibold inter-font">
                  LOGO
                </h1>
              </div>
              <p className="text-[14px] text-[#fff]/50 font-light w-[87%] mb-[18px]">
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry. Lorem ipsum has been the industry's standard dummy
                text ever since the{" "}
              </p>
              <div className="social-part pb-[44px]">
                <h4 className="text-white text-[18px] font-medium mb-[12px]">
                  Follow us for updates
                </h4>
                <div className="social-icons flex justify-start items-center gap-[12px]">
                  <Link className="border-[#fff]/40 border-[1px] p-[6px] bg-black rounded-[3px] text-[#fff] hover:border-[#fff] duration-300 ease-in-out">
                    <FaFacebookF />
                  </Link>
                  <Link className="border-[#fff]/40 border-[1px] p-[6px] bg-black rounded-[3px] text-[#fff] hover:border-[#fff] duration-300 ease-in-out">
                    <FaXTwitter />
                  </Link>
                  <Link className="border-[#fff]/40 border-[1px] p-[6px] bg-black rounded-[3px] text-[#fff] hover:border-[#fff] duration-300 ease-in-out">
                    <RiInstagramFill />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row flex flex-wrap">
                <div className="col-lg-3 col-md-3 col-12 mb-[18px] lg:mb-0">
                  <div className="title">
                    <h3 className="text-white text-[18px] font-normal mb-[18px] ">
                      Categories
                    </h3>
                  </div>
                  <div className="category-name">
                    <ul>
                      <li className="text-[#fff]/50 my-[6px]">Action</li>
                      <li className="text-[#fff]/50 my-[6px]">Adventure</li>
                      <li className="text-[#fff]/50 my-[6px]">Drama</li>
                      <li className="text-[#fff]/50 my-[6px]">Crime</li>
                      <li className="text-[#fff]/50 my-[6px]">comedy</li>
                      <li className="text-[#fff]/50 my-[6px]">Horror</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-12 mb-[18px] lg:mb-0">
                  <div className="title">
                    <h3 className="text-white text-[18px] font-normal mb-[14px]">
                      Company
                    </h3>
                  </div>
                  <div className="category-name">
                    <ul>
                      <li className="text-[#fff]/50 my-[6px]">
                        <Link to={"/aboutUs"}>About Us</Link>
                      </li>
                      <li className="text-[#fff]/50 my-[6px]">
                        <Link to={"/Contact-us"}>Contact Us</Link>
                      </li>
                      <li className="text-[#fff]/50 my-[6px]">
                        <Link to={"/faq"}>FAQs</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-12 mb-[18px] lg:mb-0">
                  <div className="title">
                    <h3 className="text-white text-[18px] font-normal mb-[14px]">
                      Install our Mobile App for Best Experience
                    </h3>
                  </div>
                  <div className="flex justify-start items-center ">
                    <div className="content lg:w-[55%]">
                      <p className="text-[#fff]/50 text-[14px] mb-[20px] font-light leading-[18px]">
                        Open camera or any QR scanner app on your mobile
                      </p>
                      <p className="text-[#fff]/50 text-[14px] mb-[20px] font-light leading-[18px]">
                        Scan this QR code and you’ll prompt a download link
                      </p>
                      <p className="text-[#fff]/50 text-[14px] flex items-center font-light leading-[18px]">
                        App Available on{" "}
                        <IoLogoGooglePlaystore className="text-[28px] ms-[12px]" />
                      </p>
                    </div>
                    <div className="scanner m-[18px] xl:m-0">
                      <img src={scanner} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom pt-[22px]">
            <div className="flex justify-between items-center flex-wrap text-[#fff]/50">
              <p className="mb-[12px] sm:mb-0">
                @2023 streamvib, All Rights Reserved
              </p>
              <div className="footer-end flex items-center flex-wrap">
                <p className="pr-[14px] border-r border-[#fff]/50">
                  Terms of Use
                </p>
                <p className="px-[14px] border-r border-[#fff]/50">
                  Privacy Policy
                </p>
                <p className="pl-[14px]">Cookie Policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
