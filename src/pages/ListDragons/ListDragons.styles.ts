import styled from "styled-components";

export const ContainerScreen = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--background);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 800px;
  margin-bottom: 30px;
`;

export const ContainerList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--white);
  width: 800px;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px 0px #0001;
  background-color: var(--white);
`;

export const Table = styled.div`
  margin-top: 20px;
`;
