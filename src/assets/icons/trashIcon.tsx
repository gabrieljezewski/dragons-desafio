import React from "react";

interface TrashIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

export const TrashIcon: React.FC<TrashIconProps> = ({ color, ...props }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.83331 17.5C5.37498 17.5 4.98276 17.3369 4.65665 17.0108C4.32998 16.6842 4.16665 16.2917 4.16665 15.8333V5H3.33331V3.33333H7.49998V2.5H12.5V3.33333H16.6666V5H15.8333V15.8333C15.8333 16.2917 15.6703 16.6842 15.3441 17.0108C15.0175 17.3369 14.625 17.5 14.1666 17.5H5.83331ZM14.1666 5H5.83331V15.8333H14.1666V5ZM7.49998 14.1667H9.16665V6.66667H7.49998V14.1667ZM10.8333 14.1667H12.5V6.66667H10.8333V14.1667Z"
      fill={color || "var(--red-primary)"}
    />
  </svg>
);
