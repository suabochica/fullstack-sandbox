import { createElement, useEffect, useRef, useState } from "react";

const ImageToggleOnScroll = ({ primaryImage, secondaryImage, alt }) => {
  const imageRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isInView, setIsInView] = useState(false);

  const isImageInView = () => {
    const rect = imageRef.current.getBoundingClientRect();

    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  const onScrollHandler = () => {
    setIsInView(isImageInView());
  };

  useEffect(() => {
    setIsLoading(false);
    setIsInView(isImageInView());
    window.addEventListener("scroll", onScrollHandler);

    return () => {
      window.removeEventListener("scroll", onScrollHandler);
    };
  }, []);

  return createElement("img", {
    src: isLoading
      ? "data:image/gif"
      : isInView
        ? secondaryImage
        : primaryImage,
    alt: alt ?? "",
    ref: imageRef,
    height: "200",
    width: "200",
  });
};

export default ImageToggleOnScroll;
