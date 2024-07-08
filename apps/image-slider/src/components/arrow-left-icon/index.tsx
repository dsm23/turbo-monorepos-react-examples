import type { FunctionComponent, SVGAttributes } from "react";
import { cn } from "@repo/common-utils";

type Props = SVGAttributes<SVGSVGElement>;

const ArrowLeftIcon: FunctionComponent<Props> = ({ className, ...props }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn("size-6", className)}
  >
    <path d="m12 19-7-7 7-7" />
    <path d="M19 12H5" />
  </svg>
);

export default ArrowLeftIcon;
