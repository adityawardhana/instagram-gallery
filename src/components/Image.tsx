import React, { FC, memo, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { position, sizing, spacing } from "../utils/theme";

const THRESHOLD = 0.01;
const ROOT_MARGIN = "75%";
/**
 * Lazy Load Image Component
 * src: String, placeholder: String|Node
 * able to use content loader component for image placeholder
 * @param {*} props
 */
interface ImageProps {
  [key: string]: any;
  src: string;
  alt?: string;
  placeholder?: JSX.Element | string;
}
const fadeIn = keyframes`
  0% {
    opacity: 0.1;
  }

  100% {
    opacity: 1;
  }
`;

export const StyledImg = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;

  &.loaded:not(.has-error) {
    animation: ${fadeIn} 1s ease-in-out;
  }

  &.has-error {
    content: url(https://via.placeholder.com/150);
  }
  ${sizing}
  ${spacing}
  ${position}
`;

const Image: FC<ImageProps> = ({
  src,
  alt,
  placeholder,
  ...rest
}) => {
  // lazy load not working if placeholder not found and image will be rendered as usual
  const [imageSrc, setImageSrc] = useState(
    placeholder ? (typeof placeholder === "string" ? placeholder : "") : src
  );
  const [imageRef, setImageRef] = useState<any>(null);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const onLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.classList.add("loaded");
  };

  const onError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.classList.add("has-error");

    setError(true);
  };

  useEffect(() => {
    let observer: any;
    let cancel: boolean = false;
    // start observe when image on condition not error and still loading
    if (imageRef && !error) {
      if (IntersectionObserver) {
        // support intersectionObserver
        observer = new IntersectionObserver(
          (entries) => {
            // callback function to load image source
            entries.forEach((entry) => {
              if (
                !cancel &&
                (entry.intersectionRatio > 0 || entry.isIntersecting)
              ) {
                setImageSrc(src);
                setLoaded(true);
                observer.unobserve(imageRef);
              }
            });
          },
          {
            // options
            threshold: THRESHOLD,
            rootMargin: ROOT_MARGIN,
          }
        );
        // call listener
        observer.observe(imageRef);
      } else {
        // Old browsers fallback
        setImageSrc(src);
        setLoaded(true);
      }
    }
    return () => {
      cancel = true;
      // on component cleanup, remove the listener
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src, imageSrc, imageRef]);

  // render node or html placeholder when image still loading
  if (placeholder && typeof placeholder !== "string" && !loaded) {
    return React.cloneElement(React.Children.only(placeholder), {
      ref: setImageRef,
    });
  }

  return (
    <StyledImg
      ref={setImageRef}
      src={imageSrc}
      onLoad={onLoad}
      onError={onError}
      alt={alt}
      {...rest}
    />
  );
};
type memoEqual = { src: string };
const propsAreEqual = (prev: memoEqual, next: memoEqual) =>
  prev.src === next.src;

export default memo(Image, propsAreEqual);
