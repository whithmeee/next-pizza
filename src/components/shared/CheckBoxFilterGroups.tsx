"use client";
import React, { useState } from "react";
import { FilterChecboxProps, FilterCheckbox } from "./FilterCheckbox";
import { Input } from "../ui/input";

type Item = FilterChecboxProps;

interface Props {
  className?: string;
  title: string;
  items: Item[];
  defaultItems: Item[];
  limit?: number;
  searchInputPlaceholder?: string;
  onChange?: (values: string[]) => void;
  defualtValue?: string[];
}

export const CheckBpxFilterGroups: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 4,
  searchInputPlaceholder = "Поиск",
  onChange,
  defualtValue,
  className,
}) => {
  const [showAll, setShowAll] = useState(false);
  const [value, setValue] = useState("");

  const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const showList = showAll
    ? items.filter((item) =>
        item.text.toLowerCase().includes(value.toLowerCase())
      )
    : defaultItems.slice(0, limit);
  return (
    <div className={className}>
      <p className="font-bold mb-3 text-xl">{title}</p>

      {showAll && (
        <div>
          <Input
            placeholder={searchInputPlaceholder}
            className="bg-gray-50 border-none"
            value={value}
            onChange={handleSearchValue}
          />
        </div>
      )}

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar mt-4">
        {showList.map((item, index) => (
          <FilterCheckbox
            text={item.text}
            value={item.value}
            key={index}
            endAdornment={item.endAdornment}
            checked={false}
            onCheckedChange={(ids) => console.log(ids)}
          />
        ))}
      </div>

      {items.length > limit && (
        <div className={showAll ? "border-t border-t-neutral-100 mt-4" : ""}>
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-primary mt-3"
          >
            {showAll ? "Скрыть" : "+ Показать все"}
          </button>
        </div>
      )}
    </div>
  );
};
