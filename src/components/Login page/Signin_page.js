import React from "react";
import { Large_screen_form1, Small_screen_form } from "./Cmn_components";

const Signin_page = () => {
  return (
    <>              
      <div className="main-signin">
        {/* login-page-1 */}
        <Large_screen_form1 />
        {/* small-screen-page-2 */}
        <Small_screen_form />
      </div>
    </>
  );
};
export default Signin_page;
