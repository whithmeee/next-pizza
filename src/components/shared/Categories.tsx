"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { Button } from "../ui/button";

interface Props {
  className?: string;
}

const cats = [
  "Пиццы",
  "Комбо",
  "Закуски",
  "Коктейли",
  "Кофе",
  "Напитки",
  "Десерты",
];
const activeIndex = 0;

export const Categories: React.FC<Props> = ({ className }) => {
  const [currentIndex, setCurrentIndex] = useState(activeIndex);

  return (
    <div
      className={cn("inline-flex gap-3 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {cats.map((cat, i) => (
        <a
          onClick={() => setCurrentIndex(i)}
          key={i}
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            currentIndex === i &&
              "bg-white shadow-md shadow-gray-200 text-primary"
          )}
        >
          <button>{cat}</button>
        </a>
      ))}
    </div>
  );
};
