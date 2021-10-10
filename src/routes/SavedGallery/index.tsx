import React, { FC, Fragment } from "react";
import { ChevronLeftIcon } from "@primer/octicons-react";
import { useHistory } from "react-router-dom";
import Box from "../../components/Box";
import Header from "../../components/Header";
import Text from "../../components/Text";
import useSavedGallery from "../../hooks/useSavedGallery";
import Footer from "../../components/Footer";
import EmptyState from "../../components/EmptyState";
import Card, { CardProps } from "./components/Card";

const SavedGallery: FC<any> = () => {
  const history = useHistory();
  const { update, savedGallery } = useSavedGallery();

  return (
    <Fragment>
      <Header>
        <Box as="span" onClick={() => history.goBack()}>
          <ChevronLeftIcon size="medium" />
        </Box>
        <Text type="H16" color="black800" ml={8} clamp={1}>
          Saved Gallery
        </Text>
      </Header>
      <Box mt={56} bg="white">
        {savedGallery?.length ? (
          savedGallery.map((data: CardProps["data"], index?: React.Key) => {
            return (
              <Card key={index} data={data} onDelete={() => update(data)} />
            );
          })
        ) : (
          <EmptyState
            description="You don't have any saved item!"
            link="/"
            linkText="Let's Explore"
          />
        )}
      </Box>
      <Footer active="SAVE" />
    </Fragment>
  );
};

export default SavedGallery;
