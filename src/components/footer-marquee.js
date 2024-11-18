"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const FooterMarquee = ({ baseVelocity = 1, wrapperClassName, children }) => {
  const watcherRef = useRef(null);
  const firstTextRef = useRef(null);
  const secondTextRef = useRef(null);

  useEffect(() => {
    if (!firstTextRef.current || !secondTextRef.current || !watcherRef.current) return;

    const totalTextWidth = firstTextRef.current.scrollWidth;

    gsap.set(secondTextRef.current, { x: totalTextWidth });

    const loopAnimation = gsap.timeline({ repeat: -1, defaults: { ease: "none" } })
      .to([firstTextRef.current, secondTextRef.current], {
        x: `-=${totalTextWidth}`,
        duration: totalTextWidth / baseVelocity,
        modifiers: {
          x: (x) => `${parseFloat(x) % totalTextWidth}px`,
        },
        onRepeat: () => {
          gsap.set(firstTextRef.current, { x: 0 });
          gsap.set(secondTextRef.current, { x: totalTextWidth });
        },
      });

    return () => {
      loopAnimation.kill();
    };
  }, [baseVelocity]);

  return (
    <div ref={watcherRef} className={`w-full overflow-hidden relative ${wrapperClassName}`}>
      <div ref={firstTextRef} className="flex w-max">
        {children}
      </div>
      <div ref={secondTextRef} className="absolute left-0 top-0 flex w-max">
        {children}
      </div>
    </div>
  );
};

export default FooterMarquee; // Default export