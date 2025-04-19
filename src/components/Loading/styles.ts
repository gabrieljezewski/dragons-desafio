import styled, { keyframes, css } from "styled-components";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

interface LoadingStyleProps {
  variant?: "default" | "secondary";
}

export const Spinner = styled.div<LoadingStyleProps>`
  border: ${(props) => (props.variant === "default" ? "4px" : "2px")} solid
    var(--gray-primary);
  border-top: ${(props) => (props.variant === "default" ? "4px" : "2px")} solid
    var(--primary-main);
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;

  ${(props) =>
    props.variant === "default"
      ? css`
          width: 40px;
          height: 40px;
        `
      : css`
          width: 20px;
          height: 20px;
        `}
`;

export const LoadingContainer = styled.div<LoadingStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.variant === "default"
      ? css`
          height: 200px;
        `
      : css`
          height: auto;
        `}
`;
