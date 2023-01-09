import { Box, VStack, Stack, Heading, HStack, Button, Input, Text } from '@chakra-ui/react'
import React from 'react'
import {BiSend} from "react-icons/bi"
import {FaGithub, FaInstagram, FaYoutube } from "react-icons/fa"

const Footer = () => {
    return <Box bgColor={"blackAlpha.900"} minH={"40"} p='16' color={'white'}>
        

        <Stack direction={["column", "row"]}>

            <VStack alignItems={"stretch"} w={"full"} px={"4"}>
                <Heading size="md" textTransform={'uppercase'} textAlign={["center", "left"]}>
                    Subscribe to get Updates
                </Heading>
                <HStack borderBottom={"2px solid white"} py="2">
                    <Input placeholder='Enter Email here...' border={"none"} borderRadius={"none"}
                        outline={"none"} focusBorderColor={"none"} />
                    <Button p={"0"} colorScheme={'purple'}
                        variant={"ghost"} borderRadius={"0 20px 20px 0"}>
                        <BiSend size={20} />
                    </Button>
                </HStack>
            </VStack>

            <VStack w={"full"} borderLeft={["none", "1px solid white"]}
                borderRight={["none", "1px solid white"]}>

                <Heading size={"md"} textTransform={"uppercase"} textAlign={"center"}>
                    Video Hub
                </Heading>
                <Text>All rights Reserved</Text>

            </VStack>

            <VStack w={"full"}>
                <Heading size={"md"} textTransform={"uppercase"}> Social Media</Heading>
                <Box direction="row">
                    <Button variant={"link"} color={"white"}>
                        <a href="https://youtube.com" target={"blank"}><FaYoutube size={20} /></a>
                    </Button>

                    <Button variant={"link"} color={"white"}>
                        <a href="https://instagram.com" target={"blank"}><FaInstagram size={20} /></a>
                    </Button>

                    <Button variant={"link"} color={"white"}>
                        <a href="https://github.com" target={"blank"}><FaGithub size={20} /></a>
                    </Button>
                </Box>
            </VStack>

        </Stack>

    </Box>

}

export default Footer