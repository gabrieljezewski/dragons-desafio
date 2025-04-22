import styled from "styled-components";

export const Table = styled.div`
  width: 100%;
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 16px 16px 16px 20px;
  border: 1px solid var(--gray-200);
  background-color: var(--gray-100);

  @media (max-width: 840px) {
    grid-template-columns: 1fr 1fr 1fr;

    & > *:nth-child(3) {
      display: none;
    }
  }

  @media (max-width: 650px) {
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

  @media (max-width: 840px) {
    grid-template-columns: 1fr 1fr 1fr;

    & > *:nth-child(3) {
      display: none;
    }
  }

  @media (max-width: 650px) {
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
