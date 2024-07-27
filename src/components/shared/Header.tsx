import React from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/shared";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight, ShoppingCart, User } from "lucide-react";

type Props = {
  className?: string;
};

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border border-b")}>
      <Container className="flex items-center justify-between py-8">
        {/* {Левая часть} */}
        <div className="flex items-center gap-4">
          <Image src={"/pizza-logo.png"} alt="logo" width={35} height={35} />

          <div>
            <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
            <p className="text-sm  text-gray-400 leading-3">
              вкусней уже некуда
            </p>
          </div>
        </div>

        {/* {Правая часть} */}

        <div className="flex items-center gap-4">
          <Button variant={"outline"}>
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>Войти</span>
            </div>
          </Button>

          <div>
            <Button className="group relative">
              <b>520 Р</b>
              <span className="h-full w-[1px] bg-white/30 mx-3"></span>

              <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                <ShoppingCart size={16} className="relative" />
                <b className="ml-2">3</b>
              </div>

              <ArrowRight
                size={16}
                className="w-5 absolute right-4 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
              />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
