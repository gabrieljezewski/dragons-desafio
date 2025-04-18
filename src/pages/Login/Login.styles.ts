import styled from "styled-components";

export const ContainerScreen = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--background);
`;

export const ContainerLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--white);
  border-radius: 10px;
  padding: 60px 100px 40px 100px;
  box-shadow: 0 0 10px 0px #0001;
  background-color: var(--white);
`;

export const Box = styled.div`
  margin-bottom: 40px;
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40px;
`;
