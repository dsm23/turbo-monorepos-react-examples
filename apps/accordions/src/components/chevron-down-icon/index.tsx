import type { FunctionComponent, SVGAttributes } from "react";
import { cn } from "@repo/common-utils";

type Props = SVGAttributes<SVGSVGElement>;

const ChevronDownIcon: FunctionComponent<Props> = ({ className, ...props }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={cn("size-6", className)}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m19.5 8.25-7.5 7.5-7.5-7.5"
    />
  </svg>
);

export default ChevronDownIcon;
