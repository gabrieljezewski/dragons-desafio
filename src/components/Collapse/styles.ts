import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid var(--gray-600);
  border-radius: 12px;
  overflow: hidden;
  background-color: var(--white);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  cursor: pointer;
  background-color: var(--gray-100);

  &:hover {
    background-color: var(--gray-200);
  }
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: var(--gray-900);
`;

export const Icon = styled.div<{ isOpen: boolean }>`
  transition: transform 0.3s ease;
  transform: rotate(${({ isOpen }) => (isOpen ? "180deg" : "0deg")});
`;

export const Content = styled.div`
  padding: 12px;
  border-top: 1px solid var(--gray-600);
`;
