import { ThemeProvider } from "@repo/react-ui";
import * as Shadcn from "~/components/shadcn-tabs";
import Navbar from "~/components/navbar";
import * as ReactTabs from "react-tabs";
import "react-tabs/style/react-tabs.css";

// type Data = {
//   title: string;
//   content: string;
// };

// const data: Data[] = [
//   {
//     title: "Overview",
//     content: "Content Panel 1",
//   },
//   {
//     title: "Analytics",
//     content: "Content Panel 2",
//   },
//   {
//     title: "Reports",
//     content: "Content Panel 3",
//   },
//   {
//     title: "Notifications",
//     content: "Content Panel 4",
//   },
// ];

const App = () => (
  <ThemeProvider storageKey="tabs-example">
    <Navbar />
    <main className="container">
      <h1 className="sr-only">Tabs example</h1>

      <h2 className="mt-16 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        React tabs
      </h2>
      <ReactTabs.Tabs>
        <ReactTabs.TabList>
          <ReactTabs.Tab>Title 1</ReactTabs.Tab>
          <ReactTabs.Tab>Title 2</ReactTabs.Tab>
        </ReactTabs.TabList>

        <ReactTabs.TabPanel>
          <h2>Any content 1</h2>
        </ReactTabs.TabPanel>
        <ReactTabs.TabPanel>
          <h2>Any content 2</h2>
        </ReactTabs.TabPanel>
      </ReactTabs.Tabs>

      <h2 className="mt-16 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Shadcn/Radix tabs
      </h2>

      <Shadcn.Tabs defaultValue="overview">
        <Shadcn.TabsList>
          <Shadcn.TabsTrigger value="overview">Overview</Shadcn.TabsTrigger>
          <Shadcn.TabsTrigger value="analytics">Analytics</Shadcn.TabsTrigger>
          <Shadcn.TabsTrigger value="reports">Reports</Shadcn.TabsTrigger>
          <Shadcn.TabsTrigger value="notifications">
            Notifications
          </Shadcn.TabsTrigger>
        </Shadcn.TabsList>
        <Shadcn.TabsContent value="overview">
          Make changes to your account here.
        </Shadcn.TabsContent>

        <Shadcn.TabsContent value="analytics">
          Change your password here.
        </Shadcn.TabsContent>
        <Shadcn.TabsContent value="reports">
          Make changes to your account here.
        </Shadcn.TabsContent>
        <Shadcn.TabsContent value="notifications">
          Change your password here.
        </Shadcn.TabsContent>
      </Shadcn.Tabs>
    </main>
  </ThemeProvider>
);

export default App;
