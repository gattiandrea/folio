"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectItem = ({ project }) => {
  const detailsRef = useRef(null); // Ref for the right column (details)
  const mediaRef = useRef(null); // Ref for the left column (media)
  const [mediaHeight, setMediaHeight] = useState(null); // State to store media height

  // Combine images and videos, sort by sequence field
  const media = [
    ...(project.videos || []).map((vid) => ({ ...vid, type: "video" })),
    ...(project.images || []).map((img) => ({ ...img, type: "image" })),
  ].sort((a, b) => a.sequence - b.sequence);

  // Function to update media height
  const updateMediaHeight = () => {
    if (mediaRef.current) {
      const height = mediaRef.current.scrollHeight; // Get total height of media column
      setMediaHeight(height); // Set media height state
    }
  };

  // Effect for ResizeObserver to handle dynamic height changes
  useEffect(() => {
    const resizeObserver = new ResizeObserver(updateMediaHeight); // Create a new ResizeObserver

    if (mediaRef.current) {
      resizeObserver.observe(mediaRef.current); // Observe the mediaRef for size changes
    }

    // Cleanup observer on unmount
    return () => {
      if (mediaRef.current) {
        resizeObserver.unobserve(mediaRef.current);
      }
    };
  }, []);

  // Set up ScrollTrigger only for larger screens using gsap.matchMedia
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1080px)", () => {
      // Create ScrollTrigger if mediaHeight is defined
      if (mediaHeight !== null) {
        const st = ScrollTrigger.create({
          trigger: detailsRef.current,
          start: "top top",
          end: `+=${mediaHeight} bottom`,
          pin: true,
          scrub: true,
          pinSpacing: false,
        });

        return () => {
          st.kill(); // Cleanup ScrollTrigger on unmount or screen resize
        };
      }
    });

    // Cleanup matchMedia instance on component unmount
    return () => mm.revert();
  }, [mediaHeight]);

  return (
    <div
      className="flex flex-col md:flex-row overflow-hidden content"
      ref={mediaRef}
    >
      {/* Left Column: Scrollable Media */}
      <div className="md:w-2/3 overflow-y-scroll md:p-4 p-2 overflow-hidden hide-scrollbar max-md:order-last">
        <div className="space-y-4">
          {media.map((item) => (
            <div key={item.id}>
              {item.type === "image" ? (
                <Image
                  src={item.url}
                  alt={project.company_name}
                  width={1080}
                  height={10800}
                  className="object-cover w-full h-auto"
                />
              ) : (
                <video
                  src={item.url}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: Sticky Project Details */}
      <div
        className="md:w-1/3 p-4 flex flex-col justify-end md:h-screen overflow-y-auto"
        ref={detailsRef}
      >
        <div className="flex flex-col">
          <h2 className="max-md:text-2xl sm:text-5xl text-white pb-1">
            {project.jobTitle}
          </h2>
          <p className="max-md:text-2xl sm:text-5xl text-white col-span-2 pb-1">
            {project.summary}
          </p>
          <p className="text-2xl sm:text-5xl text-white pb-1">
            {project.startDate}
          </p>
          <div className="flex flex-wrap gap-2 pb-1">
            {project.bulletPoints.map((point, i) => (
              <span className="text-white text-2xl sm:text-5xl" key={i}>
                {point}
              </span>
            ))}
          </div>
          <p className="w-fit text-2xl sm:text-5xl text-white pb-2">
            {project.externalURL && (
              <a
                href={project.externalURL}
                target="_blank"
                className="flex items-center"
              >
                Live ↗
              </a>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
