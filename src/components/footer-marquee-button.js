"use client";

import React from "react";
import Smile from "../components/smile";
import FooterMarquee from "../components/footer-marquee";

const FooterMarqueeButton = () => {
  return (
    <div className="w-full px-2 relative">
      <div className="watcher w-full md:border-black border-2 md:text-black text-white rounded-full">
        <a href="mailto:gattiandrea@tutanota.com" target="_blank" rel="noopener noreferrer">
          <FooterMarquee baseVelocity={100}>
            <div className="w-full flex items-center md:gap-16 gap-5 md:p-8 p-2">
              <span className="text-2xl sm:text-5xl">CONTACT ME</span>
              <Smile className="w-6 h-6 md:w-12 md:h-12" fill="currentColor" />
              <span className="text-2xl sm:text-5xl">CONTACT ME</span>
              <Smile className="w-6 h-6 md:w-12 md:h-12" fill="currentColor" />
              <span className="text-2xl sm:text-5xl">CONTACT ME</span>
              <Smile className="w-6 h-6 md:w-12 md:h-12" fill="currentColor" />
              <span className="text-2xl sm:text-5xl">CONTACT ME</span>
              <Smile className="w-6 h-6 md:w-12 md:h-12" fill="currentColor" />
            </div>
          </FooterMarquee>
        </a>
      </div>
    </div>
  );
};

export default FooterMarqueeButton;
