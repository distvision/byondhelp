import { useState } from "react";
import { Alert } from "react-native";
import auth from "@react-native-firebase/auth";
import { VStack, Heading, Icon, useTheme } from "native-base";
import { FontAwesome, Octicons } from "@expo/vector-icons";
import Logo from "../assets/logo_primary.svg";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { colors } = useTheme();

  function handleSingIn() {
    if (!email || !password) {
      return Alert.alert("Entrar", "Informe e-mail e senha");
    }
  }

  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
      <Logo />

      <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
        Acesse a sua conta
      </Heading>

      <Input
        onChangeText={setEmail}
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
