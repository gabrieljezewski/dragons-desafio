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

export const Label = styled.label`
  font-size: 14px;
  margin-bottom: 4px;
  color: var(--black);
`;

export const InputField = styled.input<StyledInputProps>`
  height: 46px;
  padding: 0 12px;
  border-radius: 8px;
  border: 1px solid var(--gray-600);
  font-size: 16px;
  font-weight: 500;
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

export const ErrorText = styled.span`
  font-size: 12px;
  color: var(--red-500);
  margin-top: 4px;
`;
