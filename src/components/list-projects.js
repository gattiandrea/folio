"use client";

import Link from "next/link";
import { useState } from "react";

export default function ListProjects({
  heading,
  imgSrc,
  href,
  startDate,
  videoSrc,
  category,
}) {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [previousImage, setPreviousImage] = useState(null);

  // Animation variants for swipe effect
  const imageVariants = {
    initial: { y: "0%", opacity: 0 },
    enter: { y: "0%", opacity: 1 },
    exit: { y: "0%", opacity: 0 },
  };

  // Handle hover enter
  const handleMouseEnter = () => {
    setPreviousImage(hoveredImage); // Set the previous image before updating to new one
    setHoveredImage(imgSrc);
  };

  // Handle hover leave
  const handleMouseLeave = () => {
    setPreviousImage(null);
    setHoveredImage(null);
  };

  return (
    <div className="relative flex items-start md:space-x-4">
      {/* Right Column for Hover Image/Video - Visible only on Desktop */}
      <div className="w-1/4 md:block hidden relative">
        {/* Wrapper for media content with absolute positioning */}
        <div className="absolute hidden md:block w-[360px] h-[219px] overflow-hidden">
          {/* Display the previous image with exit animation */}
          {previousImage && (
            <img
              key={`previous-${previousImage}`}
              src={previousImage}
              alt={`Previous image for ${heading}`}
              className="h-full w-full rounded-lg object-cover absolute top-0 left-0"
            />
          )}

          {/* Display the current image or video with enter animation */}
          {hoveredImage &&
            (videoSrc ? (
              <video
                key={`video-${videoSrc}`}
                src={videoSrc}
                autoPlay
                loop
                muted
                playsInline
                alt={`Video preview for ${heading}`}
                className="h-full w-full rounded-lg object-cover absolute top-0 left-0"
              />
            ) : (
              <img
                key={`image-${imgSrc}`}
                src={hoveredImage}
                alt={`Image for ${heading}`}
                className="h-full w-full rounded-lg object-cover absolute top-0 left-0"
              />
            ))}
        </div>
      </div>

      {/* Project Text Column */}
      <div
        className="flex-grow items-center transition-colors duration-200 border-transparent hover:border-neutral-500 hover:border-b"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link
          href={href}
          className="w-full flex flex-row flex-nowrap whitespace-nowrap overflow-hidden items-center justify-center md:gap-5"
        >
          <h4 className="flex-1 text-3xl sm:text-5xl text-white truncate overflow-hidden md:w-full w-[150px]">
            {heading}
          </h4>
          <span className="flex-1 text-3xl sm:text-5xl text-white md:text-left text-right truncate overflow-hidden">
            {category}
          </span>
          <span className="flex-2 text-3xl sm:text-5xl text-white text-right md:block hidden">
            {startDate}
          </span>
        </Link>
      </div>
    </div>
  );
}
