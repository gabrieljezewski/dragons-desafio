import Button from "../../components/Button";
import Input from "../../components/Input";
import Text from "../../components/Text";

import { useListDragonsController } from "./ListDragons.controller";
import { formatDate } from "../../utils/formatDate";

import * as S from "./ListDragons.styles";
import Loading from "../../components/Loading";

export default function ListDragons() {
  const { dragons, loading, setSearch, search, notFound } =
    useListDragonsController();

  return (
    <S.ContainerScreen>
      <S.Header>
        <Text fontSize="32px" color="var(--purple-900)" fontWeight="bold">
          Lista de Dragões
        </Text>
        <Button text="Novo Dragão" width="190px" />
      </S.Header>
      <S.ContainerList>
        <S.ContainerInput>
          <Input
            placeholder="Buscar dragões pelo nome"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </S.ContainerInput>
        <S.Table>
          <S.TableHeader>
            <Text fontSize="14px" color="var(--gray-900)" fontWeight="bold">
              NOME
            </Text>
            <Text fontSize="14px" color="var(--gray-900)" fontWeight="bold">
              TIPO
            </Text>
            <Text fontSize="14px" color="var(--gray-900)" fontWeight="bold">
              DATA DE CRIAÇÃO
            </Text>
            <Text fontSize="14px" color="var(--gray-900)" fontWeight="bold">
              AÇÕES
            </Text>
          </S.TableHeader>

          {loading ? (
            <S.TableBody>
              <Loading />
            </S.TableBody>
          ) : notFound ? (
            <S.TableBody>
              <S.EmptyMessage>
                <Text fontSize="16px" color="var(--gray-700)">
                  Não encontramos nenhum resultado para esta busca.
                </Text>
                <Text fontSize="16px" color="var(--gray-700)">
                  Verifique o nome digitado e tente novamente.
                </Text>
              </S.EmptyMessage>
            </S.TableBody>
          ) : (
            <S.TableBody>
              {dragons.map((dragon) => (
                <S.TableRow key={dragon.id}>
                  <Text fontSize="16px" fontWeight="bold">
                    {dragon.name}
                  </Text>
                  <S.Tag>
                    <Text
                      fontSize="12px"
                      fontWeight="bold"
                      color="var(--purple-900)"
                    >
                      {dragon.type}
                    </Text>
                  </S.Tag>
                  <Text fontSize="14px" color="var(--gray-800)">
                    {formatDate(dragon.createdAt)}
                  </Text>
                </S.TableRow>
              ))}
            </S.TableBody>
          )}
        </S.Table>
      </S.ContainerList>
    </S.ContainerScreen>
  );
}
