import styled, { css } from "styled-components";

interface StyledProps {
  width?: string;
  error?: boolean;
}

export const Container = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width || "100%"};
`;

export const ContainerLabel = styled.div`
  margin-bottom: 4px;
`;

export const TextAreaField = styled.textarea<StyledProps>`
  min-height: 100px;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid var(--gray-600);
  font-size: 16px;
  font-weight: 500;
  resize: vertical;
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

export const ContainerError = styled.div`
  margin-top: 4px;
`;
