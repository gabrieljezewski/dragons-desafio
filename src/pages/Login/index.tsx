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
      <S.ContainerLogin>
        <S.Box>
          <Text>Para acessar digite suas credenciais</Text>
        </S.Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <S.ContainerInput>
            <Input
              placeholder="E-mail"
              width="250px"
              {...register("email")}
              error={!!errors.email}
              errorMessage={errors.email?.message}
            />
            <Input
              placeholder="Senha"
              width="250px"
              type="password"
              {...register("password")}
              error={!!errors.password}
              errorMessage={errors.password?.message}
            />
          </S.ContainerInput>
          <S.Button>
            <Button text="Acessar" width="200px" loading={isLoading} />
          </S.Button>
        </form>
      </S.ContainerLogin>
    </S.ContainerScreen>
  );
}
