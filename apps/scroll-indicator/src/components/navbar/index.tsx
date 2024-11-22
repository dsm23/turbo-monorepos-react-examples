import { ModeToggle } from "../mode-toggle";

const Navbar = () => (
  <nav className="bg-muted">
    <div className="container mx-auto">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img
              alt="Your Company"
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
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
