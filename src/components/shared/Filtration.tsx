"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";
import { Title } from "./Title";
import { FilterCheckbox } from "./FilterCheckbox";
import { Slider } from "../ui/slider";
import { RangeSlider } from "./RangeSlider";
import { CheckBpxFilterGroups } from "./CheckBoxFilterGroups";
interface Props {
  className?: string;
}

const items = [
  {
    value: "1",
    text: "Сырный соус",
  },
  {
    value: "2",
    text: "Моцарелла",
  },
  {
    value: "3",
    text: "Солённые огурчики",
  },
  {
    value: "4",
    text: "Красный лук",
  },
  {
    value: "5",
    text: "Томаты",
  },
];

export const Filtration: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn(className)}>
      <Title text="Фильтрация" size="md" className="font-bold" />
      {/* Верхние чекбоскы */}
      <div className="flex flex-col gap-2 mt-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>

      {/* Инпуты цены */}
      <div className="mt-5 border-y-neutral-100 py-6 pb-7">
        <p className="font-bold text-xl mb-4">Цена от и до:</p>

        <div className="flex gap-4 items-center">
          <Input
            type="number"
            min={0}
            max={1000}
            placeholder="0"
            className="w-20"
          />
          <Input type="number" max={1000} placeholder="1000" className="w-20" />
        </div>
        {/* Рандж слайдер */}
        <RangeSlider
          className="mt-5"
          min={0}
          max={2000}
          step={10}
          value={[0, 2000]}
        />
      </div>

      <CheckBpxFilterGroups
        title="Ингредиенты"
        limit={4}
        defaultItems={items}
        items={items}
      />

      <Button size={"lg"}>Применить</Button>
    </div>
  );
};
