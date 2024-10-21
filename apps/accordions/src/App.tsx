import { ThemeProvider } from "@repo/react-ui";
import CrapAccordian from "~/components/barebones-accordion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/shadcn-accordion";
import Navbar from "~/components/navbar";
import type { Data } from "~/types";

const data: Data[] = [
  {
    id: 1,
    question: "What are accordion components?",
    answer:
      "Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action.",
  },
  {
    id: 2,
    question: "What are they used for?",
    answer:
      "They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options.",
  },
  {
    id: 3,
    question: "Accordion as a musical instrument",
    answer:
      "The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres.",
  },
  {
    id: 4,
    question: "Can I create an accordion component with a different framework?",
    answer:
      "Yes of course, it is very possible to create an accordion component with another framework.",
  },
];

const App = () => (
  <ThemeProvider storageKey="accordions-example">
    <Navbar />
    <main className="container">
      <h1 className="sr-only">Accordions Example</h1>

      <h2 className="mt-16 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Barebones accordion
      </h2>
      <CrapAccordian data={data} />

      <h2 className="mt-16 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Shadcn/Radix accordion
      </h2>
      <Accordion type="single" collapsible>
        {data.map((dataItem) => (
          <AccordionItem key={dataItem.question} value={dataItem.id.toString()}>
            <AccordionTrigger>{dataItem.question}</AccordionTrigger>
            <AccordionContent>{dataItem.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  </ThemeProvider>
);

export default App;
