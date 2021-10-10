import React, { FC } from "react";
import { InfoIcon } from "@primer/octicons-react";
import { Link } from "react-router-dom";
import Box from "./Box";
import Text from "./Text";

interface EmptyStateProps {
  description: string;
  link?: string;
  linkText?: string;
  onClick?: (event: React.SyntheticEvent<HTMLAnchorElement, Event>) => void;
}
const EmptyState: FC<EmptyStateProps> = ({ description, link, linkText, onClick }) => {
  return (
    <Box
      p={20}
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      height="calc(100vh - 112px)"
    >
      <InfoIcon size="medium" />
      <Text type="H24" bold my={24} textAlign="center">
        {description}
      </Text>
      {link && (
        <Link to="/" onClick={onClick}>
          <Text type="B16" decoration="underline">{linkText}</Text>
        </Link>
      )}
    </Box>
  );
};

export default EmptyState;
