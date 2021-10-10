import React, { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Box from "../../../components/Box";
import Image from "../../../components/Image";
import Spinner from "../../../components/Spinner";
import Text from "../../../components/Text";
import { renderImage } from "../../../utils/image";
import ImageWrapper from "./ImageWrapper";

interface SearchProps {
  show: boolean;
  data: Array<any>;
  query: string;
  total: number;
  loading: boolean;
}

const StyledModal = styled.div`
  height: 100vh;
  overflow: auto;
  width: 100%;
  position: fixed;
  z-index: 9;
  top: 0px;
  max-width: 600px;
  background: ${({ theme }) => theme.color.white};
`;

const Search: FC<SearchProps> = ({ show, data, query, total, loading }) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [show]);

  if (show) {
    return (
      <StyledModal>
        <Box p={16} mt={56} bg="white" overflow="auto">
          {data?.length && query ? (
            data.map(
              (
                item: {
                  id: string | number;
                  image_id: string;
                  title?: string;
                  thumbnail?: { lqip?: string };
                },
                index: React.Key
              ) => {
                return (
                  <Link to={`/${item.id}`} key={index}>
                    <ImageWrapper>
                      <Image
                        className="square"
                        src={renderImage(item.image_id)}
                        alt={item.title}
                        placeholder={item.thumbnail?.lqip}
                      />
                    </ImageWrapper>
                  </Link>
                );
              }
            )
          ) : query && loading ? (
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
          ) : query && total === 0 ? (
            <Text type="H14">Search Not Found</Text>
          ) : (
            <Text type="H14">what are you looking for?</Text>
          )}
        </Box>
      </StyledModal>
    );
  }

  return null;
};

export default Search;
