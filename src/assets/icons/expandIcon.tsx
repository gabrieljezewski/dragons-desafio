import React from "react";

interface ExpandIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

export const ExpandIcon: React.FC<ExpandIconProps> = ({ color, ...props }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.59 8.58984L12 13.1698L7.41 8.58984L6 9.99984L12 15.9998L18 9.99984L16.59 8.58984Z"
      fill={color || "var(--gray-900)"}
    />
  </svg>
);
