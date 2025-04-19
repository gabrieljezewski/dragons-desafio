import Button from "../../components/Button";
import Input from "../../components/Input";
import Text from "../../components/Text";
import Loading from "../../components/Loading";

import { formatDate } from "../../utils/formatDate";
import { truncateText } from "../../utils/truncateText";

import { DragonDetailsModal } from "./components/DragonDetailsModal";
import { DeleteDragonModal } from "./components/DeleteDragonModal";

import { useListDragonsController } from "./ListDragons.controller";

import * as S from "./ListDragons.styles";

export default function ListDragons() {
  const {
    dragons,
    loading,
    setSearch,
    search,
    notFound,
    activeModal,
    setSelectedDragonId,
    handleOpenModal,
    handleCloseModal,
    handleDragonById,
    handleDeleteDragon,
    selectedDragon,
  } = useListDragonsController();

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
            placeholder="Buscar dragões pelo nome ou tipo"
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
            <S.TableBody onClick={() => handleOpenModal("details")}>
              {dragons.map((dragon) => (
                <S.TableRow
                  key={dragon.id}
                  onClick={() => handleDragonById(dragon.id)}
                >
                  <Text fontSize="16px" fontWeight="bold">
                    {truncateText(dragon.name, 20)}
                  </Text>
                  <S.Tag>
                    <Text
                      fontSize="12px"
                      fontWeight="bold"
                      color="var(--purple-900)"
                    >
                      {truncateText(dragon?.type, 15)}
                    </Text>
                  </S.Tag>
                  <Text fontSize="14px" color="var(--gray-800)">
                    {formatDate(dragon?.createdAt)}
                  </Text>
                  <S.ContainerActions>
                    <Button
                      variant="secondary"
                      text="Alterar"
                      width="90px"
                      height="36px"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    />
                    <Button
                      text="Deletar"
                      width="90px"
                      height="36px"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedDragonId(dragon.id);
                        handleOpenModal("delete");
                      }}
                    />
                  </S.ContainerActions>
                </S.TableRow>
              ))}
            </S.TableBody>
          )}
        </S.Table>
      </S.ContainerList>

      <DragonDetailsModal
        isOpen={activeModal === "details"}
        onClose={handleCloseModal}
        selectedDragon={selectedDragon}
      />

      <DeleteDragonModal
        isOpen={activeModal === "delete"}
        onClose={handleCloseModal}
        onDelete={handleDeleteDragon}
      />
    </S.ContainerScreen>
  );
}
