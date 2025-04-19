import styled from "styled-components";

export const ContentDragon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 22px;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
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

export const Date = styled.div`
  margin-bottom: 10px;
`;

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: var(--gray-600);
`;

export const Histories = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 10px;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 20px;
`;
