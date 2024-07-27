"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowDownUp } from "lucide-react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

interface Props {
  className?: string;
}

const sorts: string[] | number[] = ["популярности", "цене", "алфавиту"];

const currentActiveIndex = 0;

export const Sort: React.FC<Props> = ({ className }) => {
  const [currentIndexSort, setCurrentIndexSort] = useState([
    sorts[currentActiveIndex],
  ]);

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 bg-gray-50 px-5 h-[50px] rounded-2xl cursor-pointer",
        className
      )}
    >
      <ArrowDownUp size={16} />
      <b>Сортировка:</b>

      <Popover>
        <PopoverTrigger>
          <b className="text-primary">{currentIndexSort}</b>
        </PopoverTrigger>

        <PopoverContent>
          {sorts.map((sort, i) => (
            <div key={i}>
              <b
                onClick={() => setCurrentIndexSort([sort])}
                className="cursor-pointer"
              >
                {sort}
              </b>
            </div>
          ))}
        </PopoverContent>
      </Popover>
    </div>
  );
};
