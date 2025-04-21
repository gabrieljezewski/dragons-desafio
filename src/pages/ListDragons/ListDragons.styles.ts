import styled from "styled-components";

export const ContainerScreen = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--background);
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: var(--primary-main);
  cursor: pointer;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  margin-bottom: 30px;

  @media (max-width: 1300px) {
    width: 90%;
  }

  @media (max-height: 700px) {
    margin-top: 200px;
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

  @media (max-width: 1300px) {
    width: 90%;
  }
`;

export const ContainerInput = styled.div`
  width: 100%;
  padding: 20px;
`;

export const Table = styled.div`
  width: 100%;
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 16px 16px 16px 20px;
  border: 1px solid var(--gray-200);
  background-color: var(--gray-100);

  @media (max-width: 890px) {
    grid-template-columns: 1fr 1fr 1fr;

    & > *:nth-child(3) {
      display: none;
    }
  }

  @media (max-width: 665px) {
    grid-template-columns: 1fr 1fr;

    & > *:nth-child(2) {
      display: none;
    }
  }
`;

export const TableBody = styled.div`
  max-height: 450px;
  min-height: 450px;
  overflow-y: auto;

  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 0;
  }
`;

export const EmptyMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  text-align: center;
  margin-top: 40px;
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 16px 16px 16px 20px;
  border-bottom: 1px solid var(--gray-200);
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: var(--gray-100);
  }

  @media (max-width: 890px) {
    grid-template-columns: 1fr 1fr 1fr;

    & > *:nth-child(3) {
      display: none;
    }
  }

  @media (max-width: 665px) {
    grid-template-columns: 1fr 1fr;

    & > *:nth-child(2) {
      display: none;
    }
  }
`;

export const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 4px 12px;
  border-radius: 50px;
  background-color: var(--purple-100);
`;

export const ContainerActions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
