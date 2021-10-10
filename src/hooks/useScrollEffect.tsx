import React, { useEffect } from "react";

const isBrowser = typeof window !== `undefined`;

type ScrollEffectOption = {
  wait?: number;
  element?: React.RefObject<HTMLElement> | any;
  scrollToTop?: boolean;
  anchor?: boolean;
  offset?: number;
};

type ScrollPositionValue = { x: number; y: number };

/**
 * function to get scroll position
 * @param {Object} options
 * 1. element: refs element react
 * 2. useWindow: Array
 */
const getScrollPosition = (
  element?: React.RefObject<HTMLElement>
): ScrollPositionValue => {
  if (!isBrowser) return { x: 0, y: 0 };

  const target = element ? element.current : document.body;
  const position = target?.getBoundingClientRect();

  return element
    ? { x: position?.left || 0, y: position?.top || 0}
    : { x: window.pageXOffset, y: window.pageYOffset };
};

/**
 * Custom Hook to handle some scroll effect like:
 * 1. get scroll position with current x,y coordinates callback
 * 2. scroll to top when page change
 * 3. custom anchor scroll, can handle offset value ()
 * @param {Function} callback
 * - this callback effect will send param/args current x,y coordinates
 * @param {Object} options
 * 1. wait = time to handle throttle in get scroll position, value on miliseconds
 * 2. element = get scroll position of element (use ref from React)
 * 3. scrollToTop = scroll to top when page change
 * 4. anchor = use custom anchor scroll instead default html5 anchor
 * 5. offset = offset value that adjusts scroll position
 * @param {Array} deps or dependecies
 * - dependencies that will trigger scroll effect
 */

const useScrollEffect = (
  callback?: (data: ScrollPositionValue) => void | any,
  { wait = 0, element = null }: ScrollEffectOption = {},
  deps: Array<any> = []
) => {
  /**
   *  1. hooks for get scroll position
   */
  let throttleTimeout: any = null;
  /**
   *  scroll function to send callback effect with current position
   */
  const scrollWindow = () => {
    const currPos = getScrollPosition(element);
    callback && callback(currPos);
    throttleTimeout = null;
  };

  /**
   * function to handle scrolling effect with/without throttle
   */
  const handleScroll = () => {
    if (wait) {
      if (throttleTimeout === null) {
        throttleTimeout = setTimeout(scrollWindow, wait);
      }
    } else {
      scrollWindow();
    }
  };

  // trigger effect window scroll
  useEffect(() => {
    callback && handleScroll(); // initiate to get position
    callback && window.addEventListener("scroll", handleScroll);
    return () => callback && window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export default useScrollEffect;
