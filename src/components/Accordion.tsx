import React, { FC, useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@primer/octicons-react";
import styled, { css } from "styled-components";
import Box from "./Box";
import Text from "./Text";

interface AccordionProps {
  isOpen?: boolean;
  title: string;
  content?: JSX.IntrinsicElements | string;
}

const StyledContent = styled(Box)<{ isOpen: boolean }>`
  max-height: 0px;
  position: relative;
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
  cursor: pointer;

  ${({ isOpen }) =>
    isOpen &&
    css`
      max-height: 2000px;
    `}
`;
const Accordion: FC<AccordionProps> = ({ isOpen = false, title, content }) => {
  const [openState, setOpenState] = useState(isOpen);

  return (
    <Box>
      <Box alignItems="center" justifyContent="space-between" py={8}>
        <Text type="B16" bold>
          {title}
        </Text>
        <Box
          as="span"
          ml={16}
          minWidth={20}
          onClick={() => setOpenState(!openState)}
        >
          {!openState ? (
            <ChevronDownIcon size={20} />
          ) : (
            <ChevronUpIcon size={20} />
          )}
        </Box>
      </Box>
      <StyledContent isOpen={openState}>
        <Text
          type="B12"
          color="black500"
          textAlign="justify"
          wordBreak="break-word"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </StyledContent>
    </Box>
  );
};

export default Accordion;
