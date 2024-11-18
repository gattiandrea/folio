"use client";
import FooterContent from "./footer-content"

export default function Footer() {
  return (
    <div
      className=" md:h-screen relative"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="md:h-screen md:w-full md:fixed md:bottom-0 md:mt-0 mt-16">
        <FooterContent />
      </div>
    </div>
  );
}
