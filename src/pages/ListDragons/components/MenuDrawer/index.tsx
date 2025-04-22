import Drawer from "../../../../components/Drawer";
import Text from "../../../../components/Text";

import { useAuth } from "../../../../contexts/AuthContext";

import { DoorIcon } from "../../../../assets/icons/doorIcon";

import * as S from "./menuDrawer.styles";

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MenuDrawer = ({ isOpen, onClose }: MenuDrawerProps) => {
  const { user, logout } = useAuth();

  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <S.ContentMenu>
        <Text fontSize="18px" color="var(--dark-gray)" fontWeight="bold">
          Olá, {user?.name}
        </Text>
        <S.Box onClick={logout}>
          <DoorIcon />
          <Text fontSize="16px" color="var(--dark-gray)" fontWeight="bold">
            Sair
          </Text>
        </S.Box>
      </S.ContentMenu>
    </Drawer>
  );
};
