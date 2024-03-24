import React from "react";
import Header from "../../../components/header";
import BannerNav from "../mobileView/banner";
import PrivacyPolicy from "./PrivacyPolicy";
import Footer from "../footer";
import Bottom from "../bottom";

const Privacy = () => {
  return (
    <>
      <div className=" border rounded-md">
        <PrivacyPolicy />
      </div>
    </>
  );
};

export default Privacy;
