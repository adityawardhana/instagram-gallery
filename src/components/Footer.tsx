import { FC } from "react";
import {
  HeartFillIcon,
  HeartIcon,
  HomeFillIcon,
  HomeIcon,
} from "@primer/octicons-react";
import styled, { css } from "styled-components";
import Box from "./Box";
import { Link } from "react-router-dom";

const FooterWrapper = styled(Box)`
  ${({ theme }) => css`
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 12px 20px;
    width: 100%;
    height: 56px;
    max-width: 600px;
    background-color: ${theme.color.white};
    color: ${theme.color.black800};
    box-shadow: ${theme.shadow[3]};
  `}
`;
interface FooterProps {
  active: "HOME" | "SAVE";
}
const Footer: FC<FooterProps> = ({ active }) => {
  return (
    <>
      <FooterWrapper>
        <Link to="/">
          {active === "HOME" ? (
            <HomeFillIcon size="medium" />
          ) : (
            <HomeIcon size="medium" />
          )}
        </Link>
        <Link to="/saved">
          {active === "SAVE" ? (
            <HeartFillIcon size="medium" />
          ) : (
            <HeartIcon size="medium" />
          )}
        </Link>
      </FooterWrapper>
      <Box height={56} />
    </>
  );
};
export default Footer;
