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
  box-shadow: 0 0 10px 0px #0001;
  background-color: var(--white);
`;

export const ContainerInput = styled.div`
  width: 800px;
  padding: 20px;
`;

export const Table = styled.div`
  width: 100%;
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 1fr;
  padding: 14px 0 14px 20px;
  border: 1px solid var(--gray-200);
  background-color: var(--gray-100);
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
  margin-top: 40px;
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 1fr;
  padding: 16px 0 16px 20px;
  border-bottom: 1px solid var(--gray-200);
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: var(--gray-100);
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

export const IconDelete = styled.div``;
