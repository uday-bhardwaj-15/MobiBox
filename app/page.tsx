import AdBanner from "@/components/AdBanner";
import LandingPage from "@/components/landingPage";
import React from "react";

const page = () => {
  return (
    <div>
      <LandingPage />
      <AdBanner
        dataAdSlot="f08c47fec0942fa0"
        dataAdFormat="auto"
        dataFullWidthResponsive={true}
      />
    </div>
  );
};

export default page;
