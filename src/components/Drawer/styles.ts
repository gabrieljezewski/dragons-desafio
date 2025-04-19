import styled from "styled-components";

interface DrawerProps {
  isOpen: boolean;
}

export const Overlay = styled.div<DrawerProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transition: opacity 0.3s ease;
  z-index: 999;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const DrawerContainer = styled.div<DrawerProps>`
  position: fixed;
  top: 0;
  right: 0;
  width: 500px;
  height: 100%;
  background-color: var(--white);
  box-shadow: -2px 0 6px rgba(0, 0, 0, 0.1);
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease;
  z-index: 1000;
  padding: 24px;
  box-sizing: border-box;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
`;
