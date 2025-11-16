"use client";

import * as Accordion from "@radix-ui/react-accordion";

type Term = {
  title: string;
  content: string;
};

type CarTermsProps = {
  terms: Term[];
};

export const CarTerms = ({ terms }: CarTermsProps) => (
  <Accordion.Root type="single" collapsible className="space-y-3">
    {terms.map((term) => (
      <Accordion.Item key={term.title} value={term.title} className="glass-panel">
        <Accordion.Header>
          <Accordion.Trigger className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold">
            {term.title}
            <span className="text-platinum/60">+</span>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="px-4 pb-4 text-sm text-platinum/80">
          {term.content}
        </Accordion.Content>
      </Accordion.Item>
    ))}
  </Accordion.Root>
);

