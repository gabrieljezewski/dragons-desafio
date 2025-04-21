import styled from "styled-components";

interface DrawerProps {
  isOpen: boolean;
}

export const Overlay = styled.div<DrawerProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: ${(props) => (props.isOpen ? "block" : "none")};
  z-index: 1000;
  transition: all 0.3s ease-in-out;
`;

export const Drawer = styled.div<DrawerProps>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  background-color: white;
  z-index: 1050;
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.3s ease-in-out;
  box-shadow: 2px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;
