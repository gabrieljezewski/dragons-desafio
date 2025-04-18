import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import Input from "../../components/Input";
import Text from "../../components/Text";
import * as S from "./Login.styles";

export default function Login() {
  const navigate = useNavigate();

  return (
    <S.ContainerScreen>
      <S.ContainerLogin>
        <S.Box>
          <Text>Para acessar digite suas credenciais</Text>
        </S.Box>
        <S.ContainerInput>
          <Input placeholder="E-mail" width="250px" />
          <Input placeholder="Senha" width="250px" type="password" />
        </S.ContainerInput>
        <S.Button>
          <Button
            text="Acessar"
            width="200px"
            onClick={() => navigate("/listar-dragoes")}
          />
        </S.Button>
      </S.ContainerLogin>
    </S.ContainerScreen>
  );
}
