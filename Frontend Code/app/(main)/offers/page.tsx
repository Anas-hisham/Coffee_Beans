import Input from "@/components/ui/Input";
import { COLORS, TEXT_STYLES } from "@/constants";
import Image from "next/image";
import React from "react";
import coffee from "@/public/assets/imgs/7532764.jpg";
import { RiErrorWarningLine } from "react-icons/ri";

const page = () => {
  const offers = [
    {
      id: 1,
      title: "خصم 25% على كل قوائم القهوة",
      description: "تعديل بيانات حسابك الشخصي",
      expiry: "1 يوم",
    },
    {
      id: 2,
      title: "خصم 15% على القهوة المثلجة",
      description: "صالح لجميع الطلبات",
      expiry: "3 أيام",
    },
    {
      id: 3,
      title: "اشتر واحد واحصل على الثاني مجانًا",
      description: "على المشروبات الساخنة فقط",
      expiry: "5 أيام",
    },
  ];

  return (
    <div className=" px-8 text-right">
      <div className="flex flex-col gap-8">
        <Input
          headline="هدايا مميزة لك"
          placeholder="استمتع بالكثير من الهدايا كلما اشتريت مزيد من القهوة"
        />

        <div style={{ ...TEXT_STYLES.READEX_PRO.BOLD.H6, color: COLORS.TEXT }}>
          الكوبونات الخاصة بك
        </div>

        {/* عرض كل الكوبونات */}
        <div className="flex flex-col gap-6">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="flex flex-row-reverse gap-5 items-center "
            >
              <Image
                src={coffee}
                alt="Coffee Cup"
                width={48}
                height={48}
                className="rounded-full object-cover object-top w-12 h-12"
              />

              <div className="flex flex-col gap-2">
                {/* Title */}
                <h4
                  className=" text-right"
                  style={{
                    ...TEXT_STYLES.READEX_PRO.SEMIBOLD.H6,
                    color: COLORS.TEXT,
                  }}
                >
                  {offer.title}
                </h4>

                {/* Description */}
                <p
                  className="text-right"
                  style={{
                    ...TEXT_STYLES.READEX_PRO.MEDIUM.H7,
                    color: COLORS.GRAY,
                  }}
                >
                  {offer.description}
                </p>

                {/* Expiry */}
                <div className="flex flex-row-reverse items-center gap-1 text-red-500 text-sm">
                  <span
                    style={{
                      ...TEXT_STYLES.READEX_PRO.MEDIUM.H8,
                    }}
                    className="text-red-500"
                  >
                    <RiErrorWarningLine />
                  </span>
                  <span className="text-xs">ينتهي خلال {offer.expiry}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
