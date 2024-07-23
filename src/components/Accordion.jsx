// this is the popover component, as presented in the Radix Getting Started tutorial
import * as React from "react";
import * as Accordion from "@radix-ui/react-accordion";
// import styles module (no destructuring)
import AccordionStyles from "@/components/Accordion.module.css";
import Link from "next/link";

const AccordionDemo = () => (
  <Accordion.Root type="single" defaultValue="item-2">
    <Accordion.Item value="item-1">
      <Accordion.Header>
        <Accordion.Trigger className={AccordionStyles.AccordionTrigger}>
          Open
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className={AccordionStyles.AccordionContent}>
        Things inside
      </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value="item-2">
      <Accordion.Header>
        <Accordion.Trigger className={AccordionStyles.AccordionTrigger}>
          open
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className={AccordionStyles.AccordionContent}>
        Things inside 12
      </Accordion.Content>
    </Accordion.Item>
  </Accordion.Root>
);

export default AccordionDemo;
