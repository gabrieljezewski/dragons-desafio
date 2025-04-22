import styled from "styled-components";

export const ContainerScreen = styled.div`
  min-height: 100dvh;
  padding: 20px;
  background-color: var(--background);
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin-bottom: 40px;
  border-radius: 10px;
  background-color: var(--primary-main);
  cursor: pointer;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  margin-bottom: 30px;

  @media (max-width: 1390px) {
    width: 80%;
  }

  @media (max-width: 1049px) {
    width: 100%;
  }
`;

export const Title = styled.div`
  @media (max-width: 600px) {
    & > * {
      font-size: 20px;
    }
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

export const ContainerList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--white);
  width: 60%;
  border-radius: 10px;
  box-shadow: 0 0 10px 0px #0001;
  background-color: var(--white);

  @media (max-width: 1390px) {
    width: 80%;
  }

  @media (max-width: 1049px) {
    width: 100%;
  }
`;

export const ContainerInput = styled.div`
  width: 100%;
  padding: 20px;
`;

export const ContainerActions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
