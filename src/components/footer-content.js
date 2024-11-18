import React from "react";
import FooterMarqueeButton from "../components/footer-marquee-button";

export default function FooterContent() {
  return (
    <div className="flex flex-col md:bg-[#efefef] bg-black md:h-full md:w-full md:pt-20 justify-around md:items-center items-stretch">
      <Section1 />
      <Section2 />
    </div>
  );
}

const Section1 = () => {
  return (
  <div className="md:pb-0 pb-5"><FooterMarqueeButton /></div>
)};

const Section2 = () => {
  return (
    <div id="folio" className="flex text-white md:justify-between justify-center md:items-end mix-blend-exclusion text-sm pb-2">
      <p>©FOLIO2024</p>
    </div>
  );
};
