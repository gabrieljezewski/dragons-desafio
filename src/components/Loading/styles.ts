import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid var(--gray-primary);
  border-top: 4px solid var(--primary-main);
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin: auto;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;
