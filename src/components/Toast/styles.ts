import styled, { keyframes, css } from "styled-components";

interface toastProps {
  type?: "success" | "error";
}

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const typeStyles = {
  success: css`
    border-left: 5px solid var(--green-primary);
  `,
  error: css`
    border-left: 5px solid var(--red-primary);
  `,
};

export const ToastContainer = styled.div<toastProps>`
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  padding: 16px 20px;
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: 0 0 10px 0px #0001;
  animation: ${slideIn} 0.4s ease forwards;
  z-index: 1000;
  font-size: 14px;
  ${({ type }) => typeStyles[type!]}
`;

export const IconWrapper = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

export const Message = styled.span`
  flex: 1;
`;
