import {
    Box,
    Button;
    Card;
    CardBody:
    CardHeader;
    CardRoot;
    CardTitle;
    Center;
    Image;
    Input;
    Text;
} from "@chakra-ui/react";

import logo from "";

const Login = () => {
    return (
        <>
        <Box
            backgroundColor="teal"
            width="100dvw"
            height="100dvh"
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
        >
            <CardRoot borderRadius="20px" backgroundColor="white" color="black">
                <CardHeader>
                    <CardTitle>
                        <Center>
                            <Image src={logo}/>
                        </Center>
                    </CardTitle>
                    <CardBody>
                        <Input placeholder="Username" type="text"/>
                        <Input placeholder="Password" type="password"/>
                        <Button>
                            <Text></Text>
                        </Button>
                    </CardBody>
                </CardHeader>
            </CardRoot>    
        </Box>
        </>
    );
};
export default Login;