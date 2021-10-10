import React, { FC, Fragment } from "react";
import {
  ChevronLeftIcon,
  HeartFillIcon,
  HeartIcon,
} from "@primer/octicons-react";
import { useHistory, useParams } from "react-router-dom";
import Box from "../../components/Box";
import Header from "../../components/Header";
import Image from "../../components/Image";
import Spinner from "../../components/Spinner";
import Text from "../../components/Text";
import useFetch from "../../hooks/useFetch";
import useSavedGallery from "../../hooks/useSavedGallery";
import { getGalleryById } from "../../services/gellery";
import { renderImage } from "../../utils/image";
import Page404 from "../Page404";
import Accordion from "../../components/Accordion";

const GalleryDetail: FC<any> = () => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const {
    loading,
    data: { data },
    error,
  } = useFetch(() => getGalleryById(id));
  const { update, check } = useSavedGallery();
  const isSaved: boolean = check(data);

  if (error) {
    return <Page404 />;
  }

  return (
    <Fragment>
      <Header>
        <Box as="span" onClick={() => history.goBack()}>
          <ChevronLeftIcon size="medium" />
        </Box>
        <Text type="H16" color="black800" ml={8} clamp={1}>
          {data?.title || ""}
        </Text>
      </Header>
      {loading ? (
        <Box
          width={50}
          m="auto"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
        >
          <Spinner color="black800" />
        </Box>
      ) : (
        <Box mt={56} bg="white">
          <Box
            width="100%"
            pb="calc(100% * 5/4)"
            position="relative"
            overflow="hidden"
          >
            <Image
              src={renderImage(data.image_id, "md")}
              alt={data.title}
              placeholder={data.thumbnail?.lqip}
              width="100%"
              height="100%"
              position="absolute"
            />
          </Box>
          <Box p={20}>
            <Box
              pb={16}
              borderBottom="1px dashed black200"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box
                as="span"
                onClick={() => {
                  update(data);
                  check(data);
                }}
              >
                {isSaved ? (
                  <HeartFillIcon size="medium" fill="#E36950" />
                ) : (
                  <HeartIcon size="medium" fill="#E36950" />
                )}
              </Box>
              <Text type="B14" ml={24} textAlign="right">
                Credit:{" "}
                <Text as="span" type="B14" bold>
                  {data.credit_line}
                </Text>
              </Text>
            </Box>
            <Box py={16} borderBottom="1px dashed black200">
              <Accordion
                title={"Inscription"}
                content={data.inscriptions || "-"}
                isOpen
              />
            </Box>
            <Box py={16} borderBottom="1px dashed black200">
              <Accordion
                title={"Provenance Text"}
                content={data.provenance_text || "-"}
              />
            </Box>
            <Box py={16} borderBottom="1px dashed black200">
              <Accordion
                title={"Publication History"}
                content={data.publication_history || "-"}
              />
            </Box>
            <Box py={16}>
              <Accordion
                title={"Exhibition History"}
                content={data.exhibition_history || "-"}
              />
            </Box>
          </Box>
        </Box>
      )}
    </Fragment>
  );
};

export default GalleryDetail;
