import styled from "styled-components";

interface StyledButtonProps {
  width?: string;
  variant: "primary" | "secondary";
}

export const Button = styled.button<StyledButtonProps>`
  width: ${(props) => props.width || "100%"};
  height: 42px;
  border: 1px solid transparent;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease,
    border-color 0.3s ease, transform 0.1s ease;

  background-color: ${(props) =>
    props.variant === "primary" ? "var(--primary-main)" : "white"};
  color: ${(props) =>
    props.variant === "primary" ? "white" : "var(--primary-main)"};
  border-color: ${(props) =>
    props.variant === "primary" ? "transparent" : "var(--purple-main)"};

  &:hover:enabled {
    background-color: ${(props) =>
      props.variant === "primary"
        ? "var(--purple-500)"
        : "rgba(121, 76, 255, 0.1)"};
  }

  &:active:enabled {
    transform: scale(0.97);
    filter: brightness(0.95);
  }

  &:disabled {
    background-color: var(--gray-primary);
    color: white;
    cursor: not-allowed;
    border-color: transparent;
  }
`;
