import styled from "styled-components";

export const ContainerScreen = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: var(--background);
`;

export const ImageContainer = styled.div`
  flex: 2;
  height: 100%;
  background-image: url("/src/assets/images/dragon-login.jpg");
  background-size: cover;
  background-position: center;
`;

export const ContainerLogin = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  padding: 60px 100px 40px 100px;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 80px 60px 40px 60px;
  border-radius: 20px;
  box-shadow: 0 0 10px 0px #0001;
  background-color: var(--white);
`;

export const Text = styled.div`
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
