import { MetaFunction } from "@remix-run/node";
export const meta: MetaFunction = () => {
  return [
    { title: "OnchologyChain" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion"
[]
export default function DashboardAndAccordion() {
  return (
    <div>
      <div className="p-4">
        <div className="flex justify-between items-center gap-4">
          <h1>For those cutie pie❤</h1>
        </div>
      </div>

      <AccordionDemo />
    </div>
  );
}

function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Why Syafika so Comel??</AccordionTrigger>
        <AccordionContent>
          Because no one more Comel in the whole world!!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it True?</AccordionTrigger>
        <AccordionContent>
          Yes, no one can prove otherwise.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Can Anyone Challenge her cutenes?</AccordionTrigger>
        <AccordionContent>
          Yes. But actually No.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}




