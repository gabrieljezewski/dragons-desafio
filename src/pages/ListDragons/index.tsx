import Button from "../../components/Button";
import Input from "../../components/Input";
import Text from "../../components/Text";
import * as S from "./ListDragons.styles";

export default function ListDragons() {
  return (
    <S.ContainerScreen>
      <S.Header>
        <Text fontSize="32px" color="var(--purple-900)" fontWeight="bold">
          Lista de Dragões
        </Text>
        <Button text="Novo Dragão" width="190px" />
      </S.Header>
      <S.ContainerList>
        <Input placeholder="Buscar dragões pelo nome" />
        <S.Table>
          <Text>TABELA</Text>
        </S.Table>
      </S.ContainerList>
    </S.ContainerScreen>
  );
}
