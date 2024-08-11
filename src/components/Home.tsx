import { Flex, Grid, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Home = () => {
    const grid = [1, 2, 3, 4, 5];
    return (
        <div>
            <Flex
                p={{ base: '2em', md: '8em' }}
                flexDirection={{ base: 'column', md: 'row' }}
                justifyContent={'space-between'}
                alignItems={'center'}
            >
                <Flex mb={{ base: '2em', md: '0' }} justifyContent={'center'}>
                    {grid.map((g, index) => {
                        return (
                            <Grid
                                templateColumns="repeat(5, 1fr)"
                                gap={0}
                                key={g}
                                className="row"
                                display={'block'}
                            >
                                <div
                                    className={
                                        index % 2 === 0 ? 'orange' : 'black'
                                    }
                                ></div>
                                <div
                                    className={
                                        index % 2 === 0 ? 'black' : 'grey'
                                    }
                                ></div>
                                <div
                                    className={
                                        index % 2 === 0 ? 'grey' : 'orange'
                                    }
                                ></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </Grid>
                        );
                    })}
                </Flex>
                <Flex
                    flexDirection={'column'}
                    className="mt-6"
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Text
                        className="intro-text"
                        display={{ base: 'none', md: 'block' }} // Hidden on small screens
                    >
                        MQWRTYUIOPJ
                    </Text>
                    <Text
                        className="intro-text"
                        display={{ base: 'none', md: 'block' }} // Hidden on small screens
                    >
                        ABRWORDLGHI
                    </Text>
                    <Text
                        className="intro-text"
                        display={{ base: 'none', md: 'block' }} // Hidden on small screens
                    >
                        TUVXNDOMYLF
                    </Text>

                    <Link to="/play" className="mt-6 play">
                        PLAY
                    </Link>
                </Flex>
            </Flex>
        </div>
    );
};

export default Home;
