import React, { FC } from "react";
import { HeartFillIcon, TrashIcon } from "@primer/octicons-react";
import { Link } from "react-router-dom";
import Box from "../../../components/Box";
import Image from "../../../components/Image";
import Text from "../../../components/Text";
import { renderImage } from "../../../utils/image";

export interface CardProps {
  data: {
    id: string;
    image_id: string;
    title: string;
    thumbnail: { lqip: string };
    inscriptions: string;
  };
  onDelete: () => void;
}

const Card: FC<CardProps> = ({ data, onDelete }) => {
  return (
    <Box mb={16}>
      <Link to={`/${data.id}`}>
        <Box width="100%" pb="100%" position="relative" overflow="hidden">
          <Image
            src={renderImage(data.image_id, "md")}
            alt={data.title}
            placeholder={data.thumbnail?.lqip}
            width="100%"
            height="100%"
            position="absolute"
          />
        </Box>
      </Link>
      <Box px={20} py={12} flexDirection="column">
        <Box alignItems="flex-start" justifyContent="space-between" mb={4}>
          <Box as="span" flex="1" mr={24}>
            <Link to={`/${data.id}`}>
              <Text type="H16" bold>
                {data.title}
              </Text>
            </Link>
          </Box>
          <Box as="span">
            <HeartFillIcon size={20} fill="#E36950" />
            <Box as="span" ml={8} onClick={onDelete}>
              <TrashIcon size={20} fill="#E36950" />
            </Box>
          </Box>
        </Box>
        <Text
          type="B12"
          color="black500"
          textAlign="justify"
          wordBreak="break-word"
          clamp={2}
          dangerouslySetInnerHTML={{
            __html: data.inscriptions || "-",
          }}
        />
      </Box>
    </Box>
  );
};

export default Card;
