import styled, { css } from "styled-components";

interface StyledInputProps {
  width?: string;
  error?: boolean;
}

export const Container = styled.div<StyledInputProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width || "100%"};
`;

export const ContainerLabel = styled.div`
  margin-bottom: 4px;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const InputField = styled.input<StyledInputProps>`
  height: 46px;
  padding: 0 40px 0 12px;
  border-radius: 8px;
  border: 1px solid var(--gray-600);
  font-size: 16px;
  font-weight: 500;
  width: 100%;
  transition: border-color 0.3s ease;

  &::placeholder {
    color: var(--gray-700);
  }

  &:focus {
    outline: none;
    border-color: var(--purple-500);
  }

  &:hover {
    border-color: var(--purple-500);
  }

  ${(props) =>
    props.error &&
    css`
      border-color: var(--red-primary);
    `}

  &:disabled {
    background-color: var(--gray-primary);
    cursor: not-allowed;
  }
`;

export const IconButton = styled.button`
  position: absolute;
  top: 50%;
  right: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  transform: translateY(-50%);
  cursor: pointer;

  svg {
    width: 22px;
    height: 22px;
  }
`;

export const ContainerError = styled.div`
  margin-top: 4px;
`;
