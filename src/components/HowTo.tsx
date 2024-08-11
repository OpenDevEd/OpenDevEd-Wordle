import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Text,
    UnorderedList,
    ListItem,
    Grid,
    GridItem,
    Box
} from '@chakra-ui/react';

interface HowToProps {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}
const HowTo = (props: HowToProps) => {
    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose} isCentered>
            <ModalOverlay
                bg="rgba(164,53,240, 0.4)"
                backdropFilter="blur(10px) hue-rotate(90deg)"
            />
            <ModalContent>
                <ModalHeader className="text-center" color={'#E3651D'}>
                    How To PLay
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text
                        fontStyle={'italic'}
                        fontWeight={'bold'}
                        marginBottom={'2'}
                    >
                        Guess The wordle in 6 tries or less
                    </Text>
                    <UnorderedList>
                        <ListItem>
                            Each guess must be a valid 5-letter word.
                        </ListItem>
                        <ListItem>
                            The color of the tiles will change to show how close
                            your guess was to the word.
                        </ListItem>
                    </UnorderedList>
                    <Text
                        fontStyle={'italic'}
                        fontWeight={'bold'}
                        marginBottom={'2'}
                    >
                        Examples:
                    </Text>
                    <Grid templateColumns="repeat(5, 1fr)" gap={0}>
                        <GridItem
                            w="12"
                            h="25"
                            className="text-center"
                            border={'1px solid #eee'}
                            bg="#6aaa64"
                            color={'#fff'}
                            fontWeight={'bold'}
                        >
                            W
                        </GridItem>
                        <GridItem
                            w="12"
                            h="25"
                            className="text-center"
                            border={'1px solid #eee'}
                            fontWeight={'bold'}
                        >
                            O
                        </GridItem>
                        <GridItem
                            w="12"
                            h="25"
                            className="text-center"
                            border={'1px solid #eee'}
                            fontWeight={'bold'}
                            bg="#c9b458"
                            color={'#fff'}
                        >
                            R
                        </GridItem>
                        <GridItem
                            w="12"
                            h="25"
                            className="text-center"
                            border={'1px solid #eee'}
                            fontWeight={'bold'}
                            bg="#A9A9A9"
                            color={'#fff'}
                        >
                            L
                        </GridItem>
                        <GridItem
                            w="12"
                            h="25"
                            className="text-center"
                            border={'1px solid #eee'}
                            fontWeight={'bold'}
                        >
                            D
                        </GridItem>
                    </Grid>
                    <Box marginTop={2}>
                        <Text>
                            <span className="font-bold">W</span> is in the word
                            and in the correct spot.
                        </Text>
                        <Text>
                            <span className="font-bold">R</span> is in the word
                            but in the wrong spot.
                        </Text>
                        <Text>
                            <span className="font-bold">L</span> is not in the
                            word in any spot.
                        </Text>
                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};
export default HowTo;
