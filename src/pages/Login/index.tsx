import Button from "../../components/Button";
import Input from "../../components/Input";
import Text from "../../components/Text";

import { useLoginController } from "./Login.controller";

import * as S from "./Login.styles";

export default function Login() {
  const { email, setEmail, password, setPassword, isLoading, handleLogin } =
    useLoginController();

  return (
    <S.ContainerScreen>
      <S.ContainerLogin>
        <S.Box>
          <Text>Para acessar digite suas credenciais</Text>
        </S.Box>
        <S.ContainerInput>
          <Input
            placeholder="E-mail"
            width="250px"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Senha"
            width="250px"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </S.ContainerInput>
        <S.Button>
          <Button
            text={"Acessar"}
            width="200px"
            loading={isLoading}
            onClick={handleLogin}
          />
        </S.Button>
      </S.ContainerLogin>
    </S.ContainerScreen>
  );
}
