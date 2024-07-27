"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Title } from "./Title";
import { ProductCard } from "./ProductCard";

import { useIntersection } from "react-use";

interface Props {
  title: string;
  items: any[];
  categoryId: number;
  listClassName?: string;
  className?: string;
}

export const ProductGroupList: React.FC<Props> = ({
  title,
  items,
  listClassName,
  categoryId,
  className,
}) => {
  const intersectionRef = React.useRef(null);

  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      console.log(categoryId, title);
    }
  }, [categoryId, intersection?.isIntersecting]);
  return (
    <div className={cn(className)} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-bold mb-5" />

      <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
        {items.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            name={item.name}
            imageUrl={item.imgUrl}
            price={item.items[0].price}
          />
        ))}
      </div>
    </div>
  );
};
