import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100%;
  max-width: 600px;
  background-color: var(--white);
  transform: translate(-50%, -50%);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  border-radius: 12px;
  padding: 24px;
  box-sizing: border-box;

  @media (max-width: 670px) {
    max-width: 500px;
  }

  @media (max-width: 550px) {
    max-width: 400px;
  }

  @media (max-width: 450px) {
    max-width: 340px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: var(--gray-600);
`;

export const Content = styled.div`
  max-height: 70vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0;
  }
`;
