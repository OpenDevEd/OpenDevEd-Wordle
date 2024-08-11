import { Heading, Image, VStack } from "@chakra-ui/react";

const Logo = () => {
  return (
    <VStack display="flex" justifyContent="center" marginY={5}>
      <Image src="/Wordle-thumb.png" width={200} height={30} />
      <Heading color="gray.500" fontSize={14}>Just another way to have fun</Heading>
    </VStack>
  );
};

export default Logo;
