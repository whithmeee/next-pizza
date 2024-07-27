import {
  Container,
  Filtration,
  ProductGroupList,
  Title,
  TopBar,
} from "@/components/shared/";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="pb-14 mt-10">
        <div className="flex gap-[90px]">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filtration />
          </div>

          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductGroupList
                title="Пиццы"
                items={[
                  {
                    id: 1,
                    name: "Пицца",
                    imgUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif",

                    items: [
                      {
                        price: 550,
                      },
                    ],
                  },

                  {
                    id: 1,
                    name: "Пицца",
                    imgUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif",
                    price: 1000,
                    items: [
                      {
                        price: 550,
                      },
                    ],
                  },
                ]}
                categoryId={1}
              />

              <ProductGroupList
                title="Напитки"
                items={[
                  {
                    id: 1,
                    title: "Какао",
                    imgUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE79702DC5EA0EBF92E2483DB89B11.avif",
                    price: 130,
                    items: [
                      {
                        price: 130,
                      },
                    ],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
