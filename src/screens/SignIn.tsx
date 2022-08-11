import { useState } from "react";
import { Alert } from "react-native";
import auth from "@react-native-firebase/auth";
import { VStack, Heading, Icon, useTheme } from "native-base";
import { FontAwesome, Octicons } from "@expo/vector-icons";
import Logo from "../assets/logo_primary.svg";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { isLoading } from "expo-font";

export function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { colors } = useTheme();

  function handleSingIn() {
    if (!email || !password) {
      return Alert.alert("Entrar", "Informe e-mail e senha");
    }

    setIsLoading(true);

    auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        console.log(error);
        setIsLoading(false);

        if (error.code === "auth/invalid-email") {
          return Alert.alert("Entrar", "E-mail invalido.");
        }
        if (error.code === "auth/wrong-password") {
          return Alert.alert("Entrar", "E-mail ou senha invalida.");
        }
        if (error.code === "auth/user-not-found") {
          return Alert.alert("Entrar", "E-mail ou senha invalida.");
        }

        return Alert.alert("Entrar", "Não foi possivel acessar");
      });
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

      <Button
        title="Entrar"
        w="full"
        onPress={handleSingIn}
        isLoading={isLoading}
      />
    </VStack>
  );
}
