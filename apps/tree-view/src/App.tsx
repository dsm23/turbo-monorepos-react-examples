import { ThemeProvider } from "@repo/react-ui";
import MenuList from "~/components/menu-list";
import type { Data } from "~/types";
import Navbar from "./components/navbar";

const menus: Data[] = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Profile",
    to: "/profile",
    children: [
      {
        label: "Details",
        to: "details",
        children: [
          {
            label: "Location",
            to: "location",
            children: [
              {
                label: "City",
                to: "city",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Settings",
    to: "/settings",
    children: [
      {
        label: "Account",
        to: "account",
      },
      {
        label: "Security",
        to: "security",
        children: [
          {
            label: "Login",
            to: "login",
          },
          {
            label: "Register",
            to: "register",
            children: [
              {
                label: "Random data",
                to: "",
              },
            ],
          },
        ],
      },
    ],
  },
];

const App = () => (
  <ThemeProvider storageKey="tree-view-example">
    <Navbar />
    <main className="container">
      <h1 className="sr-only">Tree view Example</h1>

      <div className="tree-view-container mt-10">
        <MenuList list={menus} />
      </div>
    </main>
  </ThemeProvider>
);

export default App;
