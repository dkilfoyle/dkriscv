import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

export const FadeIn = ({
  children,
  wrapperElement = "div",
  direction = null,
  duration = 1,
  delay = 0,
  from,
  to,
  ...props
}) => {
  const Component = wrapperElement;
  let compRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      compRef.current,
      {
        backgroundColor: from,
        delay,
      },
      {
        backgroundColor: to,
        duration,
      }
    );
  }, [children, delay]);
  return (
    <Component ref={compRef} {...props}>
      {children}
    </Component>
  );
};
