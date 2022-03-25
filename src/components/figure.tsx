import { FunctionComponent } from "react";
import NextImage, { ImageProps as NextImageProps } from "next/image";
import { Box, Stack, Text } from "@chakra-ui/react";

export interface FigureProps extends Omit<NextImageProps, "alt"> {
  caption: string;
}

const Figure: FunctionComponent<FigureProps> = ({ caption, ...rest }) => {
  return (
    <Stack as="figure" spacing={10}>
      <Box rounded="md" overflow="hidden" shadow="sm">
        <NextImage alt={caption} {...rest} />
      </Box>
      <Text as="figcaption" align="center" color="secondaryText" fontSize="sm">
        {caption}
      </Text>
    </Stack>
  );
};

export default Figure;
