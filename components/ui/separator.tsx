"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "@/lib/utils";

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator-root"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "bg-blue-200 shrink-0 data-[orientation=horizontal]:h-0.5  data-[orientation=vertical]:w-0.5",
        className
      )}
      {...props}
    />
  );
}

function TripleLineSeparator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return Array.from({ length: 3 }).map((_, index) => (
    <SeparatorPrimitive.Root
      key={index}
      data-slot="separator-root"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        " bg-blue-200 shrink-0 data-[orientation=horizontal]:h-0.5 data-[orientation=vertical]:w-0.5 rounded-full my-3",
        className,
        `${index === 0 ? "w-3/4" : index === 1 ? "w-1/2" : "w-1/3"}`
      )}
      {...props}
    />
  ));
}

export { Separator, TripleLineSeparator };
