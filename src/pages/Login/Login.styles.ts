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

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const ContainerLogin = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 100px;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 80px 60px 40px 60px;
  border-radius: 12px;
  box-shadow: 0 0 10px 0px #0001;
  background-color: var(--white);

  @media (max-width: 470px) {
    padding: 60px 30px 40px 30px;
  }
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
