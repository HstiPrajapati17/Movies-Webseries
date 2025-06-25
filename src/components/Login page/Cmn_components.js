import React, { useState } from "react";
import { FaEyeSlash, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import container_bg from "../Assets/Images/Sub Container (1).png";
import gradient_bg from "../Assets/Images/linear gradient shade.png";
import bg1 from "../Assets/Images/Image Container1.png";
import bg2 from "../Assets/Images/Image Container2.png";
import bg3 from "../Assets/Images/Image Container3.png";
import bg4 from "../Assets/Images/Image Container4.png";
import { Cmn_btn } from "../Assets/Cmn_components/Cmn_components";
import user_icon from "../Assets/Images/user-icon.png"

export const Large_screen_form1 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;

  const validate = () => {
    const newErrors = {};

    // email validation
    if (!email) {
      newErrors.email = "Email is Required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Email Formate is Invalid";
    }

    // password validation
    if (!password) {
      newErrors.password = "Password is Required";
    } else if (!passwordRegex.test(password)) {
      newErrors.password = "Password is too common. Choose a stronger one";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      alert("Signin Successfully !");
    }
  };
  return (
    <>
      <div className="login-bg h-screen z-[-3] relative"></div>
      <div className="login-page bg-cover bg-center flex justify-center z-[-2]">
        <div className="container">
          <div className="h-[680px] w-[850px] gradient-bg z-[1]">
            <img src={gradient_bg} className=" object-cover h-full relative" />
            <div className="signin-content inter-font inter-font absolute">
              <div className="form-title text-center mb-[28px]">
                <h2 className="text-[28px] font-semibold text-white mb-[4px]">
                  Sign in
                </h2>
                <p className="text-[14px] font-normal text-[#fff]/50">
                  Welcome back! Please sign in.
                </p>
              </div>
              <div className="form-content flex flex-col justify-between items-center">
                <div className="content-1">
                  <div class="row ml-[12px]">
                    <form onSubmit={handleSubmit}>
                      <div className="col-lg-12 col-md-12 col-12 flex flex-col mb-[16px]">
                        <label className="text-[14px] font-normal text-white/80 mb-[8px]">
                          Email or Phone
                        </label>
                        <input
                          type="text"
                          id="email"
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email or Phone"
                          className="rounded"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm">{errors.email}</p>
                        )}
                      </div>
                      <div className="col-lg-12 col-md-12 col-12 ">
                        <div className="form-group relative flex flex-col">
                          <label className="text-[14px] font-normal text-white/80 mb-[8px]">
                            Password
                          </label>
                          <input
                            type="password"
                            placeholder="Password"
                            name="pass"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="rounded"
                          />
                          <span className="input-group-btn input-eye-btn absolute top-[50%] right-0">
                            <button
                              className="btn btn-default reveal"
                              type="button"
                            >
                              <FaEyeSlash className="text-[#a5a5a5]" />
                            </button>
                          </span>
                        </div>
                        {errors.password && (
                          <p className="text-red-500 text-sm">
                            {errors.password}
                          </p>
                        )}
                      </div>
                      <div className="col-lg-12 col-md-12 col-12 flex flex-col">
                        <div className="check-box-wrap flex justify-between flex-wrap items-center relative">
                          <div className="input-box flex items-center mt-[6px]">
                            <input
                              type="checkbox"
                              id="fruit4"
                              name="fruit-4"
                              value="Strawberry"
                              className="checkbox mr-[8px]"
                            />
                            <label
                              for="fruit4"
                              className="text-[12px] text-[#fff]/60 w-full"
                            >
                              Remember Me
                            </label>
                          </div>
                          <div className="forget-btn">
                            <Link
                              to={"/forget-ac"}
                              className="text-[11px] mb-[40px] font-normal text-[#ff0000]"
                            >
                              Forgot Password?
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-12 text-center mt-[22px] sm:mt-[38px]">
                        <Cmn_btn title={"Login"} btntype={"submit"} />
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-12 col-md-12 col-12 flex items-center justify-center my-[40px]">
                    <div className="flex-1 ml-[12px] h-[1px] bg-gradient-to-l from-transparent via-[#3d3d3d] to-[#1a1a1a]"></div>
                    <span className="px-[10px] bg-[#0f0f0f] text-white/80 uppercase inter-font text-sm font-normal">
                      or
                    </span>
                    <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#3d3d3d] to-[#1a1a1a]"></div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-12">
                    <div className="flex justify-between items-center ml-[12px]">
                      <button className="flex justify-center items-center py-[10px] px-[24px] border-[1px] rounded-[6px] border-[#fff]/50 duration-300 hover:border-[#fff]">
                        <FcGoogle className="text-[20px]" />
                        <span className="text-white ml-[8px] inter-font font-normal text-[12px]">
                          Google
                        </span>
                      </button>
                      <button className="flex justify-center items-center py-[10px] px-[24px] border-[1px] rounded-[6px] border-[#fff]/50 duration-300 hover:border-[#fff]">
                        <FaFacebook className="text-[20px] text-[#1877F2] rounded-full border-0 bg-white" />
                        <span className="text-white ml-[8px] text-[12px] inter-font font-normal">
                          Facebook
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="content-end text-white/60 text-[10px]  lg:mt-[130px]">
                  <p>
                    Didn't have any account?{" "}
                    <Link to={"/create-ac"} className="underline text-white">
                      Create account
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[680px] w-auto container-bg absolute top-[50%] left-[39%]">
            <img src={container_bg} className="object-cover h-full" />
          </div>
        </div>
      </div>
    </>
  );
};
export const Small_screen_form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;

  const validate = () => {
    const newErrors = {};

    // email validation
    if (!email) {
      newErrors.email = "Email is Required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Email Formate is Invalid";
    }

    // password validation
    if (!password) {
      newErrors.password = "Password is Required";
    } else if (!passwordRegex.test(password)) {
      newErrors.password = "Password is too common. Choose a stronger one";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      alert("Signin Successfully !");
    }
  };

  return (
    <>
      <div className="login-bg2 h-screen z-[-3] relative hidden"></div>
      <div className="login-page2 bg-[#141414] p-[42px] rounded-lg hidden">
        <div className="signin-content2 inter-font">
          <div className="form-title text-center mb-[28px]">
            <h2 className="text-[28px] font-semibold text-white mb-[4px]">
              Sign in
            </h2>
            <p className="text-[14px] font-normal text-[#fff]/50">
              Welcome back! Please sign in.
            </p>
          </div>
          <div className="form-content w-full flex flex-col justify-between items-center">
            <div className="content-1 w-full">
              <div className="row ml-[12px]">
                <form onSubmit={handleSubmit}>
                  <div className="col-lg-12 col-md-12 col-12 flex flex-col mb-[16px]">
                    <label
                      className="text-[14px] font-normal text-white/80 mb-[8px]"
                      for="email"
                    >
                      Email or Phone
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email or phone"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email or Phone"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-[11px]">{errors.email}</p>
                    )}
                  </div>
                  <div className="col-lg-12 col-md-12 col-12 ">
                    <div className="form-group relative flex flex-col">
                      <label
                        className="text-[14px] font-normal text-white/80 mb-[8px]"
                        for="pass"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        id="pass"
                        name="pass"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                      />
                      <span className="input-group-btn input-eye-btn absolute top-[50%] right-0">
                        <button
                          className="btn btn-default reveal"
                          type="button"
                        >
                          <FaEyeSlash className="text-[#a5a5a5]" />
                        </button>
                      </span>
                      {errors.password && (
                        <p className="text-red-500 text-[11px]">
                          {errors.password}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-12 flex flex-col">
                    <div className="check-box-wrap flex justify-between flex-wrap items-center relative">
                      <div className="input-box flex items-center mt-[6px]">
                        <input
                          type="checkbox"
                          id="fruit4"
                          name="fruit-4"
                          value="Strawberry"
                          className="checkbox mr-[8px]"
                        />
                        <label
                          for="fruit4"
                          className="text-[12px] text-[#fff]/60 w-full"
                        >
                          Remember Me
                        </label>
                      </div>
                      <div className="forget-btn">
                        <Link
                          to={"/forget-ac"}
                          className="text-[11px] mb-[40px] font-normal text-[#ff0000]"
                        >
                          Forgot Password?
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-12 text-center mt-[22px] sm:mt-[38px]">
                    <Cmn_btn title={"Login"} btntype={"submit"} />
                  </div>
                </form>
              </div>
              <div className="col-lg-12 col-md-12 col-12 flex items-center justify-center my-[22px] sm:my-[40px]">
                <div className="flex-1 or-part ml-[12px] h-[1px] bg-gradient-to-l from-transparent via-[#3d3d3d] to-[#1a1a1a]"></div>
                <span className="px-[10px] md:bg-[#0f0f0f]  text-white uppercase inter-font text-sm font-normal">
                  or
                </span>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#3d3d3d] to-[#1a1a1a]"></div>
              </div>
              <div className="col-12">
                <div className="flex justify-between social-part items-center ml-[12px] gap-[12px] sm:gap-7">
                  <button className="flex justify-center items-center py-[6px] sm:py-[10px] px-[12px] sm:px-[24px] md:mb-0 mb-[12px] border-[1px] rounded-[6px] border-[#fff]/50 duration-300 hover:border-[#fff]">
                    <FcGoogle className="text-[20px]" />
                    <span className="text-white ml-[8px] inter-font font-normal text-[12px]">
                      Google
                    </span>
                  </button>
                  <button className="flex justify-center items-center py-[6px] sm:py-[10px] px-[12px] sm:px-[24px] md:mb-0 mb-[12px] border-[1px] rounded-[6px] border-[#fff]/50 duration-300 hover:border-[#fff]">
                    <FaFacebook className="text-[20px] text-[#1877F2] rounded-full border-0 bg-white" />
                    <span className="text-white ml-[8px] text-[12px] inter-font font-normal">
                      Facebook
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="content-end text-white/60 text-[10px]">
              <p>
                Didn't have any account?
                <Link to={"/create-ac"} className="underline text-white">
                  Create account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export const Main_bg = () => {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <div className="main-bg2 bg-black absolute inset-0 z-[-2]">
          <div className="w-full h-full flex flex-col justify-center items-center gap-[12px] relative bg-cover">
            <img src={bg1} className="w-full h-full" />
            <img src={bg2} className="w-full h-full" />
            <img src={bg3} className="w-full h-full" />
            <img src={bg4} className="w-full h-full" />
          </div>
          <div className="upside-shade z-[-1]">
            <div className="shade1 fixed"></div>
            <div className="shade2 fixed"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export const Login_header = () => {
  return (
    <>
      <div className="header w-screen bg-black p-[12px] sm:p-[18px] h-auto absolute top-0 left-0">
        <div className="container">
          <div className="flex justify-between items-center">
            <h1 className="text-white text-[32px] font-semibold">LOGO</h1>
            <div className="user flex justify-center items-center">
              <img src={user_icon} className="h-[20px]" />
              <h3 className="text-[16px] ml-[4px] bg-gradient-to-r from-[#00C6FF] to-[#0072FF] bg-clip-text text-transparent">
                <Link>Sign in</Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export const Creat_Account_large = () => {
  return (
    <>
      <div className="login-bg h-screen z-[-3] relative"></div>
      <div className="login-page create-ac bg-cover bg-center flex justify-center z-[-2]">
        <div className="container">
          <div className="h-[680px] w-[976px] gradient-bg z-[1]">
            <img src={gradient_bg} className=" object-cover h-full relative" />
            <div className="create-ac-content inter-font inter-font absolute">
              <div className="form-title text-center mb-[28px]">
                <h2 className="text-[20px] md:text-[24px] font-semibold text-white md:mb-[4px] ">
                  Create Account
                </h2>
                <p className="text-[11px] font-normal text-[#fff]/50">
                  Register your account easily enter your email below
                </p>
              </div>
              <div className="form-content flex flex-col justify-between items-center">
                <div className="content-1">
                  <div class="row ml-[12px]">
                    <form>
                      <div className="col-lg-12 col-md-12 col-12 flex ">
                        <div className="col-lg-6 col-md-12 col-12 w-[48%] mr-[14px] flex flex-col mb-[16px]">
                          <label
                            className="text-[13px] font-normal text-white/80 mb-[8px]"
                            for="fname"
                          >
                            First Name
                          </label>
                          <input
                            type="text"
                            id="fname"
                            name="firstname"
                            placeholder="First name"
                            className="rounded"
                          />
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 w-[48%]">
                          <div className="form-group relative flex flex-col">
                            <label className="text-[13px] font-normal text-white/80 mb-[8px]">
                              Last Name
                            </label>
                            <input
                              type="text"
                              placeholder="Last name"
                              name="lastname"
                              id="lname"
                              className="rounded"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-12 w-full">
                        <div className="form-group mob-no relative w-full mb-[16px]">
                          <label className="text-[13px] font-normal text-white/80 mb-[8px]">
                            Mobile No.
                          </label>
                          <div className="flex items-center w-full">
                            <input
                              type="tel"
                              placeholder="Mobile Number"
                              maxLength={10}
                              pattern="[0-9]{10}"
                              name="mobile"
                              id="mobile"
                              className="pr-[8px] pl-[12px] py-[9px] text-[14px] rounded outline-none relative w-full"
                            />
                            <span className="text-white px-2 pb-[2px] text-[14px] absolute border-r border-[#fff]/40 mr-2">
                              +91
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-12 w-full">
                        <div className="form-group relative w-full flex flex-col mb-[16px]">
                          <label className="text-[13px] font-normal text-white/80 mb-[8px]">
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="mail"
                            placeholder="Email"
                            className="pr-[8px] py-[9px] text-[14px] rounded outline-none relative w-full"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-12 ">
                        <div className="form-group relative flex flex-col">
                          <label className="text-[13px] font-normal text-white/80 mb-[8px]">
                            Password
                          </label>
                          <input
                            type="password"
                            placeholder="Password"
                            name="pass"
                            className="rounded"
                          />
                          <span className="input-group-btn create-ac-eyebtn top-[50%] right-0 absolute">
                            <button
                              className="btn btn-default reveal"
                              type="button"
                            >
                              <FaEyeSlash className="text-[#a5a5a5]" />
                            </button>
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-12 text-center ac-confirm-btn mt-[22px] sm:mt-[28px]">
                        <Cmn_btn title={"Create Account"} btntype={"submit"} />
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-12 col-md-12 col-12 flex items-center justify-center or-content mt-[18px] mb-[18px] ml-[8px] mr-[8px]">
                    <div className="flex-1 ml-[12px] h-[1px] bg-gradient-to-l from-transparent via-[#3d3d3d] to-[#1a1a1a]"></div>
                    <span className="px-[10px] bg-[#0f0f0f] text-white/80 uppercase inter-font text-sm font-normal">
                      or
                    </span>
                    <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#3d3d3d] to-[#1a1a1a] mr-[10px]"></div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-12 mb-[18px] social-ac-part">
                    <div className="flex justify-between items-center ">
                      <button className="flex justify-center items-center ml-[26px] py-[10px] px-[24px] border-[1px] rounded-[6px] border-[#fff]/50 duration-300 hover:border-[#fff]">
                        <FcGoogle className="text-[20px]" />
                        <span className="text-white ml-[8px] inter-font font-normal text-[12px]">
                          Google
                        </span>
                      </button>
                      <button className="flex justify-center items-center py-[10px] px-[24px] border-[1px] rounded-[6px] border-[#fff]/50 duration-300 hover:border-[#fff]">
                        <FaFacebook className="text-[20px] text-[#1877F2] rounded-full border-0 bg-white" />
                        <span className="text-white ml-[8px] text-[12px] inter-font font-normal">
                          Facebook
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className=" text-white/60 text-[10px] ">
                  <p>
                    Already have an account?
                    <Link to={"/"} className="underline text-white ml-[6px]">
                      Sign in
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[680px] w-auto container-bg absolute top-[50%] left-[38%]">
            <img src={container_bg} className="object-cover h-full" />
          </div>
        </div>
      </div>
    </>
  );
};
export const Create_Account_small = () => {
  return (
    <>
      <div className="login-bg2 create-ac-small h-screen z-[-3] relative hidden"></div>
      <div className="login-page2 bg-[#141414] p-[24px] rounded-lg hidden w-full">
        <div className="create-ac-content2 inter-font w-full">
          <div className="form-title text-center mb-[28px] w-full">
            <h2 className="text-[26px] font-semibold text-white mb-[4px]">
              Create Account
            </h2>
            <p className="text-[12px] font-normal text-[#fff]/50">
              Register your account easily enter your email below
            </p>
          </div>
          <div className="form-content2 w-full flex flex-col justify-between items-center row pr-0">
            <form className="row w-full pr-0">
              <div className="col-sm-6 col-12 mb-[14px]">
                <div className="flex flex-col">
                  <label
                    className="text-[14px] font-normal text-white/80 mb-[8px]"
                    for="fname"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="First name"
                    className="rounded"
                  />
                </div>
              </div>
              <div className="col-sm-6 col-12">
                <div className="flex flex-col mb-[16px]">
                  <label className="text-[14px] font-normal text-white/80 mb-[8px]">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Last name"
                    name="lastname"
                    id="lname"
                    className="rounded"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="flex flex-col">
                  <div className="form-group mob-no relative w-full mb-[16px]">
                    <label className="text-[14px] font-normal text-white/80 mb-[8px]">
                      Mobile No.
                    </label>
                    <div className="flex items-center w-full">
                      <input
                        type="tel"
                        placeholder="Mobile Number"
                        maxLength={10}
                        pattern="[0-9]{10}"
                        name="mobile"
                        id="mobile"
                        className="pr-[8px] pl-[52px] py-[9px] text-[14px] rounded outline-none relative w-full"
                      />
                      <span className="text-white px-2 pb-[2px] text-[14px] absolute border-r border-[#fff]/40 mr-2">
                        +91
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="flex flex-col">
                  <div className="form-group relative w-full mb-[16px]">
                    <label className="text-[14px] font-normal text-white/80 mb-[8px]">
                      Email
                    </label>
                    <input
                      type="email"
                      name="mail"
                      id="mail"
                      placeholder="Email"
                      className="pr-[8px] py-[9px] text-[14px] rounded outline-none relative w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="flex flex-col">
                  <div className="form-group relative w-full mb-[16px]">
                    <label className="text-[14px] font-normal text-white/80 mb-[8px]">
                      Password
                    </label>
                    <input
                      type="password"
                      name="pass"
                      id="pass"
                      placeholder="Password"
                      className="pr-[8px] py-[9px] text-[14px] rounded outline-none relative w-full"
                    />
                    <span className="input-group-btn create-ac-eyebtn top-[50%] right-0 absolute">
                      <button className="btn btn-default reveal" type="button">
                        <FaEyeSlash className="text-[#a5a5a5]" />
                      </button>
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-center my-[20px]">
                <Cmn_btn title={"Create Account"} btntype={"submit"} />
              </div>
            </form>
            <div className="col-lg-12 col-md-12 col-12 flex items-center justify-center mb-[16px] ml-[8px] mr-[8px]">
              <div className="flex-1 ml-[12px] h-[1px] bg-gradient-to-l from-transparent via-[#3d3d3d] to-[#1a1a1a]"></div>
              <span className="px-[10px] bg-[#141414] text-white/80 uppercase inter-font text-sm font-normal">
                or
              </span>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#3d3d3d] to-[#1a1a1a] mr-[10px]"></div>
            </div>
            <div className="col-12">
              <div className="flex justify-between social-part items-center ml-[12px] gap-[12px] sm:gap-7">
                <button className="flex justify-center items-center py-[6px] sm:py-[10px] px-[12px] sm:px-[24px] md:mb-0 mb-[12px] border-[1px] rounded-[6px] border-[#fff]/50 duration-300 hover:border-[#fff]">
                  <FcGoogle className="text-[20px]" />
                  <span className="text-white ml-[8px] inter-font font-normal text-[12px]">
                    Google
                  </span>
                </button>
                <button className="flex justify-center items-center py-[6px] sm:py-[10px] px-[12px] sm:px-[24px] md:mb-0 mb-[12px] border-[1px] rounded-[6px] border-[#fff]/50 duration-300 hover:border-[#fff]">
                  <FaFacebook className="text-[20px] text-[#1877F2] rounded-full border-0 bg-white" />
                  <span className="text-white ml-[8px] text-[12px] inter-font font-normal">
                    Facebook
                  </span>
                </button>
              </div>
            </div>
            <div className="text-white/60 text-[10px] text-center">
              <p>
                Already have an account?
                <Link to={"/"} className="underline text-white ml-[6px]">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
