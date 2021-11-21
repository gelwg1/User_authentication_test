import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  useToast,
  Text,
  Box,
  Flex,
} from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import { Card } from '../components/Card';
import { Layout } from '../components/Layout';
import {
  ChakraProvider,
  ColorModeScript,
  extendTheme,
  theme,
} from '@chakra-ui/react';

const customTheme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
    primary: theme.colors.pink,
  },
});

export default function Loginpage() {
  const history = useHistory();

  return (
    <ChakraProvider theme={customTheme}>
      <ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
      <Layout>
        <Heading textAlign="center" my={12}>
          Login
        </Heading>
        <Card maxW="md" mx="auto" mt={4}>
          <chakra.form
            onSubmit={async (e) => {
              e.preventDefault();
              // your login logic here
            }}
          >
            <Stack spacing="6">
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  name="password"
                  type="password"
                  autoComplete="password"
                  required
                />
              </FormControl>
              {/* <PasswordField /> */}
              <Button
                type="submit"
                colorScheme="blue"
                size="lg"
                fontSize="md"
              >
                Sign in
              </Button>
            </Stack>
          </chakra.form>
          <HStack justifyContent="space-between" my={4}>
            <Button variant="link" >
              Don't have account? Register here.
            </Button>
          </HStack>
          <Button
            variant="outline"
            isFullWidth
            colorScheme="red"
            leftIcon={<FaGoogle />}
            onClick={() => alert('sign in with google')}
          >
            Sign in with Google
          </Button>
        </Card>
      </Layout>
    </ChakraProvider>
  );
}
