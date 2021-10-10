import styled, { css } from "styled-components";
import { StyledImg } from "../../../components/Image";

interface ImageWrapperProps {
  isLeft?: boolean;
  isRight?: boolean;
  gridType?: "normal" | "instagrid";
}
const ImageWrapper = styled.div<ImageWrapperProps>`
  width: calc(33.33% - 8px);
  height: 0;
  padding-bottom: calc(33.33% - 8px);
  margin-left: 4px;
  margin-right: 4px;
  margin-bottom: 8px;
  position: relative;
  float: left;

  ${({ isLeft, isRight, gridType }) => {
    if (gridType === "instagrid" && (isLeft || isRight)) {
      return css`
        width: calc(66.6% - 8px);
        margin-left: 4px;
        margin-right: 4px;
        padding-bottom: calc(66.6% - ${isRight ? 7 : 8}px);
        ${isRight && `float: right;`}
      `;
    }
  }}

  ${StyledImg} {
    display: block;
    height: 100%;
    width: 100%;
    left: 0;
    position: absolute;
    user-select: none;
    top: 0;
    object-fit: cover;
    border-radius: 8px;
  }
`;

export default ImageWrapper;
