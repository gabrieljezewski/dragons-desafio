import React from "react";

interface TrashIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

export const TrashIcon: React.FC<TrashIconProps> = ({ color, ...props }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 2L9 3H4V5H20V3H15L14 2H10ZM5 7V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V7H5ZM8 9H10V20H8V9ZM14 9H16V20H14V9Z"
      fill={color || "var(--red-primary)"}
    />
  </svg>
);
