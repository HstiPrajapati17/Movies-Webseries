import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { Link } from "react-router-dom";

export const Cmn_btn = ({ title, btntype, onclick }) => {
  return (
    <>
      <button type={btntype} onClick={onclick} class="login-submit-btn text-white">
        <Link>{title}</Link>
      </button>
    </>
  );
};
