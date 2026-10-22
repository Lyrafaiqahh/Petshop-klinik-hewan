"use client";

import { useState } from "react";
import { LuMinus, LuPlus } from "react-icons/lu";
import type { Faq } from "@/content/faqs";
import { cn } from "@/lib/utils";

export type FaqAccordionProps = {
  items: Faq[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <ul className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
      {items.map((item) => {
        const isOpen = openId === item.id;

        return (
          <li key={item.id}>
            <h3>
              <button
                type="button"
                id={`faq-trigger-${item.id}`}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${item.id}`}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-muted/60 focus-visible:bg-muted/60 focus-visible:outline-none sm:px-6"
              >
                <span className="text-sm font-semibold sm:text-base">
                  {item.question}
                </span>
                <span
                  className={cn(
                    "grid size-7 shrink-0 place-items-center rounded-full transition-colors",
                    isOpen
                      ? "bg-lime text-lime-foreground"
                      : "bg-muted text-foreground",
                  )}
                  aria-hidden
                >
                  {isOpen ? (
                    <LuMinus className="size-4" />
                  ) : (
                    <LuPlus className="size-4" />
                  )}
                </span>
              </button>
            </h3>
            <div
              id={`faq-panel-${item.id}`}
              role="region"
              aria-labelledby={`faq-trigger-${item.id}`}
              hidden={!isOpen}
              className="px-5 pb-5 text-sm leading-6 text-muted-foreground sm:px-6"
            >
              {item.answer}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
