import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Title } from "./Title";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

export type TypeProductCard = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
};

export const ProductCard: React.FC<TypeProductCard> = ({
  id,
  name,
  price,
  imageUrl,
  className,
}) => {
  return (
    <div className={cn("w-[285px] h-[430px]", className)}>
      <Link href={`/product/${id}`}>
        <div className="flex justify-center p-6 bg-secondary rounded-md h-[260px]">
          <img className="w-[215px] h-[215px]" src={imageUrl} alt="pizza" />
        </div>

        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />

        <p className="text-sm text-gray-400">
          Цыпленок, моцарелла, помидоры, хуй знает что
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-[20px]">
            от <b>{price} ₽</b>
          </span>

          <Button className="text-base font-bold" variant={"secondary"}>
            <Plus size={20} className="mr-1" />
            Добавить
          </Button>
        </div>
      </Link>
    </div>
  );
};
