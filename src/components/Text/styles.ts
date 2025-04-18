import styled from "styled-components";

interface StyledTextProps {
  fontSize?: string;
  color?: string;
}

export const Text = styled.span<StyledTextProps>`
  font-size: ${(props) => props.fontSize || "16px"};
  color: ${(props) => props.color || "var(--black)"};
`;
