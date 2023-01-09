import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assests/1.jpg"
import img2 from "../assests/2.jpg"
import img3 from "../assests/3.jpg"
import img4 from "../assests/4.jpg"
import img5 from "../assests/5.png"

const headingOptions = {
    pos: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    textTransform: "uppercase",
    p: "4",
    size: ["1xl","4xl"]
}

const Home = () => {
    return (
        <Box>
            <Carousel  autoPlay infiniteLoop interval={1000}
                showStatus={false} showThumbs={false} showArrows={false}>

                <Box w="full" h={['30vh','100vh']}>
                    <Image src={img1}/>
                    <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
                        Watch the future
                    </Heading>
                </Box>
                <Box w="full" h={['30vh','100vh']}>
                    <Image src={img2} />
                    <Heading bgColor={"whiteAlpha.700"} color={"black"} {...headingOptions}>
                        Gaming Console
                    </Heading>
                </Box>
                <Box w="full" h={['30vh','100vh']}>
                    <Image src={img3} />
                    <Heading bgColor={"whiteAlpha.600"} color={"white"} {...headingOptions}>
                        Future is Gaming
                    </Heading>
                </Box>
                <Box w="full" h={['30vh','100vh']}>
                    <Image src={img4} />
                    <Heading bgColor={"whiteAlpha.700"} color={"white"} {...headingOptions}>
                        Night Life is cool
                    </Heading>
                </Box>
            </Carousel>
        
            <Container maxW={"container.xl"} minH={"100vh"} p="16">
                <Heading textTransform={"uppercase"} py="2" w={"fit-content"}
                    borderBottom={"2px solid"} m="auto">
                    Services
                </Heading>

                <Stack h={"full"} p={"4"} alignItems={"center"} direction={["column", "row"]}>
                    <Image src={img5} h={["40", "400"]} filter={"hue-rotate(-130deg)"} />

                    <Text letterSpacing={["1px","widest"]} lineHeight={["160%","190%"]} p={["0", "16"]} textAlign={"center"}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Illum amet quae sequi, quisquam eos, aperiam placeat commodi
                        atque quaerat ducimus in maxime delectus numquam sed iste,
                        todio enim. Dolorem, praesentium.lorem Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Nulla eaque veritatis
                        laudantium officiis soluta, qui placeat reprehenderit sint
                        alias adipisci, beatae at quidem vel, aliquid voluptate saepe
                        sequi quisquam amet! Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quidem doloribus eius rem dignissimos. Aut fugiat, architecto,
                        quo doloremque, expedita saepe nemo quisquam deleniti tenetur eum quod
                        fuga aliquam? Ipsam vitae laudantium magnam qui velit magni ad sint adipisci
                        excepturi corporis!
                    </Text>
                </Stack>

            </Container>
        </Box>
    )

}

export default Home;