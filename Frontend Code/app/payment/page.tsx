"use client";
import React from "react";
import Input from "@/components/ui/Input";
import BackArrow from "@/components/ui/BackArrow";
import { COLORS, TEXT_STYLES } from "@/constants";
import coffee from "@/public/assets/imgs/7532764.jpg";
import Button from "@/components/ui/Button";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { clearCart } from "@/store/slices/cartSlice";

const page = () => {
  const cartItems = useSelector((state: any) => state.cart.items);
  const router = useRouter();
  const dispatch = useDispatch();

  // إجمالي الطلب (قبل التوصيل والخصم)
  const orderTotal = cartItems
    .reduce(
      (sum: number, item: any) => sum + parseFloat(item.price) * item.quantity,
      0
    )
    .toFixed(2);

  const deliveryFee = 10; // خدمة التوصيل
  const discount = 0; // كود الخصم

  const finalTotal = (parseFloat(orderTotal) + deliveryFee - discount).toFixed(
    2
  );

  const handleOrder = () => {
    router.push(
      `/confirm?text=${encodeURIComponent(
        "تم تنفيذ طلبك بنجاح"
      )}&buttonText=${encodeURIComponent("انهاء الطلب")}&redirect=/home`
    );
    dispatch(clearCart());
  };
  return (
    <div className="py-20 relative h-screen flex flex-col justify-between px-8 container mx-auto text-right">
      <div className="flex flex-col gap-8">
        <BackArrow />
        <Input
          isLocation
          headline="كافهينو"
          placeholder="المعادي - شارع النصر"
        />
        <div>
          <h2
            style={{
              ...TEXT_STYLES.READEX_PRO.SEMIBOLD.H5,
              color: COLORS.TEXT,
            }}
            className="mb-2"
          >
            الطلبات
          </h2>
          <div className="space-y-4">
            {cartItems.map((item: any) => (
              <div
                key={item.id}
                className="flex items-center justify-between flex-row-reverse"
              >
                <div className="flex items-center flex-row-reverse gap-4">
                  <Image
                    src={coffee}
                    alt={item.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="flex flex-col text-right">
                    <span
                      style={{
                        ...TEXT_STYLES.READEX_PRO.SEMIBOLD.H6,
                        color: COLORS.TEXT,
                      }}
                    >
                      {item.name}
                    </span>
                    <span
                      style={{
                        ...TEXT_STYLES.READEX_PRO.MEDIUM.H7,
                        color: COLORS.GRAY,
                      }}
                    >
                      {item.price} جنيه
                    </span>
                  </div>
                </div>
                <span className="font-bold text-green-600">
                  X{item.quantity}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          {/* تفاصيل الفاتورة */}
          <h2
            style={{
              ...TEXT_STYLES.READEX_PRO.SEMIBOLD.H5,
              color: COLORS.TEXT,
            }}
            className="mb-2"
          >
            تفاصيل الفاتورة
          </h2>

          <div className="space-y-2">
            {/* إجمالي الطلب */}
            <div className="flex justify-between flex-row-reverse">
              <span
                style={{
                  color: COLORS.GRAY,
                  ...TEXT_STYLES.READEX_PRO.MEDIUM.H7,
                }}
              >
                إجمالي الطلب
              </span>
              <span
                style={{
                  color: COLORS.TEXT,
                  ...TEXT_STYLES.READEX_PRO.SEMIBOLD.H5,
                }}
              >
                <span
                  style={{
                    ...TEXT_STYLES.READEX_PRO.MEDIUM.H7,
                    color: COLORS.GRAY,
                    marginLeft: 4,
                  }}
                >
                  جنيه
                </span>
                {orderTotal}
              </span>
            </div>

            {/* خدمة التوصيل */}
            <div className="flex justify-between flex-row-reverse">
              <span
                style={{
                  color: COLORS.GRAY,
                  ...TEXT_STYLES.READEX_PRO.MEDIUM.H7,
                }}
              >
                خدمة التوصيل
              </span>
              <span
                style={{
                  color: COLORS.TEXT,
                  ...TEXT_STYLES.READEX_PRO.SEMIBOLD.H5,
                }}
              >
                {deliveryFee.toFixed(2)}
                <span
                  style={{
                    ...TEXT_STYLES.READEX_PRO.MEDIUM.H7,
                    color: COLORS.GRAY,
                    marginLeft: 4,
                  }}
                >
                  جنيه
                </span>
              </span>
            </div>

            {/* كود الخصم */}
            <div className="flex justify-between flex-row-reverse">
              <span
                style={{
                  color: COLORS.GRAY,
                  ...TEXT_STYLES.READEX_PRO.MEDIUM.H7,
                }}
              >
                كود الخصم
              </span>
              <span
                style={{
                  color: COLORS.TEXT,
                  ...TEXT_STYLES.READEX_PRO.SEMIBOLD.H5,
                }}
              >
                {discount}
                <span
                  style={{
                    ...TEXT_STYLES.READEX_PRO.MEDIUM.H7,
                    color: COLORS.GRAY,
                    marginLeft: 4,
                  }}
                >
                  جنيه
                </span>
              </span>
            </div>

            {/* الإجمالي */}
            <div className="flex justify-between flex-row-reverse mt-2">
              <span
                style={{
                  color: COLORS.TEXT,
                  ...TEXT_STYLES.READEX_PRO.SEMIBOLD.H6,
                }}
              >
                الإجمالي
              </span>
              <span
                style={{
                  color: COLORS.TEXT,
                  ...TEXT_STYLES.READEX_PRO.SEMIBOLD.H4,
                }}
              >
                {finalTotal}
                <span
                  style={{
                    ...TEXT_STYLES.READEX_PRO.MEDIUM.H7,
                    color: COLORS.GRAY,
                    marginLeft: 4,
                  }}
                >
                  جنيه
                </span>
              </span>
            </div>
          </div>

          {/* زر الطلب */}
          <div className="mt-10">
            <Button isMain text="اطلب الان" onClick={handleOrder} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
