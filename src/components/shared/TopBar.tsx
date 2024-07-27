import { cn } from "@/lib/utils";
import { Container, Categories, Sort } from "@/components/shared";
import React from "react";

interface Props {
  className?: string;
}

export const TopBar: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10",
        className
      )}
    >
      <Container className="mt-10 flex items-center justify-between">
        <Categories />
        <Sort />
      </Container>
    </div>
  );
};
