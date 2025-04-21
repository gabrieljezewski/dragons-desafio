import React from "react";
import * as S from "./styles";

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, children }) => {
  return (
    <>
      <S.Overlay isOpen={isOpen} onClick={onClose} />
      <S.Drawer isOpen={isOpen}>{children}</S.Drawer>
    </>
  );
};

export default Drawer;
