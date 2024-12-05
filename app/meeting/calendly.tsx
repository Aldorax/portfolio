"use client";

import { InlineWidget } from "react-calendly";

const Calendly = () => {
  return (
    <div className="w-full ">
      <InlineWidget
        styles={{ height: "1000px" }}
        url="https://calendly.com/legadax/30min?preview_source=et_card"
      />
    </div>
  );
};

export default Calendly;
