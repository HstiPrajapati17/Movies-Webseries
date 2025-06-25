import React from "react";
import { Creat_Account_large, Create_Account_small } from "./Cmn_components";

const Creat_Account = () => {
  return (
    <>              
      <div className="main-signin main-create-ac">
        {/* login-page-1 */}
        <Creat_Account_large />
        {/* small-screen-page-2 */}
        <Create_Account_small />
      </div>
    </>
  );
};
export default Creat_Account;