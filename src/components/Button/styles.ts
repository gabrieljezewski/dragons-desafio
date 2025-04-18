import styled from "styled-components";

interface StyledButtonProps {
  width?: string;
}

export const Button = styled.button<StyledButtonProps>`
  width: ${(props) => props.width || "100%"};
  height: 42px;
  border: none;
  border-radius: 8px;
  background-color: var(--primary-main);
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover:enabled {
    background-color: var(--purple-800);
  }

  &:disabled {
    background-color: var(--gray-primary);
    cursor: not-allowed;
  }
`;
