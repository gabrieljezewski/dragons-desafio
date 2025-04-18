import styled from "styled-components";

interface StyledTextProps {
  fontSize?: string;
  color?: string;
  fontWeight?: "default" | "bold";
}

export const Text = styled.span<StyledTextProps>`
  font-size: ${(props) => props.fontSize || "16px"};
  color: ${(props) => props.color || "var(--black)"};
  font-weight: ${(props) => {
    if (props.fontWeight === "bold") return "600";
    return "400";
  }};
`;
