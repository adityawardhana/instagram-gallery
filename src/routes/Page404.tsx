import React from "react";
import { AlertIcon } from "@primer/octicons-react";
import { Link } from "react-router-dom";
import Box from "../components/Box";
import Text from "../components/Text";

const Page404 = () => {
  return (
    <Box
      p={20}
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      height="100vh"
    >
      <AlertIcon size="medium" />
      <Text type="H24" bold my={24}>
        Oops, you're lost!
      </Text>
      <Link to="/">Back to Homepage</Link>
    </Box>
  );
};

export default Page404;
