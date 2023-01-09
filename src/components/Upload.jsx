import { FiUploadCloud } from "react-icons/fi"
import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react'
import React from 'react'

const upload = () => {
    return (
        <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
            <VStack color={"purple.500"} h="full" justifyContent={"center"}>
                <FiUploadCloud size={'10vmax'} />

                <form >
                    <HStack>
                        <Input required type={"file"} css={{
                            "&::file-selector-button":{
                                border:"none",
                                width:"calc(100% + 36px)",
                                height: '100%',
                                marginLeft: '-10px',
                                color:'purple',
                                backgroundColor: 'white',
                                cursor:"pointer"
                            }
                        }} />
                        <Button colorScheme={'purple'} type={'submit'}>
                            Upload
                        </Button>
                    </HStack>
                </form>
            </VStack>
        </Container>
    )
}

export default upload