import { FC, useState } from "react";
import styled, { css } from "styled-components";
import useScrollEffect from "../hooks/useScrollEffect";
import Box from "./Box";

const StyledHeader = styled(Box)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: 12px 20px;
    width: 100%;
    height: 56px;
    max-width: 600px;
    background-color: ${theme.color.white};
    color: ${theme.color.black800};
    transition: box-shadow 0.5s ease-in-out;
  `}
`;

const Header: FC<{}> = ({ children }) => {
  const [showShadow, setShowShadow] = useState<boolean>(false);

  useScrollEffect(
    ({ y }) => {
      setShowShadow(y > 40);
    },
    {},
    []
  );


  return (
    <StyledHeader
      position="fixed"
      zIndex={100}
      top={0}
      boxShadow={showShadow ? 3 : 0}
    >
      {children}
    </StyledHeader>
  );
};

export default Header;
