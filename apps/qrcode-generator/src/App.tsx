import { ThemeProvider } from "@repo/react-ui";
import Form from "~/components/form";
import Navbar from "~/components/navbar";

const App = () => (
  <ThemeProvider storageKey="tree-view-example">
    <Navbar />
    <main className="container">
      <h1 className="mt-8 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        QR Code Generator
      </h1>

      <Form />
    </main>
  </ThemeProvider>
);

export default App;
