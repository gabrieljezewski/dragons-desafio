import Button from "../../components/Button";
import Input from "../../components/Input";
import Text from "../../components/Text";

import { useLoginController } from "./Login.controller";

import * as S from "./Login.styles";

export default function Login() {
  const { register, handleSubmit, onSubmit, errors, isLoading } =
    useLoginController();

  return (
    <S.ContainerScreen>
      <S.ImageContainer />

      <S.ContainerLogin>
        <S.Box>
          <S.Text>
            <Text>Para acessar digite suas credenciais</Text>
          </S.Text>
          <form onSubmit={handleSubmit(onSubmit)}>
            <S.ContainerInput>
              <Input
                placeholder="E-mail"
                width="300px"
                {...register("email")}
                error={!!errors.email}
                errorMessage={errors.email?.message}
              />
              <Input
                placeholder="Senha"
                width="300px"
                type="password"
                {...register("password")}
                error={!!errors.password}
                errorMessage={errors.password?.message}
              />
            </S.ContainerInput>
            <S.Button>
              <Button text="Acessar" width="300px" loading={isLoading} />
            </S.Button>
          </form>
        </S.Box>
      </S.ContainerLogin>
    </S.ContainerScreen>
  );
}
