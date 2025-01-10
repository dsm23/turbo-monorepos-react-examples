import type { FunctionComponent, HTMLAttributes } from "react";
import { cn } from "@repo/common-utils";
import { ModeToggle } from "@repo/react-ui";

type Props = HTMLAttributes<HTMLElement>;

const Navbar: FunctionComponent<Props> = ({ className, ...props }) => (
  <nav {...props} className={cn("bg-muted", className)}>
    <div className="container mx-auto">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img
              alt="Your Company"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              className="h-8 w-auto"
            />
          </div>
        </div>
        <div className="ml-6 sm:block">
          <div className="flex items-center">
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
