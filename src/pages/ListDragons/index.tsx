import Button from "../../components/Button";
import Input from "../../components/Input";
import Text from "../../components/Text";

import { DragonTable } from "./components/DragonTable";
import { MenuDrawer } from "./components/MenuDrawer";
import { DragonDetailsModal } from "./components/DragonDetailsModal";
import { DeleteDragonModal } from "./components/DeleteDragonModal";
import { DragonFormModal } from "./components/DragonFormModal";

import { useListDragonsController } from "./ListDragons.controller";

import { MenuIcon } from "../../assets/icons/menuIcon";

import * as S from "./ListDragons.styles";

export default function ListDragons() {
  const {
    dragons,
    loading,
    setSearch,
    search,
    notFound,
    activeModal,
    handleOpenModal,
    handleCloseModal,
    handleDragonById,
    handleDeleteDragon,
    selectedDragon,
    fetchDragons,
    handleEditButton,
    handleDeleteButton,
    isDrawerOpen,
    toggleDrawer,
  } = useListDragonsController();

  return (
    <S.ContainerScreen>
      <S.IconWrapper onClick={toggleDrawer}>
        <MenuIcon />
      </S.IconWrapper>
      <S.Content>
        <S.Header>
          <S.Title>
            <Text fontSize="32px" color="var(--purple-900)" fontWeight="bold">
              Lista de Dragões
            </Text>
          </S.Title>
          <Button
            text="Novo Dragão"
            width="190px"
            onClick={() => handleOpenModal("add")}
          />
        </S.Header>
        <S.ContainerList>
          <S.ContainerInput>
            <Input
              placeholder="Buscar dragões pelo nome ou tipo"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </S.ContainerInput>

          <DragonTable
            dragons={dragons}
            loading={loading}
            notFound={notFound}
            handleOpenModal={handleOpenModal}
            handleDragonById={handleDragonById}
            handleEditButton={handleEditButton}
            handleDeleteButton={handleDeleteButton}
          />
        </S.ContainerList>
      </S.Content>

      <MenuDrawer isOpen={isDrawerOpen} onClose={toggleDrawer} />

      <DragonDetailsModal
        isOpen={activeModal === "details"}
        onClose={handleCloseModal}
        selectedDragon={selectedDragon}
      />

      <DragonFormModal
        isOpen={activeModal === "add" || activeModal === "edit"}
        onClose={handleCloseModal}
        onRefreshList={fetchDragons}
        mode={activeModal === "add" ? "add" : "edit"}
        dragonToEdit={activeModal === "edit" ? selectedDragon : null}
      />

      <DeleteDragonModal
        isOpen={activeModal === "delete"}
        onClose={handleCloseModal}
        onDelete={handleDeleteDragon}
      />
    </S.ContainerScreen>
  );
}
