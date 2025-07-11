import { animate } from "/assets/libs/motion/motion.min.js";

export function animateOnView(
  target,
  animationProps,
  options,
  once = false,
  offset = ""
) {
  Object.keys(animationProps).forEach((key) => {
    if (Array.isArray(animationProps[key])) {
      target.style[key] = animationProps[key][0]; // Set the initial value
    }
  });
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(entry.target, animationProps, options);
          if (once) observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    },
    {
      root: null,
      rootMargin: offset,
    }
  );

  observer.observe(target);
}

export function getCircleCoordinates(radius, degree) {
  // Convert degree to radians
  const radian = (degree * Math.PI) / 180;

  // Calculate x and y coordinates
  const x = radius * Math.cos(radian);
  const y = radius * Math.sin(radian);

  return { x, y };
}
