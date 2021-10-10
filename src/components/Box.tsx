import styled from "styled-components";
import {
  color,
  sizing,
  spacing,
  border,
  position,
  flexbox,
  display,
  shadow,
} from "../utils/theme";

export const Box = styled.div<any>`
  ${position};
  ${display};
  ${flexbox};
  ${sizing};
  ${spacing};
  ${color};
  ${border};
  ${shadow};
`;

Box.displayName = "Box";

export default Box;
