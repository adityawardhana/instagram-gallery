import { FC } from "react";
import styled, { keyframes } from "styled-components";
import { ColorKeys } from "../themes/types";
import { position, spacing } from "../utils/theme";

const Spins = keyframes`
    0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
const circle = keyframes`
  0%,
  25% {
    stroke-dashoffset: 280;
    transform: rotate(0);
  }
  
  50%,
  75% {
    stroke-dashoffset: 75;
    transform: rotate(45deg);
  }
  
  100% {
    stroke-dashoffset: 280;
    transform: rotate(360deg);
  }
`;

const SVGSpinner = styled.svg`
  position: relative;
  height: 100%;
  circle {
    animation: 1.4s ease-in-out infinite both ${circle};
    display: block;
    fill: transparent;
    stroke: ${(props: any) =>
      props.color
        ? props.theme.color[props.color] || props.color
        : props.theme.color.primary};
    stroke-linecap: round;
    stroke-dasharray: 283;
    stroke-dashoffset: 280;
    stroke-width: 10px;
    transform-origin: 50% 50%;
  }
  animation: ${Spins} 2s infinite linear;
  ${spacing};
  ${position};
`;

export interface SpinnerProps {
  [key: string]: any;
  color?: ColorKeys;
}

export const Spinner: FC<SpinnerProps> = (props) => {
  return (
    <SVGSpinner
      {...props}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="45" />
    </SVGSpinner>
  );
};

export default Spinner;
