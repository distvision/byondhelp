import { useState } from "react";

import { VStack, Heading, Icon, useTheme } from "native-base";
import { FontAwesome, Octicons } from "@expo/vector-icons";
import Logo from "../assets/logo_primary.svg";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function SignIn() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const { colors } = useTheme();

  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
      <Logo />

      <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
        Acesse a sua conta
      </Heading>

      <Input
        onChangeText={setName}
        placeholder="E-mail"
        mb={4}
        InputLeftElement={
          <Icon
            as={<FontAwesome name="envelope-o" color={colors.gray[300]} />}
            ml={4}
          />
        }
      />
      <Input
        onChangeText={setPassword}
        mb={8}
        placeholder="Senha"
        InputLeftElement={
          <Icon as={<Octicons name="key" color={colors.gray[300]} />} ml={4} />
        }
        secureTextEntry
      />

      <Button title="Entrar" w="full" />
    </VStack>
  );
}
